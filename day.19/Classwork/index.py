# 1) შექმენით რიცხვების სია, შემდგარი მინიმუმ 10 ელემენტისგან. გადაუარეთ ამ საის while loop-ის გამოყენებით. გაიგეთ ცალკე ლუწი და კენტი რიცხვების ჯამი, საბოლოოდ შეადარეთ ისინი ერთმანეთს და დაპრინტეთ უდიდესი

numbers = [1, 2, 4, 5, 6, 8, 9, 25, 67, 89]

sum_even = 0
sum_odd = 0

i = 0

while i < len(numbers):
    if numbers[i] % 2 == 0:
        sum_even += numbers[i]
    else:
        sum_odd += numbers[i]
    i += 1

if sum_even > sum_odd:
    print("the sum of even is greter", sum_even)
elif sum_odd > sum_even:
    print("the sum of odd is greter", sum_odd)
else:
    print("both sums is greter", sum_even)


# 2) შექმენით სიმბოლოების სია, გადაუარეთ მას for loop-ით და სიიდან ყველა სიმბოლოს შორის მოახდინეთ კონკადინაცია. ციკლის გარეთ დაგჭირდებათ ცვლადი სადაც შაამატებთ ამ სთრინგებს

symbols = ["A", "V", "B", "C"]

result = ""

for symbol in symbols:
    result += symbol

print(result)


# thick, camels, about,desert,eyelashes, all over, describe, cool, also,

# Classwork:
# 1
# We during milk, fruit, and vegetebles in the rerfigerator

# 2
# Fall is cool in Canada. Winter is cold. Winter is also cold in Russia

# 3
# Can you describe an elephant? What does it look like?

# 4
# There are different animals all over the world.

# 5
# Some pwople have long eyelashes around their eyes.

# 6
# It does not rain very moch in the desert

# 7
# Mark's dictionary is very thick

# 8
# We cook food whit heat from a stove

# 9
# Not many people ride on camels now.They use cars.

# 10
# tom is about 25 years old. Maybe he is 24 or 27 