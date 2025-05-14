module.exports.random = function() {
  const heroes = ['Batman', 'Iron Man', 'Wonder Woman', 'Spider-Man', 'Superman'];
  return heroes[Math.floor(Math.random() * heroes.length)];
};


const superheros = require('superheros');

const hero = superheros.random();
console.log("Your superhero is:", hero);

// 📌 NPM ნიშნავს Node Package Manager-ს
// ეს არის ინსტრუმენტი, რომელიც საშუალებას გვაძლევს დავაყენოთ,
// ვმართოთ და გავაზიაროთ JavaScript ბიბლიოთეკები.

// 📦 require - Node.js-ის მეთოდია, რომელიც გვაძლევს საშუალებას 
// სხვა ფაილები ან ბიბლიოთეკები დავიმპორტოთ ჩვენს კოდში.