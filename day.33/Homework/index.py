def manual_pop(numbers, remove_index):
    result = []
    index = 0
    for i in numbers:
        if index != remove_index:
            result.append(i)
        index += 1
    return result

print(manual_pop([22,50,60,100], 1))