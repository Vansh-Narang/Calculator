let num1 = 8
let num2 = 10
document.getElementById('num1').textContent = num1
document.getElementById('num2').textContent = num2
let resultans = document.getElementById('result')
function Add() {
    resultans.textContent = num1 + num2;
}
function Subtract() {
    resultans.textContent = num2 - num1;
}
function Muiltiply() {
    resultans.textContent = num1 * num2;
}
function Divide() {
    resultans.textContent = num1 / num2;
}
