# name = "Nuki"

# user_name = input("Please enter your name: ").lower()

######################
# print(name == user_name)

# text = "hello, my name is nuki"

# upper_text = text.upper()

# print(text)
# print(upper_text)

##########################
# def upper_and_lower(text):
#     upper_index = 1

#     result = ""

#     for i in text:
#         if upper_index == 3:
#             result += i.upper()
#             upper_index = 0
#         else:
#             result += i.lower()

#         upper_index += 1
#     return result   


# print(upper_and_lower("HellO, MY namE IS Nuki"))


###################################
# text = "HellO, MY namE IN Nuki"

# print(text.capitalize())
# print(text.title())

######################
# text = "Hello, my namE IS Nuki"

# print(text.title())

# 1) შექმენით ფუნქცია, manual_capitalize რომელიც იქნება capitalize ფუნქციის კლონი

# def manual_capitalize(string1):
#     return string1[0].upper() + string1[1:].lower()

# print(manual_capitalize("Hello, my name is nuki"))

# 2) შექმენით ფუნქცია, manual_title, რომელიც იქნება title ფუნქციის კლონი

# def manual_title(text):

#     return ' '.join((word.capitalize() for word in text.split()))

# print(manual_title("hello, goa"))
# print(manual_title("goa is best!"))

