# 1
# i = 0

#       counter += 1

# 2
# num1 = int(input("გთხოვთ შემოიყვანეთ პირველი რიცხვი: "))
# num2 = int(input("გთხოვთ შემოიყვანეთ მეორე ნომერი: "))

# # რიცხვი 3-მე ხარისხზე აჰყავს
# num3 = num1 ** 3
# num4 = num2 ** 3

# # რიცხვების ჯამის გამოთვლა
# result = num3 + num4

# # შედეგის გამოტანვა
# if result % 2 == 0:
#     print("Result is Even")
# else:
#     print("Result is Odd")

# 3
even_sum = 0
odd_sum = 0

for i in range(1, 21):
    if i % 2 == 0:
        even_sum = even_sum + i
    else:
        odd_sum = odd_sum + i


if even_sum ** 5 > odd_sum ** 5:
    print("Even sum is greater than odd sum", even_sum ** 5)
else:
    print("Odd sum is greater than even sum", odd_sum ** 5)

# 4
# am kodshi gamoitans True-s
# print(True or False and 5 > 3 or "name" == "name" and 123 == "123" and 5 >= 5)

# 5
# num1 = int(input("Please enter your number: "))

# if num1 % 1 == 0:
#     print("Number is prime")
# else:
#     print("Number is not prime")




