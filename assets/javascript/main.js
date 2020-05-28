let firstInput = document.querySelector(".input-one");
let secondInput = document.querySelector(".input-two");
let fibonacciInput = document.querySelector(".fibonacci-input-element");
const addButton = document.querySelector(".add-button-element");
const multiplyButton = document.querySelector(".multiply-button-element");
const exponentiationButton = document.querySelector(
  ".exponentiation-button-element"
);
const fibonacciSequenceButton = document.querySelector(
  ".fibonacci-button-element"
);

// Write a function named "add" which takes two arguments (as input variables) and returns their sum.

// You may use built-in operators in order to finish this kata.

// For example, calling add(2, 4) should return a result of 6.
let answer = 0;
function add(x, y) {
  let sum = 0;
  sum += +x + +y;
  return sum;
}

addButton.addEventListener("click", function () {
  answer = add(firstInput.value, secondInput.value);
  console.log(answer);
});

// Write a function named "multiply" which takes two arguments (as input variables) and returns their product.

// You may not use built-in math operators or functions (such as the * multiplication operator). Instead, you will use a FOR loop which calls your add function from the first kata.

// For example, calling multiply(6, 4) should return a result of 24, which could be expressed by adding 6 to itself 4 times:
function multiply(x, y) {
  let product = 0;
  for (let index = 0; index < y; index++) {
    product = add(x, product);
  }
  return product;
}

multiplyButton.addEventListener("click", function () {
  answer = multiply(firstInput.value, secondInput.value);
  console.log(answer);
});

// Write a function named "factorial" which takes a single argument and returns the factorial of that value.

// You may not use built-in math operators or functions (such as the * multiplication operator). Instead, you will re-use functions you wrote in earlier katas to write this function.

// A factorial multiplies a given number by every number below it. For example, "5 factorial" (usually symbolized by 5! in Mathematics) would be:

function factorial(x, y) {
  let exponential = 1;
  for (let index = 0; index < y; index++) {
    exponential = multiply(x, exponential);
  }
  return exponential;
}

exponentiationButton.addEventListener("click", function () {
  answer = factorial(firstInput.value, secondInput.value);
  console.log(answer);
});

// Write a function named "Fibonacci" which takes an argument n and returns the nth Fibonacci number.

// You may not use built-in math operators or functions (such as the * multiplication operator). Instead, you will use functions you wrote in earlier katas to write this function.

// For example, calling fibonacci(8) should return a result of 13. The fibonnaci sequence begins:

// let targetNumber = 0;
// let fibonacciSequenceArray = [0, 1];
// let arrayLength = fibonacciSequenceArray.length;
// function Fibonacci(x) {
//   for (let index = 0; index < x; index++) {
//     let nextNumber = 0;
//     nextNumber =
//       fibonacciSequenceArray[Number(arrayLength)] +
//       fibonacciSequenceArray[Number(arrayLength) - 1];
//     fibonacciSequenceArray.push(nextNumber);
//   }
//   targetNumber = fibonacciSequenceArray[arrayLength];
//   return targetNumber;
// }

// fibonacciSequenceButton.addEventListener("click", function () {
//   let searchedNumber = Fibonacci(fibonacciSequenceArray.length);
//   console.log(searchedNumber);
// });
