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