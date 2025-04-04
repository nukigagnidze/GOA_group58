# difficult
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

evens = []
odds = []

for index in range(len(numbers)):
    if numbers[index] % 2 == 0:
        evens.append(numbers[index])
    else:
        odds.append(numbers[index])

print("Evens:", evens)
print("Odds:", odds)

# simple
numbers = [12, 13, 21, 28, 27, 81, 92, 101, 108]

evens = []
odds = []

for number in numbers:
    if numbers % 2 == 0:
        evens.append(numbers)
    else:
        odds.append(numbers)

# (1)
for char in "Nuki":
    print(char)


# 1) შექმენით სია სადაც, შეიტანთ მინიმუმ 10 რიცხვს, გადაუარეთ for ციკლის დახმარებით და დაბეჭდეთ თითოეული რიცხვი კენტია თუ ლუწი.

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for number in numbers:
    if numbers % 2 == 0:
        numbers.append(numbers)
    else:
        numbers.append(numbers)



# 2) შექმენით სახელების სია სადაც გექნებათ მინიმუმ 10 სახელი, დაბეჭდეთ ამ სიიდან მხოლოდ ის სახელები რომლების ინდექსებიც არის ლუწი
names = ["nini", "mariami", "barbare", "anamaria", "qeti", "nuki", "tazo", "dima", "iva"]

for index in range(len(names)):
    if names[index] % 2 == 0:
        names.append(names[index])
    else:
        names.append(names[index])

