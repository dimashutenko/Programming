-- get more data about crime from crime_scene_reports

select * from crime_scene_reports
    where year = 2021 and day = 28 and month = 7 and street = 'Humphrey Street';

-- Theft of the CS50 duck took place at 10:15am at the Humphrey Street bakery.
-- Interviews were conducted today with three witnesses who were present at the time –
-- each of their interview transcripts mentions the bakery.

-------------------------------------------------------------------------

-- find relevant interviews

select * from interviews
    where year = 2021 and day = 28 and month = 7 and transcript like '%bakery%';

-- Sometime within ten minutes of the theft,
-- I saw the thief get into a car in the bakery parking lot and drive away.
-- If you have security footage from the bakery parking lot,
-- you might want to look for cars that left the parking lot in that time frame.

-- I don't know the thief's name, but it was someone I recognized.
-- Earlier this morning, before I arrived at Emma's bakery,
-- I was walking by the ATM on Leggett Street and saw the thief there withdrawing some money.

-- As the thief was leaving the bakery,
-- they called someone who talked to them for less than a minute.
-- In the call, I heard the thief say that
-- they were planning to take the earliest flight out of Fiftyville tomorrow.
-- The thief then asked the person on the other end of the phone to purchase the flight ticket.

-------------------------------------------------------------------------

-- get license_plate of the suspect's car

select * from bakery_security_logs
    where year = 2021 and day = 28 and month = 7 and activity = 'exit' and hour =10 and minute >=15 and minute <=30;

+-----+------+-------+-----+------+--------+----------+---------------+
| id  | year | month | day | hour | minute | activity | license_plate |
+-----+------+-------+-----+------+--------+----------+---------------+
| 260 | 2021 | 7     | 28  | 10   | 16     | exit     | 5P2BI95       |
| 261 | 2021 | 7     | 28  | 10   | 18     | exit     | 94KL13X       |
| 262 | 2021 | 7     | 28  | 10   | 18     | exit     | 6P58WS2       |
| 263 | 2021 | 7     | 28  | 10   | 19     | exit     | 4328GD8       |
| 264 | 2021 | 7     | 28  | 10   | 20     | exit     | G412CB7       |
| 265 | 2021 | 7     | 28  | 10   | 21     | exit     | L93JTIZ       |
| 266 | 2021 | 7     | 28  | 10   | 23     | exit     | 322W7JE       |
| 267 | 2021 | 7     | 28  | 10   | 23     | exit     | 0NTHK55       |
+-----+------+-------+-----+------+--------+----------+---------------+

-----------------------------------------------------------------------------------------------

-- get passport of the suspect

select passport_number from people
    join bakery_security_logs
        on bakery_security_logs.license_plate = people.license_plate
            where year = 2021 and day = 28 and month = 7 and activity = 'exit' and hour =10 and minute >=15 and minute <=30;

-----------------------------------------------------------------------------------------------

-- get account_number of the suspect

select * from atm_transactions
    where year = 2021 and day = 28 and month = 7 and atm_location = 'Leggett Street' and transaction_type = 'withdraw';

+-----+----------------+------+-------+-----+----------------+------------------+--------+
| id  | account_number | year | month | day |  atm_location  | transaction_type | amount |
+-----+----------------+------+-------+-----+----------------+------------------+--------+
| 246 | 28500762       | 2021 | 7     | 28  | Leggett Street | withdraw         | 48     |
| 264 | 28296815       | 2021 | 7     | 28  | Leggett Street | withdraw         | 20     |
| 266 | 76054385       | 2021 | 7     | 28  | Leggett Street | withdraw         | 60     |
| 267 | 49610011       | 2021 | 7     | 28  | Leggett Street | withdraw         | 50     |
| 269 | 16153065       | 2021 | 7     | 28  | Leggett Street | withdraw         | 80     |
| 288 | 25506511       | 2021 | 7     | 28  | Leggett Street | withdraw         | 20     |
| 313 | 81061156       | 2021 | 7     | 28  | Leggett Street | withdraw         | 30     |
| 336 | 26013199       | 2021 | 7     | 28  | Leggett Street | withdraw         | 35     |
+-----+----------------+------+-------+-----+----------------+------------------+--------+

