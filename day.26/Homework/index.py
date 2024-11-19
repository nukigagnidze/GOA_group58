# 1
# counter = 0
# while counter < 51:
#       print(counter)

#       counter += 1

# 2
# counter = 0
# while counter < 51:
#       print(counter)

#       counter += 1


# 3) შექმენით ფუნქცია, რომელიც იღებს წინადადებას, სადაც ყოველი სიტყვის შორის ერთზე მეტი დაშორებაა(space). თქვენი დავალებაა ჩამოაშოროთ გადმოცემულ წინადადებას ზედმეტი space-ები(სიტყვებს შორის მხოლოდ ერთი უნდა იყოს). საბოლოოდ დააბრუნეთ ეს წინადადება

def manual_title(string1):
    is_space = False

    result = ""

    for i in string1:
        if i == " ":
            result += i
            is_space = True
        elif is_space:
            result += i.upper()
            is_space = False
        else:
            result += i.lower()

    return result[0].upper() + result[1:]


print(manual_title("hEllo mY NAME is NukI"))

# 4) შექმენით ფუნქცია, რომელიც იღებს წინადადებას, და მასში space-ების მაგივრად სიტყვებს შორის ჩასვამს ტირეს("-"). საბოლოოდ კი აბრუნებს მას

# 5) შექმენით ფუნქცია, რომელსაც გადაეცემა წინადადება. თქვენი დავალებაა ამ წინადადების სიტყვები შეაბრუნოთ და დააბრუნოთ(სიტყვების სიმბოლოები არ უნდა იყოს შებრუნებული)