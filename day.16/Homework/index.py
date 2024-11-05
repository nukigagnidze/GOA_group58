# 1
# counter = 0
# while counter < 21:
#       print(counter)

#       counter += 1

# 2
# counter = 0
# while counter < 101:
#       print(counter)

#       counter += 1

# 3
# numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]
# factorial=1
# for number in numbers:
#     factorial *= number

#     print(factorial)

# 4
# list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# counter = 0
# while counter < 10:
#       print(counter)

#       counter += 1

# 5
# numbers = [5, -7, 3, 2, -11, 6, 8, -10, 12, 15, -17, 19, -21]

# negative_numbers = []

# index = 0

# while index < len(numbers):
#     if numbers[index] < 0:
#         negative_numbers.append(numbers[index])
#     index += 1

# print(negative_numbers)

# 7
# chars = ["a", "a", "a", "b", "c", "b", "c"]

# no_duplicates = []

# for char in chars:
#     if no_duplicates.count(char) == 0:
#         no_duplicates.append(char)

# chars = ["a", "a", "a", "b", "c", "b", "c"]

# no_duplicates = []

# for char in chars:
#     if char not in no_duplicates:
#         no_duplicates.append(char)

# print(no_duplicates)

# 9
number = int(input("Enter a number: "))

divisors = []

# for i in range(1, number + 1):
# if number % i == 0:
# divisors.append(i)

# print(divisors)

# 10
years = int(input("Enter the number of years: "))

century = years // 100
remaining_years = years % 100

if remaining_years == 0:
    print(century)
else:
    print(century + 1)
