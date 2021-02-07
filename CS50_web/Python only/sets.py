s = set()

s.add(1)
s.add(2)
s.add(3)
s.add(4)

print(s)

s.add(3)

print(s)
print(f"set s now has {len(s)} elements")
 
s.remove(2)

print(s)

print(f"set s now has {len(s)} elements")
 