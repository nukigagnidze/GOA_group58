function checkAge() {
    let age = document.getElementById('ageInput').value;
    let isAdult = age > 18 ? true : false;

    document.getElementById('result').innerText = 
        isAdult ? "თქვენ ზრდასრული ხართ." : "თქვენ არ ხართ ზრდასრული.";
}