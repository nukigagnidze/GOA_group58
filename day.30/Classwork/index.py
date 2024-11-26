# 1) შექმენით ფუნქიცა, manual_find, რომელსაც გადაეცემა არგუმენტად სთრინგი და ერთი სიმბოლო, რომელიც უნდა ვიპოვოთ ამ სთრინგში. თუ სიმბოლო მოიძებნა დააბრუნეთ მისი ინდექსი, სხვა შემთხვევაში დააბრუნეთ -1

def manual_find(word, symbol):
    if symbol not in word:
        return -1
    
    index = 0

    for i in word:
        if i == symbol:
            return index
        index += 1


print(manual_find("nika", "a"))

# 2) შექმენით ფუნქცია manual_count, რომელსაც არგუმენტად გადაეცემა რიცხვბის სია, და ერთი რიცხვი, რომლის რაოდენობაც უნდა ვიპოვოთ ამ სიაში. დააბრუნეთ მიღებული რაოდენობა

def manual_count(nums_list, number):
    count = 0

    for i in nums_list:
        if i == number:
            count += 1
    
    return count
print(manual_count([1, 1, 1, 2, 3, 4, 5], 3))