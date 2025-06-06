const registrationForm = document.querySelector("#registration");
const signinForm = document.querySelector("#signin");

const users = [];

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const digits = "0123456789";
const punctuationChars = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;

function isValidPassword(pass) {
    let hasAlphabet = false;
    let hasDigits = false;
    let hasPunctuation = false;

    for(let i = 0; i < pass.length; i++){
        if(alphabet.includes(pass[i])){
            hasAlphabet = true;
        }

        if(digits.includes(pass[i])){
            hasDigits = true;
        }

        if(punctuationChars.includes(pass[i])){
            hasPunctuation = true;
        }
    }

    return hasAlphabet && hasDigits && hasPunctuation
}

registrationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const userExsist = users.find((user) => user.email === registrationForm.email.value);

    if(userExsist) {
        alert("Email already registered");
        registrationForm.reset();
        return;
    }

    if(!isValidPassword(registrationForm.newPassword.value)){
        alert("Pass must contain one digit, punctuation and alphabet");
        registrationForm.reset();
        return;
    }
    
    if(registrationForm.newPassword.value !== registrationForm.repeatPassword.value) {
        alert("Your repeated password is incorrect!");
        registrationForm.reset();
        return;
    }

    const user = {
        email: registrationForm.email.value,
        pass: registrationForm.newPassword.value
    }

    users.push(user);
    registrationForm.reset();
})

signinForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const profile = users.find((user) => user.email === signinForm.email.value && user.pass === signinForm.password.value);

    if(profile) {
        console.log(profile, "User succesfully signedin")
    } else {
        console.log("Invalid credentials")
    }
})