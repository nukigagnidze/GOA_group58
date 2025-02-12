for number in range(1, 11):
    print(number)
print("loop finished")


name = "Nuki"

for char in name:
    print(char)


num = 0
while num < 10:
    num =  num + 1
    print(num)


seats = 0
while seats < 19:

    print("sell ticket")
    seats = seats + 1

# 1
# while ციკლის საშვალებით გამოიტანეთ რიცხვები 1-იდან 10-მდე
number = 0
while number < 10:

    print(number)
    number = number + 1

# 2
# while ციკლის საშვალებით გამოიტანეთ რიცხვები 20-იდან 0-მდე
counter = 20
while counter > 0:
    print(counter)

    counter -= 1

# 3
# while ციკლის საშვალებით გამოიტანეთ 1-დან 20-მდე მხოლოდ ლუწი რიცხვები
number = 0
while number > 20:
    print(number)
    number = number + 2

# 4 
# while ციკლის საშვალებით გამოიტანეთ 1-იდან 100-მდე ყველა 5-ის ჯერადი რიცხვი
number = 0
while number > 100:
    print(number)
    number = number + 5

# 5
# while ციკლისა და input-ის საშვალებით მომხარებელს შემოატანინეთ პაროლი სანამ არ იქნება ის "goa123"-ის ტოლი
password = ""
while password != "goa123":
    password = input("please enter your password")

