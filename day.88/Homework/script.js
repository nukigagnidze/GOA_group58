// 1
function average(a, b, c, d, e) {
    return (a + b + c + d + e) / 5;
  }

// 2
const average = (a, b, c, d, e) => (a + b + c + d + e) / 5;

// 3
function introduceUser() {
    const name = prompt("შეიყვანეთ თქვენი სახელი:");
    const surname = prompt("შეიყვანეთ თქვენი გვარი:");
    const age = prompt("შეიყვანეთ თქვენი ასაკი:");
    console.log(`გამარჯობა! მე მქვია ${name} ${surname} და ვარ ${age} წლის.`);
  }
  
// 4
const calculateTotal = (price, quantity = 1) => price * quantity;

// 5
function exampleFunction() {
    let message = "Hello World!";
    console.log(message);
  }
  
  exampleFunction();
  console.log(message); 

// 6
function exampleFunction() {
    var message = "Hello World!";
    console.log(message);
  }
  
  exampleFunction();
  console.log(message); 
  