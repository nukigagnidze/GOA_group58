document.getElementById('loginForm').onsubmit = function(e) {
    e.preventDefault();

    const email = this.email.value.trim();
    const password = this.password.value.trim();

    if (!email || !password) return alert('Please fill out all fields');

    if (!this.email.checkValidity()) return alert('Please enter a valid email address');

    console.log('Email:', email);
    console.log('Password:', password);

    this.reset();
  };