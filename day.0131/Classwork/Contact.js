function generateNumber() {
            const randomNumber = Math.floor(Math.random() * 100) + 1; 
            document.getElementById('number').innerText = randomNumber;
        }