const form = document.getElementById('registrationForm');
const students = [];

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  const isExisting = students.some(student => student.email === email);

  if (isExisting) {
    alert('მოსწავლე ასეთი Email-ით უკვე დარეგისტრირებულია!');
  } else {
    const newStudent = {
      id: Math.floor(Math.random() * 1000000), // უნიკალური და შემთხვევითი ID
      name: name,
      email: email,
      password: password
    };

    students.push(newStudent);
    addStudentToTable(newStudent);
    form.reset();
  }
});

function addStudentToTable(student) {
  const tableBody = document.getElementById('studentsTable').getElementsByTagName('tbody')[0];
  const newRow = tableBody.insertRow();

  const idCell = newRow.insertCell(0);
  const nameCell = newRow.insertCell(1);
  const emailCell = newRow.insertCell(2);
  const passwordCell = newRow.insertCell(3);

  idCell.textContent = student.id;
  nameCell.textContent = student.name;
  emailCell.textContent = student.email;
  passwordCell.textContent = student.password;
}
