import { add, subtract, multiply, divide } from './mathFunctions.js';
import render from './renderFunctions.js';

const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultDiv = document.getElementById('result');

document.getElementById('addBtn').addEventListener('click', () => {
  const result = add(+num1Input.value, +num2Input.value);
  render(resultDiv, result);
});

document.getElementById('subBtn').addEventListener('click', () => {
  const result = subtract(+num1Input.value, +num2Input.value);
  render(resultDiv, result);
});

document.getElementById('mulBtn').addEventListener('click', () => {
  const result = multiply(+num1Input.value, +num2Input.value);
  render(resultDiv, result);
});

document.getElementById('divBtn').addEventListener('click', () => {
  const result = divide(+num1Input.value, +num2Input.value);
  render(resultDiv, result);
});
