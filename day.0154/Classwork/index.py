# 1) Expensive Calculations (დამძიმე/ძვირადღირებული გამოთვლები)
# Expensive calculation ნიშნავს ისეთ ფუნქციას ან ოპერაციას, რომლის შესრულებას დიდი დრო და რესურსი სჭირდება. მაგალითად:

# დიდ მასივში ძიება ან სორტირება

# რთული მათემატიკური ოპერაციები

# დიდ ობიექტებზე მუშაობა ან ფილტრაცია

# API-დან მიღებული მონაცემების მანიპულაცია

# თუ ასეთ ფუნქციებს ყოველ რენდერზე თავიდან ვაჩენთ, ეს შეანელებს აპლიკაციას.


# 2) Cache (კეშირება)
# კეში ნიშნავს უკვე once (ერთხელ) შესრულებული გამოთვლის შედეგის დამახსოვრებას, რათა თავიდან არ გაკეთდეს იგივე პროცესი.

# მიზანი: სწრაფად ხელახლა მიღება უკვე გამოთვლილი ინფორმაციის, თუ input-ები არ შეცვლილა.

# კეში (Cache)
# კეში არის დროებითი "მეხსიერება", სადაც ინახება ადრე გამოთვლილი ან მიღებული ინფორმაცია იმისათვის, რომ მომავალში იგივე ინფორმაციის მიღება უფრო სწრაფად მოხდეს.

#  მაგალითად:

# წარმოიდგინე, რომ ვებგვერდს უკვეთავ ამინდის ინფორმაციას. თუ შენ იმავე ქალაქისთვის 1 წუთში ისევ დაჭერ ამინდის ღილაკს, გვერდს შეუძლია კეშიდან აიღოს იგივე პასუხი და აღარ გააკეთოს თავიდან იგივე მოთხოვნა.



# 3) useMemo ჰუკი React-ში
# useMemo სწორედ caching მექანიზმია React-ში, რომელიც გვეხმარება თავიდან ავიცილოთ expensive calculation ყოველ რენდერზე.


#  ჰუკი (Hook) — React-ის ტერმინი
# ჰუკი (Hook) არის React-ში სპეციალური ფუნქცია, რომელიც გაძლევს საშუალებას გამოიყენო React-ის ფუნქციონალი ფუნქციურ კომპონენტებში.

# წარმოიდგინე ჰუკი როგორც "კაუჭი", რომლითაც "გაიჭერ" და გამოიყენებ React-ის შესაძლებლობებს.

# we also had classwork