function arrow(name, age) {
    if (age >= 18) {
        return `${name}, You, can go inside`;
    } else {
        return "Sorry, we cant let you in";
    }
}

let name = prompt("Please, enter your name:");
let age = parseInt(prompt("Please, enter your age:"));

let result = arrow(name, age);
alert(result)
