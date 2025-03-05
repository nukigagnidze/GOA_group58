function temperatureStatus(temp = 20) {
    if (typeof temp === 'object') {
        temp = document.getElementById('temperatureInput').value || 20;
    }

    let status;
    if (temp < -10) {
        status = "Very cold";
    } else if (temp <= 0) {
        status = "Cold";
    } else if (temp <= 20) {
        status = "Normal";
    } else if (temp <= 30) {
        status = "Warm";
    } else {
        status = "Hot";
    }
    document.getElementById('temperatureResult').textContent = status;
}