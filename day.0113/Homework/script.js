// 1
// 1. ვეძებ ფორმას HTML ფაილში მისი id-ის მიხედვით
const form = document.getElementById('registrationForm');

// 2. ვქმნი ცარიელ მასივს, სადაც შევინახავ მოსწავლეთა მონაცემებს
const students = [];

// 3. ვამატებ ფორმაზე submit event listener-ს
form.addEventListener('submit', function(event) {
  event.preventDefault(); // 4. ვაჩერებ ფორმის ნაგულისხმევ გაგზავნას

  // 5. ვიღებ მომხმარებლის შეყვანილ ინფორმაციას
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // 6. ვამოწმებ, უკვე არსებობს თუ არა ასეთი Email სტუდენტებში
  const isExisting = students.some(student => student.email === email);

  if (isExisting) {
    // 7. თუ არსებობს, ვაჩვენებ გაფრთხილებას
    alert('მოსწავლე ასეთი Email-ით უკვე რეგისტრირებულია');
  } else {
    // 8. თუ არ არსებობს, ვქმნი ახალ სტუდენტის ობიექტს უნიკალური ID-თ
    const newStudent = {
      id: Math.floor(Math.random() * 1000000), // შემთხვევითი ID
      name: name,
      email: email,
      password: password
    };

    // 9. ვამატებ ახალ სტუდენტს მასივში
    students.push(newStudent);

    // 10. ვამატებ ახალ სტუდენტს ცხრილში
    addStudentToTable(newStudent);

    // 11. ვასუფთავებ ფორმას
    form.reset();
  }
});

// 12. ფუნქცია, რომელიც სტუდენტს ამატებს ცხრილში
function addStudentToTable(student) {
  const table = document.getElementById('studentsTable').getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);

  cell1.innerHTML = student.id;
  cell2.innerHTML = student.name;
  cell3.innerHTML = student.email;
  cell4.innerHTML = student.password;
}
