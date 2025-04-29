// 1
class Phone {
    constructor(name, color, storage) {
      this.name = name;
      this.color = color;
      this.storage = storage;
    }
  }

  const phone1 = new Phone("iPhone 15 Pro", "Titanium", "256GB");
  const phone2 = new Phone("Samsung Galaxy S24", "Phantom Black", "512GB");
  const phone3 = new Phone("Google Pixel 8", "Hazel", "128GB");

  console.log(phone1);
  console.log(phone2);
  console.log(phone3);
  

// 2
// კლასი  — ეს არის შაბლონი, რომლის მიხედვითაც იქმნება ობიექტები.
// კლასში ვწერთ, რა თვისებები და ქცევები უნდა ჰქონდეს ობიექტს.

class User {
    // კონსტრუქტორი — სპეციალური ფუნქცია, რომელიც ავტომატურად გამოიძახება
    // როცა კლასის ახალი ობიექტი იქმნება. აქ ვანიჭებთ საწყის მნიშვნელობებს ობიექტს.
    constructor(email, password, username) {
      this.email = email;
      this.password = password;
      this.username = username;
    }
  
    // პროტოტიპი — როდესაც კლასში ვამატებთ მეთოდს (მაგალითად introduce()),
    // ის ინახება კლასის პროტოტიპში. ეს ნიშნავს, რომ ყველა ობიექტს ექნება წვდომა ამ მეთოდზე,
    // მაგრამ თითოეულ ობიექტზე ცალ-ცალკე არ შეიქმნება; დაზოგავს მეხსიერებას.
    introduce() {
      console.log(`My email is ${this.email} and my username is ${this.username}.`);
    }
  }

  const user1 = new User('alice@example.com', 'password123', 'alice');
  const user2 = new User('bob@example.com', 'bobspassword', 'bobby');
  const user3 = new User('carol@example.com', 'carolpass', 'carol88');

  user1.introduce(); 
  user2.introduce(); 
  user3.introduce(); 

  console.log(user1);

  console.log(Object.getPrototypeOf(user1));

