const p = document.getElementById("count");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");

let count = 0;

function updateCount() {
    p.textContent = `Count: ${count}`;
}

function increment() {
    count++;
    updateCount();
}

function decrement() {
    count--;
    updateCount();
}

incrementBtn.onclick = increment;
decrementBtn.onclick = decrement;
