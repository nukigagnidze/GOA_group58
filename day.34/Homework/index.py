# 1
def count_characters(string):
    # დათვლი სიმბოლოების რაოდენობა
    char_count = {}
    
    for char in string:
        if char in char_count:
            char_count[char] += 1
        else:
            char_count[char] = 1
    
    # ახალი სია, რომელშიც თითოეული სიმბოლოს რაოდენობა უნდა იყოს მხოლოდ ერთხელ
    result = []
    counts = set()  # რათა თავიდან ავიცილოთ ერთი და იმავე რაოდენობის სიმბოლოები

    for char, count in char_count.items():
        if count not in counts:
            result.append(count)
            counts.add(count)
    
    # დასორტირება ზრდადობით
    result.sort()
    return result

# 2
def sort_and_join(chars):
    # დაასორტირეთ სია ანბანის მიხედვით
    chars.sort()
    
    # გადამატეთ string-ად და დააბრუნეთ
    return ''.join(chars)

# 3
def sort_descending(numbers):
    # დასორტირება კლებადობით
    numbers.sort(reverse=True)
    return numbers
