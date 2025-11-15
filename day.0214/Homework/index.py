def bit_maker(num):
    x = ""
    while num > 0:
        temp = num % 2
        x += '1' if temp == 1 else ''
        num //= 2
    return len(x)


def sort_by_bit(arr):
    arr.sort(key=lambda v: (bit_maker(v), v))
    return arr 

# codewars