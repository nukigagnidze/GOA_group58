# 1
# ვიდეო უნდა გვეყურებინა

# 2
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for number in numbers:
    if numbers % 2 == 0:
        number.uppent(numbers)
    else:
        number.uppend(numbers)
# 3
names = ["nini", "mariami", "barbare", "anamaria", "qeti", "nuki", "tazo", "dima", "iva"]

for index in range(len(names)):
    if names[index] % 2 == 0:
        names.append(names[index])
    else:
        names.append(names[index])
# 4
num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for i in range(10):
      if i > 5:
            print("number is even")
      else:
            print("number is odd")
# 5
num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for i in range(10):
      if i > 5:
            print("number is even")
      else:
            print("number is odd")
# 6
counter = 0
while counter < 101:
      print(counter)

      counter += 1

# 7
counter = 0
while counter < 51:
      print(counter)

      counter += 1

# 8
fruits = ["apple", "banana", "cherry", "orange", "watermelon", "melon", "kivi", "greifs", "wabli", "kowaxuri"]

last_index = len(fruits) - 1

user_fav = input("Enter your favorite fruit: ")

if last_index % 2 == 0:
    fruits.append(user_fav)

# 9
numbers = [1,2,0,1,32,1,30,1,1,21,1,1,1] 
for i in range(10):
      if i > 5:
            print("number is even")
      else:
            print("number is odd")

# 10
name = "nuki"

for name in range(10):
    print(name)