// ვქმნით რანდომულ რიცხვს 1-დან 20-ის ჩათვლით
const randomNumber = Math.floor(Math.random() * 20) + 1;
console.log("საიდუმლო რიცხვი:", randomNumber); // შეგიძლია წაშალო, უბრალოდ ტესტისთვისაა

let attempts = 0; // მცდელობების რაოდენობა

const form = document.getElementById('guessForm');
const input = document.getElementById('userGuess');
const message = document.getElementById('message');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // ფორმის სტანდარტული ქცევის შეჩერება
  const userGuess = Number(input.value);

  if (userGuess > 20) {
    alert('Number is Too High, Try Again');
  } else if (userGuess < 1) {
    alert('Number is Too Low, Try Again');
  } else {
    attempts++; // მცდელობას ვზრდით

    if (userGuess === randomNumber) {
      alert(`გილოცავთ! გამოიცანით რიცხვი ${attempts} მცდელობაში!`);
      message.textContent = `მოგება! გამოიცანი ${attempts} მცდელობით!`;
      form.querySelector('button').disabled = true; // თამაშის გაჩერება
      input.disabled = true;
    } else {
      if (attempts >= 10) {
        alert('You have reached the maximum attempts');
        message.textContent = 'თამაშის დასასრული: 10 მცდელობა ამოიწურა!';
        form.querySelector('button').disabled = true;
        input.disabled = true;
      } else {
        alert('არასწორია, სცადეთ კიდევ!');
        message.textContent = `ცდების რაოდენობა: ${attempts} / 10`;
      }
    }
  }

  input.value = ''; // ვასუფთავებთ შესაყვან ველს
});
