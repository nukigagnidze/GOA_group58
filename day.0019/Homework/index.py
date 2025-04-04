# 4
word = "ნუკი"

reversed_word = ""
                # (3,2,1,0)
for i in range(len(word) - 1, -1, -1):
        reversed_word = reversed_word + word[i]

if word == reversed_word:
        print("word is palindrome")
else:
        print("word is not palindrome")

# 5
numbers = [1,2,3,4,5,6,7,8,9,10,12]

even_count = 0
odd_count = 0

for number in numbers:
        if number % 2 == 0:
                even_count += 1
        else:
                odd_count += 1


print("Even numbers count:", even_count)
print("Odd numbers count:", odd_count)