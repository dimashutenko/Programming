DROP DATABASE IF EXISTS `project`;
CREATE DATABASE  IF NOT EXISTS `project` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `project`;

--
-- Table structure for table `student`
--
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student` (
  `sID` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `firstname` varchar(50) DEFAULT NULL,
  `lastname` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL UNIQUE CHECK (`email` LIKE '^[(a-z)][(a-z)|(0-9)]*@[a-z]+[.][a-z]{2,3}$' ),
  `phone` varchar(50) DEFAULT NULL,
  `postal_code` int unsigned DEFAULT NULL,
  `s_username` varchar(50) NOT NULL UNIQUE,
  `password` varchar(50) NOT NULL,
  -- if a member is a student, the value is 1 and if a member is no student, then the value is 0
  `registered` int DEFAULT 0 CHECK (registered IN (0,1)),
  -- amount of borrowed resources at the moment by the student
  `rental_num` int unsigned DEFAULT 0
);

--
-- Table structure for table `card`
--
DROP TABLE IF EXISTS `card`;
CREATE TABLE `card` (
  `cID` int NOT NULL auto_increment,
  `activation` date DEFAULT NULL,
  `status` varchar(20) DEFAULT 'inactive' CHECK (`status` IN ('active', 'inactive')),
  `resource` varchar(50) DEFAULT NULL CHECK (`resource` IN ('book', 'computer', 'meetingroom')),
  -- foreign key
  `student` int NOT NULL,
  PRIMARY KEY (`cID`)
);

ALTER TABLE `card`
ADD CONSTRAINT `FK_member` FOREIGN KEY (`student`) REFERENCES `student` (`sID`) ON DELETE CASCADE;

--
-- Table structure for table `staff`: populated with the logins for the administrator and the liberians
--
DROP TABLE IF EXISTS `staff`;
CREATE TABLE `staff` (
  `sID` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `s_username` varchar(50) NOT NULL UNIQUE,
  `password` varchar(50) NOT NULL,
  `role` varchar(20) NOT NULL CHECK (`role` IN ('admin', 'librarian'))
);

--
-- Table structure for table `book`
--
DROP TABLE IF EXISTS `book`;
CREATE TABLE `book` (
  `ISBN` varchar(50) NOT NULL,
  `title` varchar(50) DEFAULT NULL,
  `language` varchar(50) DEFAULT NULL,
  -- number of pages
  `page_num` int unsigned DEFAULT NULL CHECK (`page_num` > 0),
  -- production year of the book
  `product_year` int unsigned DEFAULT NULL,
  `subject` varchar(250) DEFAULT NULL,
  `author` varchar(100) DEFAULT NULL,  
  `publisher` varchar(100) DEFAULT NULL, 
  -- amount of all copies that the library has
  `copy_amount` int unsigned DEFAULT 0,
  PRIMARY KEY (`ISBN`)
);

-- the production year has to be the current year or a year in the past; it cannot be in the future
DELIMITER $$
CREATE TRIGGER year_check
	BEFORE INSERT ON book
	FOR EACH ROW
BEGIN
	IF NEW.product_year > Year(CURDATE()) THEN
		SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Invalid product_year!';
	END IF;
END $$
DELIMITER ;

--
-- Table structure for table `copy_book`
--
DROP TABLE IF EXISTS `copy_book`;
CREATE TABLE `copy_book` (
  `cbID` int NOT NULL AUTO_INCREMENT,
  `barcode` varchar(50) DEFAULT NULL,
  `price` float(5,2) DEFAULT NULL CHECK (`price` > 0.0),
  `purchase_date` date DEFAULT NULL,
  `status` varchar(20) DEFAULT 'unavailable' CHECK (`status` IN ('borrow', 'available', 'unavailable')),
  -- foreign key
  `book_ISBN` varchar(50) NOT NULL,
  PRIMARY KEY (`cbID`)
);

ALTER TABLE `copy_book`
ADD CONSTRAINT `FK_book` FOREIGN KEY (`book_ISBN`) REFERENCES `book` (`ISBN`) ON DELETE CASCADE;

-- a copy of a book cannot be purchased in the future, because it wouldnt be available in the library in that case at the moment
DELIMITER $$
CREATE TRIGGER date_check
	BEFORE INSERT ON copy_book
	FOR EACH ROW
BEGIN
	IF NEW.purchase_date > CURDATE() THEN
		SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Invalid purchase_date!';
	END IF;
END $$
DELIMITER ;

-- the calculation of the amount of copys of a book
DELIMITER $$
CREATE TRIGGER amount_calculation_insert
	AFTER INSERT ON copy_book
	FOR EACH ROW
BEGIN
	UPDATE book SET copy_amount = copy_amount + 1 WHERE ISBN = NEW.book_ISBN;
END $$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER amount_calculation_delete
	AFTER DELETE ON copy_book
	FOR EACH ROW
BEGIN
	UPDATE book SET copy_amount = copy_amount - 1 WHERE ISBN = OLD.book_ISBN;
END $$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER amount_calculation_update
	AFTER UPDATE ON copy_book
	FOR EACH ROW
BEGIN
	IF NEW.book_ISBN != OLD.book_ISBN THEN
		UPDATE book SET copy_amount = copy_amount - 1 WHERE ISBN = OLD.book_ISBN;
        UPDATE book SET copy_amount = copy_amount + 1 WHERE ISBN = NEW.book_ISBN;
    END IF;
END $$
DELIMITER ;

--
-- Table structure for table `computer`
--
DROP TABLE IF EXISTS `computer`;
CREATE TABLE `computer` (
  `comID` int NOT NULL AUTO_INCREMENT,
  `model` varchar(50) DEFAULT NULL,
  `status` varchar(20) DEFAULT 'unavailable' CHECK (`status` IN ('borrow', 'available', 'unavailable')),
  PRIMARY KEY (`comID`)
);

--
-- Table structure for table `borrow_book`
--
DROP TABLE IF EXISTS `borrow_book`;
CREATE TABLE `borrow_book` (
  `borrowID` int NOT NULL AUTO_INCREMENT,
  `startdate` date DEFAULT NULL,
  `enddate` date DEFAULT NULL,
  -- foreign keys
  `card` int NOT NULL,
  `copy_book` int NOT NULL,
  `student` int NOT NULL,
  -- if book is returned, it is 1, otherwise it is 0
  `returned` int DEFAULT 0 CHECK (`returned` IN (0,1)),
  PRIMARY KEY (`borrowID`)
);

ALTER TABLE `borrow_book`
ADD CONSTRAINT `FK_copy_book` FOREIGN KEY (`copy_book`) REFERENCES `copy_book` (`cbID`) ON DELETE CASCADE;

ALTER TABLE `borrow_book`
ADD CONSTRAINT `FK_member2` FOREIGN KEY (`student`) REFERENCES `student` (`sID`) ON DELETE CASCADE;

ALTER TABLE `borrow_book`
ADD CONSTRAINT `FK_card` FOREIGN KEY (`card`) REFERENCES `card` (`cID`) ON DELETE CASCADE;

-- set startdate, enddate, updates status of copy and updates amount of rentals
DELIMITER $$
CREATE TRIGGER insert_borrow_book
	BEFORE INSERT ON borrow_book
	FOR EACH ROW
BEGIN
	UPDATE copy_book SET `status` = 'borrow' WHERE cbID = NEW.copy_book;
    UPDATE `student` SET `rental_num` = rental_num + 1 WHERE sID = NEW.`student`;
	SET NEW.startdate = CURDATE();
	SET NEW.enddate = ADDDATE(CURDATE(), 15);
    SET NEW.returned = 0;
END $$
DELIMITER ;

-- checks if it is possible to borrow new item with the card: it is not possible to borrow more than 5 resources as registered student at the same time (or more than 1 book as not registered student)
DELIMITER $$
CREATE TRIGGER insert_check
	BEFORE INSERT ON borrow_book
	FOR EACH ROW
BEGIN
	IF (SELECT c.`status` FROM copy_book c WHERE c.cbID = NEW.copy_book) != 'available' 
		AND (SELECT m.rental_num FROM `student` m WHERE m.registered = 1 AND m.sID = NEW.`student`) >= 5
        AND (SELECT m.rental_num FROM `student` m WHERE m.registered = 0 AND m.sID = NEW.`student`) >= 1
        AND (SELECT c.`resource` FROM card c WHERE c.cID = NEW.card) != 'book'
    THEN
		SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Invalid borrow!';
    END IF;
END $$
DELIMITER ;

-- changes status of copy and number of rentals when book is returned
DELIMITER $$
CREATE TRIGGER update_borrow_book
	AFTER UPDATE ON borrow_book
	FOR EACH ROW
BEGIN
	IF NEW.returned = 1 THEN
		UPDATE copy_book SET `status` = 'available' WHERE cbID = NEW.copy_book;
		UPDATE `student` SET `rental_num` = rental_num - 1 WHERE sID = NEW.`student`;
    END IF;
END $$
DELIMITER ;

--
-- Table structure for table `borrow_computer`
--
DROP TABLE IF EXISTS `borrow_computer`;
CREATE TABLE `borrow_computer` (
  `borrowCID` int NOT NULL AUTO_INCREMENT,
  `startdate` date DEFAULT NULL,
  `enddate` date DEFAULT NULL,
  -- foreign keys
  `card` int NOT NULL,
  `computer` int NOT NULL,
  `student` int NOT NULL,
  -- if computer is returned, it is 1, otherwise it is 0
  `returned` int DEFAULT 0 CHECK (`returned` IN (0,1)),
  PRIMARY KEY (`borrowCID`)
);

ALTER TABLE `borrow_computer`
ADD CONSTRAINT `FK_computer` FOREIGN KEY (`computer`) REFERENCES `computer` (`comID`) ON DELETE CASCADE;

ALTER TABLE `borrow_computer`
ADD CONSTRAINT `FK_member_3` FOREIGN KEY (`student`) REFERENCES `student` (`sID`) ON DELETE CASCADE;

ALTER TABLE `borrow_computer`
ADD CONSTRAINT `FK_card_2` FOREIGN KEY (`card`) REFERENCES `card` (`cID`) ON DELETE CASCADE;

-- set startdate, enddate, updates status of copy and updates amount of rentals
DELIMITER $$
CREATE TRIGGER insert_borrow_computer
	BEFORE INSERT ON borrow_computer
	FOR EACH ROW
BEGIN
	UPDATE computer SET `status` = 'borrow' WHERE comID = NEW.computer;
    UPDATE `student` SET `rental_num` = rental_num + 1 WHERE sID = NEW.`student`;
	SET NEW.startdate = CURDATE();
	SET NEW.enddate = ADDDATE(CURDATE(), 15);
    SET NEW.returned = 0;
END $$
DELIMITER ;

-- checks if it is possible to borrow new item with the card
DELIMITER $$
CREATE TRIGGER insert_check_2
	BEFORE INSERT ON borrow_computer
	FOR EACH ROW
BEGIN
	IF (SELECT c.`status` FROM computer c WHERE c.comID = NEW.computer) != 'available' 
		AND (SELECT m.rental_num FROM `student` m WHERE m.registered = 1 AND m.sID = NEW.`student`) >= 5
        AND (SELECT m.registered FROM `student` m WHERE m.sID = NEW.`student`) = 0
        AND (SELECT c.`resource` FROM card c WHERE c.cID = NEW.card) != 'computer'
    THEN
		SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Invalid borrow!';
    END IF;
END $$
DELIMITER ;

-- changes status of copy and number of rentals when book is returned
DELIMITER $$
CREATE TRIGGER update_borrow_computer
	AFTER UPDATE ON borrow_computer
	FOR EACH ROW
BEGIN
	IF NEW.returned = 1 THEN
		UPDATE computer SET `status` = 'available' WHERE comID = NEW.computer;
		UPDATE `student` SET `rental_num` = rental_num - 1 WHERE sID = NEW.`student`;
    END IF;
END $$
DELIMITER ;