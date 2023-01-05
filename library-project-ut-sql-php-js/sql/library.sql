-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 05, 2023 at 12:30 PM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `library`
--

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
CREATE TABLE IF NOT EXISTS `book` (
  `ISBN` varchar(50) NOT NULL,
  `title` varchar(50) DEFAULT NULL,
  `language` varchar(50) DEFAULT NULL,
  `page_num` int(10) UNSIGNED DEFAULT NULL,
  `product_year` int(10) UNSIGNED DEFAULT NULL,
  `subject` varchar(250) DEFAULT NULL,
  `author` varchar(100) DEFAULT NULL,
  `publisher` varchar(100) DEFAULT NULL,
  `copy_amount` int(10) UNSIGNED DEFAULT '0',
  PRIMARY KEY (`ISBN`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`ISBN`, `title`, `language`, `page_num`, `product_year`, `subject`, `author`, `publisher`, `copy_amount`) VALUES
('1', 'consequuntur', 'English', 497, 1999, 'history', 'Mrs. Susana Farrell', 'Isac Carroll', 1),
('2', 'quis', 'English', 468, 2000, 'history', 'Anais Trantow', 'Paul Pacocha', 3),
('3', 'ipsa', 'English', 229, 2018, 'history', 'Dejah Wolff', 'Bernadette Rippin', 3),
('4', 'expedita', 'English', 204, 2017, 'art', 'Leopoldo Hackett', 'Jamil Jakubowski Jr.', 2),
('5', 'quos', 'English', 162, 2016, 'art', 'Ms. Tanya McClure', 'Nathanael Spencer', 0),
('6', 'officiis', 'Estonian', 205, 1995, 'art', 'Prof. Keagan Koch MD', 'Dr. Edwina McCullough', 4),
('7', 'modi', 'Estonian', 255, 1998, 'philosophy', 'Prof. Karson Reichel', 'Roslyn Klein', 2),
('8', 'assumenda', 'Estonian', 157, 1976, 'philosophy', 'Sonia White', 'Dr. Sister Marks Jr.', 3),
('9', 'officia', 'Estonian', 351, 2021, 'philosophy', 'Christian Konopelski', 'Dr. Vern Cronin', 2);

-- --------------------------------------------------------

--
-- Table structure for table `borrow_book`
--

DROP TABLE IF EXISTS `borrow_book`;
CREATE TABLE IF NOT EXISTS `borrow_book` (
  `borrowID` int(11) NOT NULL AUTO_INCREMENT,
  `startdate` date DEFAULT NULL,
  `enddate` date DEFAULT NULL,
  `card` int(11) NOT NULL,
  `copy_book` int(11) NOT NULL,
  `student` int(11) NOT NULL,
  `returned` int(11) DEFAULT '0',
  PRIMARY KEY (`borrowID`),
  KEY `FK_copy_book` (`copy_book`),
  KEY `FK_member2` (`student`),
  KEY `FK_card` (`card`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `borrow_book`
--

INSERT INTO `borrow_book` (`borrowID`, `startdate`, `enddate`, `card`, `copy_book`, `student`, `returned`) VALUES
(1, '2023-01-04', '2023-01-19', 1, 1, 1, 0),
(2, '2023-01-04', '2023-01-19', 1, 2, 1, 0),
(3, '2023-01-04', '2023-01-19', 3, 5, 2, 0),
(4, '2023-01-04', '2023-01-19', 3, 6, 2, 0),
(5, '2023-01-05', '2023-01-20', 3, 7, 2, 0),
(6, '2023-01-05', '2023-01-20', 8, 1, 6, 0),
(7, '2023-01-05', '2023-01-20', 6, 11, 4, 0),
(8, '2023-01-05', '2023-01-20', 9, 3, 7, 0),
(9, '2023-01-05', '2023-01-20', 2, 13, 2, 0),
(12, '2023-01-05', '2023-01-20', 1, 10, 1, 0);

--
-- Triggers `borrow_book`
--
DROP TRIGGER IF EXISTS `insert_borrow_book`;
DELIMITER $$
CREATE TRIGGER `insert_borrow_book` BEFORE INSERT ON `borrow_book` FOR EACH ROW BEGIN
	UPDATE copy_book SET `status` = 'borrow' WHERE cbID = NEW.copy_book;
    UPDATE `student` SET `rental_num` = rental_num + 1 WHERE sID = NEW.`student`;
	SET NEW.startdate = CURDATE();
	SET NEW.enddate = ADDDATE(CURDATE(), 15);
    SET NEW.returned = 0;
END
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `insert_check`;
DELIMITER $$
CREATE TRIGGER `insert_check` BEFORE INSERT ON `borrow_book` FOR EACH ROW BEGIN
	IF (SELECT c.`status` FROM copy_book c WHERE c.cbID = NEW.copy_book) != 'available' 
		AND (SELECT m.rental_num FROM `student` m WHERE m.registered = 1 AND m.sID = NEW.`student`) >= 5
        AND (SELECT m.rental_num FROM `student` m WHERE m.registered = 0 AND m.sID = NEW.`student`) >= 1
        AND (SELECT c.`resource` FROM card c WHERE c.cID = NEW.card) != 'book'
    THEN
		SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Invalid borrow!';
    END IF;
END
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `update_borrow_book`;
DELIMITER $$
CREATE TRIGGER `update_borrow_book` AFTER UPDATE ON `borrow_book` FOR EACH ROW BEGIN
	IF NEW.returned = 1 THEN
		UPDATE copy_book SET `status` = 'available' WHERE cbID = NEW.copy_book;
		UPDATE `student` SET `rental_num` = rental_num - 1 WHERE sID = NEW.`student`;
    END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `borrow_computer`
--

DROP TABLE IF EXISTS `borrow_computer`;
CREATE TABLE IF NOT EXISTS `borrow_computer` (
  `borrowCID` int(11) NOT NULL AUTO_INCREMENT,
  `startdate` date DEFAULT NULL,
  `enddate` date DEFAULT NULL,
  `card` int(11) NOT NULL,
  `computer` int(11) NOT NULL,
  `student` int(11) NOT NULL,
  `returned` int(11) DEFAULT '0',
  PRIMARY KEY (`borrowCID`),
  KEY `FK_computer` (`computer`),
  KEY `FK_member_3` (`student`),
  KEY `FK_card_2` (`card`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `borrow_computer`
--

INSERT INTO `borrow_computer` (`borrowCID`, `startdate`, `enddate`, `card`, `computer`, `student`, `returned`) VALUES
(1, '2023-01-04', '2023-01-19', 2, 1, 1, 0),
(2, '2023-01-04', '2023-01-19', 4, 3, 2, 0),
(3, '2023-01-04', '2023-01-19', 4, 4, 2, 0),
(4, '2023-01-04', '2023-01-19', 2, 2, 1, 0);

--
-- Triggers `borrow_computer`
--
DROP TRIGGER IF EXISTS `insert_borrow_computer`;
DELIMITER $$
CREATE TRIGGER `insert_borrow_computer` BEFORE INSERT ON `borrow_computer` FOR EACH ROW BEGIN
	UPDATE computer SET `status` = 'borrow' WHERE comID = NEW.computer;
    UPDATE `student` SET `rental_num` = rental_num + 1 WHERE sID = NEW.`student`;
	SET NEW.startdate = CURDATE();
	SET NEW.enddate = ADDDATE(CURDATE(), 15);
    SET NEW.returned = 0;
END
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `insert_check_2`;
DELIMITER $$
CREATE TRIGGER `insert_check_2` BEFORE INSERT ON `borrow_computer` FOR EACH ROW BEGIN
	IF (SELECT c.`status` FROM computer c WHERE c.comID = NEW.computer) != 'available' 
		AND (SELECT m.rental_num FROM `student` m WHERE m.registered = 1 AND m.sID = NEW.`student`) >= 5
        AND (SELECT m.registered FROM `student` m WHERE m.sID = NEW.`student`) = 0
        AND (SELECT c.`resource` FROM card c WHERE c.cID = NEW.card) != 'computer'
    THEN
		SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Invalid borrow!';
    END IF;
END
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `update_borrow_computer`;
DELIMITER $$
CREATE TRIGGER `update_borrow_computer` AFTER UPDATE ON `borrow_computer` FOR EACH ROW BEGIN
	IF NEW.returned = 1 THEN
		UPDATE computer SET `status` = 'available' WHERE comID = NEW.computer;
		UPDATE `student` SET `rental_num` = rental_num - 1 WHERE sID = NEW.`student`;
    END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `card`
--

DROP TABLE IF EXISTS `card`;
CREATE TABLE IF NOT EXISTS `card` (
  `cID` int(11) NOT NULL,
  `activation` date DEFAULT NULL,
  `status` varchar(20) DEFAULT 'inactive',
  `resource` varchar(50) DEFAULT NULL,
  `student` int(11) NOT NULL,
  PRIMARY KEY (`cID`),
  KEY `FK_member` (`student`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `card`
--

INSERT INTO `card` (`cID`, `activation`, `status`, `resource`, `student`) VALUES
(1, '2020-01-09', 'active', 'book', 1),
(2, '2020-01-09', 'active', 'computer', 1),
(3, '2020-01-09', 'active', 'book', 2),
(4, '2020-01-10', 'active', 'computer', 2),
(5, '2020-01-11', 'active', 'book', 3),
(6, '2021-01-09', 'active', 'book', 4),
(7, '2021-10-09', 'active', 'book', 5),
(8, '2021-01-19', 'inactive', 'book', 6),
(9, '2022-01-09', 'active', 'book', 7),
(10, '2022-01-19', 'active', 'book', 8),
(11, '2022-01-19', 'inactive', 'book', 9),
(12, '2022-02-01', 'active', 'book', 10),
(13, '2022-03-09', 'active', 'book', 11);

-- --------------------------------------------------------

--
-- Table structure for table `computer`
--

DROP TABLE IF EXISTS `computer`;
CREATE TABLE IF NOT EXISTS `computer` (
  `comID` int(11) NOT NULL AUTO_INCREMENT,
  `model` varchar(50) DEFAULT NULL,
  `status` varchar(20) DEFAULT 'unavailable',
  PRIMARY KEY (`comID`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `computer`
--

INSERT INTO `computer` (`comID`, `model`, `status`) VALUES
(1, 'A1', 'borrow'),
(2, 'D2', 'borrow'),
(3, 'B5', 'borrow'),
(4, 'C56', 'borrow'),
(5, 'V4', 'available');

-- --------------------------------------------------------

--
-- Table structure for table `copy_book`
--

DROP TABLE IF EXISTS `copy_book`;
CREATE TABLE IF NOT EXISTS `copy_book` (
  `cbID` int(11) NOT NULL,
  `barcode` varchar(50) DEFAULT NULL,
  `price` float(5,2) DEFAULT NULL,
  `purchase_date` date DEFAULT NULL,
  `status` varchar(20) DEFAULT 'unavailable',
  `book_ISBN` int(11) NOT NULL,
  PRIMARY KEY (`cbID`),
  KEY `FK_book` (`book_ISBN`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `copy_book`
--

INSERT INTO `copy_book` (`cbID`, `barcode`, `price`, `purchase_date`, `status`, `book_ISBN`) VALUES
(1, 'ABCD0001', 23.00, '2020-02-21', 'borrow', 1),
(2, 'ABCD0002', 15.00, '2020-02-28', 'borrow', 2),
(3, 'ABCD0003', 30.00, '2020-02-28', 'borrow', 2),
(4, 'ABCD0004', 10.00, '2020-02-28', 'borrow', 3),
(5, 'ABCD0005', 12.00, '2020-03-06', 'borrow', 7),
(6, 'ABCD0006', 11.00, '2020-03-13', 'borrow', 8),
(7, 'ABCD0007', 8.00, '2020-03-20', 'borrow', 3),
(8, 'ABCD0008', 20.00, '2020-03-20', 'unavailable', 3),
(9, 'ABCD0009', 25.00, '2020-03-20', 'available', 7),
(10, 'ABCD0010', 16.00, '2020-03-20', 'borrow', 9),
(11, 'ABCD0011', 19.00, '2020-03-27', 'borrow', 8),
(12, 'ABCD0012', 21.00, '2020-04-03', 'available', 8),
(13, 'ABCD0013', 14.00, '2020-04-10', 'borrow', 8);

--
-- Triggers `copy_book`
--
DROP TRIGGER IF EXISTS `amount_calculation_delete`;
DELIMITER $$
CREATE TRIGGER `amount_calculation_delete` AFTER DELETE ON `copy_book` FOR EACH ROW BEGIN
    UPDATE
        book
    SET
        copy_amount = copy_amount - 1
    WHERE
        ISBN = OLD.book_ISBN ;
END
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `amount_calculation_insert`;
DELIMITER $$
CREATE TRIGGER `amount_calculation_insert` AFTER INSERT ON `copy_book` FOR EACH ROW BEGIN
    UPDATE
        book
    SET
        copy_amount = copy_amount + 1
    WHERE
        ISBN = NEW.book_ISBN ;
END
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `date_check`;
DELIMITER $$
CREATE TRIGGER `date_check` BEFORE INSERT ON `copy_book` FOR EACH ROW BEGIN
        IF NEW.purchase_date > CURDATE() THEN SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT
        = 'Invalid purchase_date!' ;
        END IF ;
    END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

DROP TABLE IF EXISTS `staff`;
CREATE TABLE IF NOT EXISTS `staff` (
  `sID` int(11) NOT NULL AUTO_INCREMENT,
  `s_username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `role` varchar(20) NOT NULL,
  PRIMARY KEY (`sID`),
  UNIQUE KEY `s_username` (`s_username`)
) ENGINE=MyISAM AUTO_INCREMENT=1000 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `staff`
--

INSERT INTO `staff` (`sID`, `s_username`, `password`, `role`) VALUES
(1, 'shutenko', 'password', 'admin'),
(2, 'librarian1', '20220105hi', 'librarian'),
(3, 'admin2', 'A2002', 'admin'),
(4, 'librarian2', 'L3002', 'librarian'),
(5, 'librarian3', 'L3003', 'librarian');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
CREATE TABLE IF NOT EXISTS `student` (
  `sID` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `postal_code` int(10) UNSIGNED DEFAULT NULL,
  `s_username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `registered` int(11) DEFAULT '0',
  `rental_num` int(10) UNSIGNED DEFAULT '0',
  PRIMARY KEY (`sID`),
  UNIQUE KEY `s_username` (`s_username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=104 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`sID`, `first_name`, `last_name`, `email`, `phone`, `postal_code`, `s_username`, `password`, `registered`, `rental_num`) VALUES
(2, 'Clare', 'Durgan', 'clare_durgan@gmail.com', '38001001002', 134, 'clar1', '1002', 1, 4),
(13, 'Dmytro', 'Shutenko', 'dmytro.shutenko@ut.ee', '38063124658', 51009, 'dima', 'password', 0, 0),
(1, 'Alexis', 'Hickle', 'alexis_hickle@gmail.com', '38001001001', 112, 'alex0', '20220105', 1, 5),
(3, 'Pierre', 'Greenholt', 'pierre_greenholt@gmail.com', '38001001003', 267, 'pi45', '1003', 1, 0),
(4, 'Tess', 'Beatty', 'tess_beatty@gmail.com', '38001001004', 234, 'tess998', '1004', 1, 1),
(5, 'Moses', 'Legros', 'moses_legros@gmail.com', '38001001005', 456, 'mos09', '1005', 1, 0),
(6, 'Danika', 'Kshlerin', 'danika_kshlerin@gmail.com', '38001001006', 345, 'dan_0', '1006', 1, 1),
(7, 'Rachel', 'Schulist', 'rachel_schulist@gmail.com', '38001001007', 321, 'ras_1', '1007', 1, 1),
(8, 'Alisha', 'Swift', 'alisha_swift@gmail.com', '38001001008', 576, 'alis_1', '1008', 1, 0),
(9, 'Micheal', 'Boyer', 'micheal_boyer@gmail.com', '38001001009', 786, 'micmic', '1009', 1, 0),
(10, 'Jermey', 'Nolan', 'jermey_nolan@gmail.com', '38001001010', 567, 'jeronimo', '1010', 1, 0),
(11, 'henz', 'Brown', 'henz_brown@gmail.com', '38001001011', 987, 'heinselman', '1011', 1, 0),
(103, 'Harry', 'Wang', 'tester@gmail.com', '+3748409409', 51009, 'sweadish_pro', 'harry', 1, 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
