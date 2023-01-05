USE `project`;

-- for Login
SELECT `email`, `password` from staff;
SELECT `email`, `password` from student;

-- modification, insertion, deletion of students and their cards (for ADMIN): exemplary values
INSERT INTO student values (1, '', '', '', '', 22222, '', 0, 0);
DELETE FROM student WHERE mID = 1;
UPDATE student SET firstname = '', lastname = '' WHERE mID = 1;

INSERT INTO card values (1, '28-12-2022', 'activ', 'book', 1);
DELETE FROM card WHERE cID = 1;
UPDATE card SET status = 'inactive' WHERE cID = 1;

-- modification, insertion, deletion of books and their copys (for ADMIN): exemplary values
INSERT INTO book values ('', '', '', 100, 2022, '', 0);
DELETE FROM book WHERE bID = 1;
UPDATE book SET title = '', author = '' WHERE bID = 1;

INSERT INTO copy_book values (1, '', 22.99, '23-11-2022', 'available', '');
DELETE FROM copy_book WHERE cbID = 1;
UPDATE copy_book SET status = 'borrow' WHERE cbID = 1;

-- modification, insertion, deletion of computers (for ADMIN): exemplary values
INSERT INTO computer values (1, '');
DELETE FROM computer WHERE comID = 1;
UPDATE computer SET model = '' WHERE comID = 1;

-- modification, insertion, deletion of Staff (for ADMIN): exemplary values
INSERT INTO staff values (1, '', '', 'liberian');
DELETE FROM staff WHERE sID = 1;
UPDATE staff SET `role` = 'admin' WHERE sID = 1;

-- modification, insertion, deletion of rentals (for ADMIN and LIBERIAN): exemplary values
INSERT INTO borrow_computer values (1, '01-12-2022', '', 1, 1, 1, 0);
DELETE FROM borrow_computer WHERE borrowCID = 1;
UPDATE borrow_computer SET returned = 1 WHERE borrowCID = 1;

INSERT INTO borrow_book values (1, '01-12-2022', '', 1, 1, 1, 0);
DELETE FROM borrow_book WHERE borrowID = 1;
UPDATE borrow_book SET returned = 1 WHERE borrowID = 1;

-- overview over all students and their cards (for admin and liberian)
SELECT * from student;
SELECT * from student s, card c WHERE c.student = s.mID GROUP BY s.mID;

-- overview over all books and their copys (for admin, liberian and student)
SELECT * from book;
SELECT * from book b, copy_book c WHERE c.book_ISBN = b.ISBN GROUP BY b.ISBN;

-- overview over all computers (for admin, liberian and student)
SELECT * from computer;

-- overview over all rented books, all rented computers (for ADMIN and LIBERIAN)
SELECT bb.startdate, bb.enddate, bb.card AS card_number, bb.returned, s.firstname, s.lastname, s.email, s.rental_num, b.ISBN, b.title, c.barcode
from borrow_book bb, student s, copy_book c, book b 
WHERE bb.student = s.mID and bb.copy_book = c.cbID and c.book_ISBN = b.ISBN
ORDER BY bb.returned, bb.startdate;

SELECT bb.startdate, bb.enddate, bb.card AS card_number, bb.returned, s.firstname, s.lastname, s.email, s.rental_num, c.model, c.comID
from borrow_computer bb, student s, computer c 
WHERE bb.student = s.mID and bb.computer = c.comID
ORDER BY bb.returned, bb.startdate;

-- shows all books and the amount of copys that is available at the moment (ADMIN; LIBERIAN and STUDENT)
SELECT b.*, COUNT(c.cbID) AS available_copies FROM book b, copy_book c WHERE b.ISBN = c.book_ISBN and c.`status` = 'available' GROUP BY b.ISBN ORDER BY b.title;

-- shows amount of computers from the same model that is available at the moment (ADMIN; LIBERIAN and STUDENT)
SELECT model, COUNT(comID) AS available_models FROM computer WHERE `status` = 'available' GROUP BY model ORDER BY model;

-- shows all book rentals, which are not returned yet; same for computers (ADMIN; LIBERIAN)
SELECT bb.startdate, bb.enddate, bb.card AS card_number, bb.returned, s.firstname, s.lastname, s.email, s.rental_num, b.ISBN, b.title, c.barcode
from borrow_book bb, student s, copy_book c, book b 
WHERE bb.student = s.mID and bb.copy_book = c.cbID and c.book_ISBN = b.ISBN and bb.returned = 0
ORDER BY bb.returned, bb.startdate;

SELECT bb.startdate, bb.enddate, bb.card AS card_number, bb.returned, s.firstname, s.lastname, s.email, s.rental_num, c.model, c.comID
from borrow_computer bb, student s, computer c 
WHERE bb.student = s.mID and bb.computer = c.comID and bb.returned = 0
ORDER BY bb.returned, bb.startdate;