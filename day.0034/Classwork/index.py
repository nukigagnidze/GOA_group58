# 1) შექმენით ცვლადი, სადაც შეინახავთ string-ს. დაბეჭდეთ მისი თითოეული სიმბოლო და გვერდით მიუწერეთ რიგით მერამდენეა ის.

# მგალითად: "Hello" >>> "H - 1", "e - 2"...

string = input("Please enter your string: ")
index= 0
for i in string:
    print(i + " - " + str(index))
    index += 1

# 2) შექმენით manual_join ფუნქცია, რომელსაც გადაეცემა სთინგების სია და ერთი სთრინგი. ამ ფუნქციამ უნდა შეართოს ეს სია და თითოეულ ელემენტს შორის ჩასვას გადმოცემული სთრინგი

# არ გამოიყენოთ .join() ფუნქცია
def manual_join(name):
    result = ""
    for i in range(len(name)):
        result += name[i]
        if i < len(name) - 1:
            result += " "
    return result
print(manual_join(["Hi", "my name is nuki" "What is your name?"]))

# 3) შექმენით manual_count ფუნქცია, რომელსაც გადაეცემა სთრინგი და სია და ელემენტი რომლის რაოდენობაც უნდა გაიგოთ. დააბრუნეთ მიღებული შედეგი.
def manual_count(string, item):
    # სტრინგში შეყვანილი ელემენტის რაოდენობა
    count = 0
    for char in string:
        if char == item:
            count += 1
    
    # სიაში ელემენტის რაოდენობა
    list_count = 0
    for element in item:
        if element == item:
            list_count += 1

    return count + list_count

# ტესტირება
string = "hello world"
my_list = ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']
item = 'l'
result = manual_count(string, my_list, item)
print(result)  # უნდა დაბრუნდეს 3


# 4) შექმენით manual_replace ფუნქცია, რომელიც იქნება .replace() ფუნქციის კლონი. ამ ფუნქციამ სთრინგში არსებული sapce-ები უნდა შეცვალოს ტირეებად.
def manual_replace(input_string):
    result = ""
    for char in input_string:
        if char == " ":
            result += "-"  # თუ space-ია, შეცვალეთ ტირეით
        else:
            result += char  # სხვაგვარად, შეინახეთ იგივე სიმბოლო
    return result

# ტესტირება
string = "Hello world, this is a test."
result = manual_replace(string)
print(result)  # "Hello-world,-this-is-a-test."



# 4) შექმენით manual_range ფუნქცია, რომელიც იქნება range ფუნქციის კოლნი, ამ ფუნქციას უნდა ჰქონდეს 3 არგუმენტი, მაგრამ თუ გამოძახებისას გადაეცა მხოლოდ 1 არგუმენტი default-ად start-ის მნიშვნელობა იქნება 0 და step-ის 1. ხოლო 2 არგუმენტის შემთხვევაში მხოლოდ step-ი იქნება 1.
def manual_range(*args):
    # გადაცემული არგუმენტების რაოდენობა
    num_args = len(args)

    # თუ ერთი პარამეტრი გადაეცა, იწყება 0-დან, და step არის 1
    if num_args == 1:
        start = 0
        end = args[0]
        step = 1
    # თუ ორი პარამეტრი გადაეცა, step არის 1
    elif num_args == 2:
        start = args[0]
        end = args[1]
        step = 1
    # თუ სამი პარამეტრი გადაეცა, ვიღებთ start, end და step-ის მნიშვნელობებს
    elif num_args == 3:
        start = args[0]
        end = args[1]
        step = args[2]
    else:
        raise ValueError("მინიმუმ 1 და მაქსიმუმ 3 პარამეტრი უნდა იქნას გადაცემული")

    # ნამუშევარი სპიეი(დაფიქსირება)
    result = []
    # ვიწყებთ start-დან და გავდივართ end-ის ფარგლებში, გამოიყენებთ step-ს
    current = start
    while current < end:
        result.append(current)
        current += step

    return result

# ტესტირება
print(manual_range(5))        # [0, 1, 2, 3, 4]
print(manual_range(2, 10))    # [2, 3, 4, 5, 6, 7, 8, 9]
print(manual_range(1, 10))

# გაიხსენეთ, რომ range ფუნქციას გადაეცემა 3 პარამეტრი start, end, step
# არ გამოიყენოთ ჩაშენებული ფუნქციები და კომენტარებით ახსენით მე-4 დავალება