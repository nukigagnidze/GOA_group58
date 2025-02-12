print(year % 100 != 0)


print(5 ** 10)






print(0.1 + 0.2)
print(400 % 100)

print(True and False and True and True or  False and True or False or True and True)

print(True and False) # false
print(False and True) # false
print(True or False) # true
print(False or True) # true
print(True and True) # true
print(True or True) # true
print(False and False) # false 
print(False or False) # false

# 1
# მომხმარებელს 2 რიცხვი შემოაქვს
num1 = int(input("გთხოვთ შემოიყვანეთ პირველი რიცხვი: "))
num2 = int(input("გთხოვთ შემოიყვანეთ მეორე ნომერი: "))

# რიცხვი 3-მე ხარისხზე აჰყავს
num3 = num1 ** 3
num4 = num2 ** 3

# რიცხვების ჯამის გამოთვლა
result = num3 + num4

# შედეგის გამოტანვა
if result % 2 == 0:
    print("Result is Even")
else:
    print("Result is Odd")