-----------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------

-- phone_calls modification

alter table phone_calls
    add caller_name varchar(20);

alter table phone_calls
    add receiver_name varchar(20);

update phone_calls
    set caller_name = people.name from people
        where phone_calls.caller = people.phone_number;

update phone_calls
    set receiver_name = people.name from people
        where phone_calls.receiver = people.phone_number;

-----------------------------------------------------------------------------------------------

-- get phone number of suspect and accomplice

select * from phone_calls
    where year = 2021 and day = 28 and month = 7 and duration < 60;

+-----+----------------+----------------+------+-------+-----+----------+-------------+---------------+
| id  |     caller     |    receiver    | year | month | day | duration | caller_name | receiver_name |
+-----+----------------+----------------+------+-------+-----+----------+-------------+---------------+
| 221 | (130) 555-0289 | (996) 555-8899 | 2021 | 7     | 28  | 51       | Sofia       | Jack          |
| 224 | (499) 555-9472 | (892) 555-8872 | 2021 | 7     | 28  | 36       | Kelsey      | Larry         |
| 233 | (367) 555-5533 | (375) 555-8161 | 2021 | 7     | 28  | 45       | Bruce       | Robin         |
| 251 | (499) 555-9472 | (717) 555-1342 | 2021 | 7     | 28  | 50       | Kelsey      | Melissa       |
| 254 | (286) 555-6063 | (676) 555-6554 | 2021 | 7     | 28  | 43       | Taylor      | James         |
| 255 | (770) 555-1861 | (725) 555-3243 | 2021 | 7     | 28  | 49       | Diana       | Philip        |
| 261 | (031) 555-6622 | (910) 555-3251 | 2021 | 7     | 28  | 38       | Carina      | Jacqueline    |
| 279 | (826) 555-1652 | (066) 555-9701 | 2021 | 7     | 28  | 55       | Kenny       | Doris         |
| 281 | (338) 555-6650 | (704) 555-2131 | 2021 | 7     | 28  | 54       | Benista     | Anna          |
+-----+----------------+----------------+------+-------+-----+----------+-------------+---------------+

-----------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------

-- get person_id of the suspect

select person_id from bank_accounts
   ...> where account_number in (
   ...> select account_number from atm_transactions
   ...> where year = 2021 and day = 28 and month = 7 and atm_location = 'Leggett Street' and transaction_type = 'withdraw'
   ...> );

+----------------+-----------+---------------+
| account_number | person_id | creation_year |
+----------------+-----------+---------------+
| 49610011       | 686048    | 2010          |
| 26013199       | 514354    | 2012          |
| 16153065       | 458378    | 2012          |
| 28296815       | 395717    | 2014          |
| 25506511       | 396669    | 2014          |
| 28500762       | 467400    | 2014          |
| 76054385       | 449774    | 2015          |
| 81061156       | 438727    | 2018          |
+----------------+-----------+---------------+

-----------------------------------------------------------------------------------------

-- get name, phone_number, passport_number of suspects
select * from people
    where id in (
        select person_id from bank_accounts
            where account_number in (
                select account_number from atm_transactions
                    where year = 2021 and day = 28 and month = 7 and atm_location = 'Leggett Street' and transaction_type = 'withdraw'
            )
    );

+--------+---------+----------------+-----------------+---------------+
|   id   |  name   |  phone_number  | passport_number | license_plate |
+--------+---------+----------------+-----------------+---------------+
| 395717 | Kenny   | (826) 555-1652 | 9878712108      | 30G67EN       |
| 396669 | Iman    | (829) 555-5269 | 7049073643      | L93JTIZ       |
| 438727 | Benista | (338) 555-6650 | 9586786673      | 8X428L0       |
| 449774 | Taylor  | (286) 555-6063 | 1988161715      | 1106N58       |
| 458378 | Brooke  | (122) 555-4581 | 4408372428      | QX4YZN3       |
| 467400 | Luca    | (389) 555-5198 | 8496433585      | 4328GD8       |
| 514354 | Diana   | (770) 555-1861 | 3592750733      | 322W7JE       |
| 686048 | Bruce   | (367) 555-5533 | 5773159633      | 94KL13X       |
+--------+---------+----------------+-----------------+---------------+

