const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const btnAdd = document.getElementById("btnAdd");
const btnSubtract = document.getElementById("btnSubtract");
const btnMultiply = document.getElementById("btnMultiply");
const btnDivide = document.getElementById("btnDivide");
const result = document.getElementById("result");

//ADD
btnAdd.addEventListener("click", () => {
    const x = parseFloat(firstNumber.value) || 0;
    const y = parseFloat(secondNumber.value) || 0;
    result.innerHTML = parseFloat(x + y);
});

//SUBTRACT
btnSubtract.addEventListener("click", () => {
    const x = parseFloat(firstNumber.value) || 0;
    const y = parseFloat(secondNumber.value) || 0;
    result.innerHTML = parseFloat(x - y);
});

//MULTIPLY
btnMultiply.addEventListener("click", () => {
    const x = parseFloat(firstNumber.value) || 0;
    const y = parseFloat(secondNumber.value) || 0;
    result.innerHTML = parseFloat(x * y);
});

//DIVIDE
btnDivide.addEventListener("click", () => {
    const x = parseFloat(firstNumber.value) || 0;
    const y = parseFloat(secondNumber.value) || 0;
    result.innerHTML = parseFloat(x / y);
});