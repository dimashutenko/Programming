select people.name from people
    join stars
        on stars.person_id = people.id
    join movies
        on movies.id = stars.movie_id
    where movies.title in (
        select movies.title from people
            join stars
                on stars.person_id = people.id
            join movies
                on movies.id = stars.movie_id
            where people.name = 'Kevin Bacon' and people.birth = '1958'
    ) and not people.name = 'Kevin Bacon'
    group by people.name;