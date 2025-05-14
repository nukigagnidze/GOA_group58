// 📦 ვამატებთ იმპორტებს
import { store, get } from './database/localStorage.js';
import { User } from './model/user.model.js';

// 🎯 ფორმის დამუშავება
document.getElementById('register-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  const newUser = new User(name, email);

  const users = get('users') || [];
  users.push(newUser);
  store('users', users);

  alert(`User ${newUser.name} registered!`);
  e.target.reset();
});
