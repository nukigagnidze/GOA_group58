// 3
class User {
    constructor(email, password, username) {
      this.email = email;
      this._password = password; 
    }
  
    introduce() {
      console.log(`My email is ${this.email} and my username is ${this.username}.`);
    }
  
    // გეთთერი — გაძლევს საშუალებას წაიკითხო მნიშვნელობა ფუნქციის გამოძახების გარეშე
    get userEmail() {
      return this.email;
    }
  
    // სეთერი — გაძლევს საშუალებას შეცვალო მნიშვნელობა ფუნქციის გამოძახების გარეშე
    set userPassword(newPassword) {
      if (
        newPassword.length > 6 &&
        newPassword.length < 20 &&
        newPassword.includes('.')
      ) {
        this._password = newPassword;
        console.log('Password successfully changed.');
      } else {
        console.log('Password must be between 7-19 characters and include a dot.');
      }
    }
  }

  const user1 = new User('test@example.com', 'mypassword.', 'testuser');

  console.log(user1.userEmail);

  user1.userPassword = 'new.pass123'; 

  user1.userPassword = 'short';

  console.log(user1);
