# 1
def find_smallest_int(arr):
    return min(arr)

# 2
def string_to_number(s):
    return int(s)

# 3
def count_sheeps(sheep):
    return sum([1 for s in sheep if s])

# 4
def no_space(x):
    z = x.replace(" ","")
    return z

# 5
def double_integer(i):
    return i * 2

# 6
def greet(name):
    return f'Hello, {name} how are you doing today?'

# 7
def boolean_to_string(b):
    return str(b)

# 8
def basic_op(operator, value1, value2):
    if operator == '+': return value1 + value2
    if operator == '-': return value1 - value2
    if operator == '*': return value1 * value2
    if operator == '/': return value1 / value2

# 9

# 10
def century(year):
    century = year // 100
    if year % 100 == 0:
        return century
    return century + 1