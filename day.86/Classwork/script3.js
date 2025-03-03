function checkWeather() {
    const weather = document.getElementById("weatherInput").value.toLowerCase();
    const message = document.getElementById("message");

    switch (weather) {
        case "sunny":
            message.textContent = "ვივარჯიშებ"; 
            break;
        case "rainy":
            message.textContent = "წამოვიღებ ქოლგას";
            break;
        case "cloudy":
            message.textContent = "ვუყურებ ფილმს სახლში"; 
            break;
        case "windy":
            message.textContent = "წავალ პარკში ქარის შესაგრძნობად"; 
            break;
        case "snowy":
            message.textContent = "შევაგროვებ თოვლის გუნდებს"; 
            break;
        case "foggy":
            message.textContent = "ვუყურებ ბუნდოვანებას ფანჯრიდან"; 
            break;
        default:
            message.textContent = "დავრჩები სახლში";
    }
}
