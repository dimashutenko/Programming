people = [
    {"name":"Harry", "house":"Griffindor"},
    {"name":"Cho", "house":"Ravenclaw"},
    {"name":"Draco", "house":"Slytherin"}
]

print(f"Not sorted: {people}")

def short_function(person):
    return person["name"]

people.sort(key = short_function)

print(f"\nSorted by name: {people}")

people.sort(key = lambda person: person["house"])

print(f"\nSorted by house: {people}")