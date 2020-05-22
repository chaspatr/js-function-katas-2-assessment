let firstInput = document.querySelector(".input-one");
let secondInput = document.querySelector(".input-two");
const addButton = document.querySelector(".add-button-element");
const multiplyButton = document.querySelector(".multiply-button-element");
const exponentiationButton = document.querySelector(
  ".exponentiation-button-element"
);

// Write a function named "add" which takes two arguments (as input variables) and returns their sum.

// You may use built-in operators in order to finish this kata.

// For example, calling add(2, 4) should return a result of 6.
function add(x, y) {
  return +x + +y;
}

addButton.addEventListener("click", function () {
  let sum = add(firstInput.value, secondInput.value);
  console.log(sum);
});

// Write a function named "multiply" which takes two arguments (as input variables) and returns their product.

// You may not use built-in math operators or functions (such as the * multiplication operator). Instead, you will use a FOR loop which calls your add function from the first kata.

// For example, calling multiply(6, 4) should return a result of 24, which could be expressed by adding 6 to itself 4 times:
function multiply(x, y) {
  let product;
  for (let index = 0; index < secondInput; index++) {
    product = add(firstInput.value, firstInput.value);
  }
  return product;
}

multiplyButton.addEventListener("click", function () {
  let product = multiply(firstInput.value, secondInput.value);
  console.log(product);
});

// Write a function named "factorial" which takes a single argument and returns the factorial of that value.

// You may not use built-in math operators or functions (such as the * multiplication operator). Instead, you will re-use functions you wrote in earlier katas to write this function.

// A factorial multiplies a given number by every number below it. For example, "5 factorial" (usually symbolized by 5! in Mathematics) would be:

//code here

// Write a function named "Fibonacci" which takes an argument n and returns the nth Fibonacci number.

// You may not use built-in math operators or functions (such as the * multiplication operator). Instead, you will use functions you wrote in earlier katas to write this function.

// For example, calling fibonacci(8) should return a result of 13. The fibonnaci sequence begins:

//code here
