// 1
// Write an arrow function that takes two numbers as arguments nd returns their sum.
const addTwoNumbers = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      return 'Both arguments must be numbers';
    }
    return num1 + num2;
  };

// 2
// Create an arrow function that takes a number and returns `true` if it's positive and `false` otherwise.
const isPositive = (num) => {
    if (typeof num !== 'number') {
      return 'Input must be a number';
    }
    return num > 0;
  };

// 3
// Write an arrow function that takes a string and returns its first character.  
const getFirstCharacter = (str) => {
    if (typeof str !== 'string') {
      return 'Input must be a string';
    }
    if (str.length === 0) {
      return 'String is empty';
    }
    return str.charAt(0);
  };

// 4
// Create an arrow function that takes a number and returns double its value.
const doubleNumber = (num) => {
    if (typeof num !== 'number') {
      return 'Input must be a number';
    }
    return num * 2;
  };

// 5
// Write an arrow function that takes a name as an argument and returns a greeting message like `"Hello, [name]!"`.
const createGreeting = (name) => {
    if (typeof name !== 'string') {
      return 'Input must be a string';
    }
    if (name.trim() === '') {
      return 'Name cannot be empty';
    }
    return `Hello, ${name}!`;
  };  