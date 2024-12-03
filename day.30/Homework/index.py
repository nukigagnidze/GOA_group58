def manual_count(nums_list, number):
    count = 0

    for i in nums_list:
        if i == number:
            count += 1
    
    return count
print(manual_count([1, 1, 1, 2, 3, 4, 5], 3))

