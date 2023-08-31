// Simple Example
// You can use closures to create functions on the fly based on some input.
function multiplier(factor) {
  return (x) => {
    return x * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // Outputs: 10

const triple = multiplier(3);
console.log(triple(5)); // Outputs: 15

// Here, the multiplier function returns a new function that multiplies its input by a factor. Each time we call multiplier, a new closure is created with its own "memory" of the factor.

// The multiplier function returns another function. When you call multiplier(2), it returns a function that multiplies its input by 2. This returned function is stored in the double constant. Similarly, triple stores a function that multiplies its input by 3.

// ---
// ---
// ---
// ---

// MORE EXAMPLES

// Data Encapsulation and Private Variables:
// In languages like Java or C++, you can create private variables within classes. JavaScript doesn't have built-in support for private variables, but closures can be used to achieve this.

function createBankAccount(initialBalance) {
  let balance = initialBalance; // This is a "private" variable

  return {
    deposit: function (amount) {
      balance += amount;
      return balance;
    },
    withdraw: function (amount) {
      balance -= amount;
      return balance;
    },
    getBalance: function () {
      return balance;
    },
  };
}

const account = createBankAccount(100);
console.log(account.getBalance()); // 100
account.deposit(50);
console.log(account.getBalance()); // 150

// In the above example, balance is encapsulated within the createBankAccount function. The methods deposit, withdraw, and getBalance provided by the returned object can access and modify balance, but from outside, there's no direct way to change balance.

// ---
// ---
// ---
// ---

// Event Listeners and Callbacks:
// Closures are often used in event listeners and callbacks to remember some state or data.

function setupButton(buttonId, alertMessage) {
  const button = document.getElementById(buttonId);
  button.onclick = () => alert(alertMessage); // This is what is called implicit return since its only one line of code being executed thus, no need for curly brackets :)
}

setupButton("myButton", "Button was clicked!");
setupButton("myButtonTwo", "Hello Students");
// In this example, the event listener remembers the alertMessage for each button, even if setupButton has finished executing.
// Reusability at its finest :)

// ---
// ---
// ---
// ---

// Timers and Delays:
// Closures can be used with setTimeout or setInterval to remember some data or state across delays.

function delayedConsoleMessage(message, delay) {
  setTimeout(() => {
    console.log(message);
  }, delay);
}

delayedConsoleMessage("Hello after 5 seconds!", 5000);
delayedConsoleMessage("Hello after 10 seconds!", 10000);

// In this example, even though the outer function delayedConsoleMessage finishes executing immediately, the inner function passed to setTimeout still remembers the message after the delay.

// In Conclusion:
// Closures provide functions with the ability to "remember" their creation environment, leading to more flexible, modular, and maintainable code.
