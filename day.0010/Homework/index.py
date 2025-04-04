# 1
number = int(input("Please enter a number: "))
print(number)

# 2
counter = 0
while counter < 21:
      print(counter)

      counter += 1

# 3
counter = 0
while counter < 21:
      print(counter)

      counter += 1

# 4
num = 145

if num % 2 == 0 :
    print("number is big")
else:
    print("number is small")

# 5
counter = 0
while counter < 21:
      print(counter)

      counter += 1

# 6 
user_num = int(input("Enter a number: "))

sum = 0

for num in range(user_num + 1):
    sum = sum + num * num

print(sum)

# 7
secret_num = 7
user_num = 0

while user_num != secret_num:
    user_num = int(input("Guess the number: "))

    if user_num > secret_num:
        print("Your number is too high!")
    elif user_num < secret_num:
        print("Your number is too low!")
    else:
        print("Congratulations! You guessed the correct number.")