document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");
    
    if (password.length < 4) {
        message.textContent = "Password is too short";
    } else {
        message.textContent = `Welcome ${username}`; 
    }
});
