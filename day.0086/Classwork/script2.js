function checkWeather() {
    const weather = document.getElementById("weatherInput").value.toLowerCase();
    const message = document.getElementById("message");
    
    if (weather === "sunny") {
        message.textContent = "ვივარჯიშებ";
    } else if (weather === "rainy") {
        message.textContent = "წამოვიღებ ქოლგას"; 
    } else if (weather === "cloudy") {
        message.textContent = "ვუყურებ ფილმს სახლში"; 
    } else if (weather === "windy") {
        message.textContent = "წავალ პარკში ქარის შესაგრძნობად"; 
    } else {
        message.textContent = "დავრჩები სახლში";
    }
}
