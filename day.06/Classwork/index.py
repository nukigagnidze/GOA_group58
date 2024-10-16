# 1
# name = input("Please enter your name: ")
# print(name)

# surname = input("Please enter your surname: ")
# print(surname)

# age = input("Please enter your age: ")
# print(age)

# email = input("Please enter your email: ")
# print(email)

# 2
# num1 = input("enter number 1: ")
# num2 = input("enter number 2: ")

# print(num1 + num2)
# print(num1 - num2)
# print(num1 * num2)
# print(num1 / num2)


# 3
# input-i funqcia gvexmareba rom mivirot momxmareblis sawiro informacia
# autput-i rodesac kompiutershi gaomitanos rarac programebi

# შექმენით კალკულატორის პროგრამა სადაც მომხარებელი შემოიტანს ორ რიცხვს და 4 არითმეტიკული ოპერაციიდან ერთერთს. შეასრულეთ ამ ორ რიცხვს შორის არჩეული არითმეტიკული ოპერაცია

# 1) როგორ შემავატანონით მომხმარებელს მონაცემი პითონს?
#   ა) რომ შემოვატანინოთ მომხმარებელს მონაცემი უნდა გამოვიყენოთ input() ფუნქცია

# 2) რომელი არითმეტიკული ოპერაციები გვაქვს პითონში?
#   ა) +, -, *, /

# 3) როგორ ავირჩიოთ მოქმედება პირობაზე დაყრდნობით?
#   ა) უნდა გამოვიყენოთ if-elif-else განცხადებები 

num1 = int(input("Enter number 1: "))
num2 = int(input("Enter number 2: "))

operation = input("Enter an operator (+, -, *, /): ")

if operation == "+":
    print(num1 + num2)
elif operation == "-":
    print(num1 - num2)
elif operation == "*":
    print(num1 * num2)
elif operation == "/":
    print(num1 / num2)
else:
    print("Invalid operator!")

# input ყველა შეტანილ მნიშვნელობას ტერმინალიდან, აბრუნებს სტრინგის ფორმატში
