// Comment to disable and view console :)
"use strict";

function greet(name) {
  if (name) {
    greeting = "Hello, " + name; // This will trigger an error in strict mode
  }
  return greeting;
}

console.log(greet("Alice"));
