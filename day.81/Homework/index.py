class Person:
    def __init__(self, name, surname, age):
        self.name = name
        self.surname = surname
        self.age = age

    def say_hello(self):
        print("Hello World!")

my_object = Person("John", "Doe", 25)

mother_object = Person("Jane", "Doe", 50)

print("My Object:", my_object.__dict__)
print("Mother Object:", mother_object.__dict__)

print("\nMy Object Attributes:")
for key, value in my_object.__dict__.items():
    print(f"{key}: {value}")

print("\nMother Object Attributes:")
for key, value in mother_object.__dict__.items():
    print(f"{key}: {value}")

my_object.age = 26
mother_object.name = "Mary"
print("\nUpdated My Object:", my_object.__dict__)
print("Updated Mother Object:", mother_object.__dict__)

my_object.city = "New York"
mother_object.city = "Los Angeles"
print("\nAfter adding new attributes:")
print("Updated My Object:", my_object.__dict__)
print("Updated Mother Object:", mother_object.__dict__)

del my_object.city
del mother_object.city
print("\nAfter deleting attributes:")
print("Updated My Object:", my_object.__dict__)
print("Updated Mother Object:", mother_object.__dict__)

my_object.say_hello()
mother_object.say_hello()
