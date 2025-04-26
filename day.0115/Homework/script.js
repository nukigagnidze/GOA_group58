// 1
// ფუნქცია, რომელიც იღებს უთვალავ რაოდენობის რიცხვებს (Rest Operator)
function findMax(...numbers) {
    // ვაბრუნებთ ყველაზე დიდ რიცხვს
    return Math.max(...numbers);
  }
  
  // მაგალითი
  console.log(findMax(5, 12, 8, 30, 1)); // გამოიტანს 30-ს
  
// 2
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Spread Operator-ით ვაერთიანებთ ორ მასივს
const combinedArray = [...array1, ...array2];

console.log(combinedArray); // გამოიტანს [1, 2, 3, 4, 5, 6]

// 3
// მომხმარებლის ობიექტი
const user = {
    name: 'Giorgi',
    surname: 'Tkeshelashvili',
    age: 22
  };
  
  // დესტრუქციის საშუალებით ამოვიღეთ name და age
  const { name, age } = user;
  
  console.log(name); // Giorgi
  console.log(age);  // 22

  
// 4
const person = {
    name: 'Nuki',
    surname: 'gagnidze',
    age: 25,
    hobby: 'drawing'
  };
  
  // დესტრუქციით ამოვიღებთ name-ს და hobby-ს, დანარჩენი შეგვიძლია შევინახოთ
  const { name: firstName, hobby, ...rest } = person;
  
  console.log(firstName); // Nika
  console.log(hobby);     // Coding
  console.log(rest);      // { surname: 'Lomidze', age: 25 }
  