-----------------------------------------------------------------------------------------

select * from airports where full_name like 'Fiftyville%';

+----+--------------+-----------------------------+------------+
| id | abbreviation |          full_name          |    city    |
+----+--------------+-----------------------------+------------+
| 8  | CSF          | Fiftyville Regional Airport | Fiftyville |
+----+--------------+-----------------------------+------------+

-----------------------------------------------------------------------------------------

select * from flights
    where origin_airport_id in (
        select id from airports
            where full_name like 'Fiftyville%' and year = 2021 and day = 29 and month = 7
    );

+----+-------------------+------------------------+------+-------+-----+------+--------+
| id | origin_airport_id | destination_airport_id | year | month | day | hour | minute |
+----+-------------------+------------------------+------+-------+-----+------+--------+
| 18 | 8                 | 6                      | 2021 | 7     | 29  | 16   | 0      |
| 23 | 8                 | 11                     | 2021 | 7     | 29  | 12   | 15     |
| 36 | 8                 | 4                      | 2021 | 7     | 29  | 8    | 20     |
| 43 | 8                 | 1                      | 2021 | 7     | 29  | 9    | 30     |
| 53 | 8                 | 9                      | 2021 | 7     | 29  | 15   | 20     |
+----+-------------------+------------------------+------+-------+-----+------+--------+




select * from passengers
    where flight_id in (
        select id from flights
            where origin_airport_id in (
                select id from airports
                    where full_name like 'Fiftyville%' and year = 2021 and day = 29 and month = 7
            )
    );






-- get passport_number of suspects (6 results)

select passport_number  from passengers
where flight_id in (
select id from flights
where origin_airport_id in (
select id from airports
where full_name like 'Fiftyville%' and year = 2021 and day = 29 and month = 7
))
and passport_number in (
select passport_number from people
where id in (
select person_id from bank_accounts
where account_number in (
select account_number from atm_transactions
where year = 2021 and day = 28 and month = 7 and atm_location = 'Leggett Street' and transaction_type = 'withdraw'
)));

+-----------------+
| passport_number |
+-----------------+
| 3592750733      |
| 5773159633      |
| 1988161715      |
| 9878712108      |
| 8496433585      |
| 4408372428      |
+-----------------+

-----------------------------------------------------------------------------------------

-- get name of thief

select people.name from people
    where passport_number in (
        select passport_number from passengers
            where flight_id in (
                select id from flights
                    where origin_airport_id in (
                        select id from airports
                            where full_name like 'Fiftyville%' and year = 2021 and day = 29 and month = 7
                    ) order by flights.hour, flights.minute asc
                    limit 1
            ) and passport_number in (
                select passport_number from people
                    where id in (
                        select person_id from bank_accounts
                            where account_number in (
                                select account_number from atm_transactions
                                    where year = 2021 and day = 28 and month = 7 and atm_location = 'Leggett Street' and transaction_type = 'withdraw'
                            )
                    )
            ) and passport_number in (
                select passport_number from people
                    join bakery_security_logs
                        on bakery_security_logs.license_plate = people.license_plate
                            where year = 2021 and day = 28 and month = 7 and activity = 'exit' and hour =10 and minute >=15 and minute <=30
            ) and passport_number in (
                select passport_number from people
                    join phone_calls
                        on phone_calls.caller_name = people.name
                            where year = 2021 and day = 28 and month = 7 and duration < 60
            )
    );


    -----------------------------------------------------------------------------------------

select * from airports
    where id in (
        select destination_airport_id from flights
            where origin_airport_id in (
                select id from airports
                    where full_name like 'Fiftyville%' and year = 2021 and day = 29 and month = 7
            ) order by flights.hour, flights.minute asc
                limit 1
    );