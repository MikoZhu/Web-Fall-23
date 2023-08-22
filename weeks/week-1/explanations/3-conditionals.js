// Intro to JS Conditionals

// What are Conditionals:
// In JavaScript, conditionals are like decision-making tools for your code. They help your program decide what to do based on certain conditions. Just like making choices in real life, conditionals guide your code down different paths depending on what's happening.

// Why Use Conditionals:
// Conditionals are essential because they make your code smarter and more adaptable. They allow your program to respond to different situations dynamically, providing a personalized experience for users. Without conditionals, your code would follow the same instructions regardless of what's going on, which isn't always helpful.

// How Conditionals Work:
// Conditionals have 3 different approaches within JS
// - If Statements
// - Switch Case Statement
// - Ternary Operators

// Let's take a look

// ---
// ---
// ---
// ---
// ---

// IF Statements

// An if statement checks if something is true or false. If it's true, your code follows one set of instructions; if it's false, your code follows a different set. This helps your program make choices and react accordingly.

// We can use:
// if- Executes code if a condition is true.
// else - Executes one block of code if a condition is true, and another if it's false.
// else if -  Checks multiple conditions in sequence and executes the first block of code where the condition is true.

// Examples

// Example 01 - Using a simple if/else condition for age checking through a number dataType.
// Let's say you want to check the age of a person for a movie theater.

let age = 15;
if (age >= 18) {
  console.log("You're an adult!, pay - 15€");
} else {
  console.log("You're a teenager! pay - 10€");
}

// ---
// ---
// ---
// Example 02 - Using if/else-if/else condition for a weather checking through a string dataType.
// Let's say you want to check the weather to see if you can go to the beach

let weather = "rainy";
if (weather === "sunny") {
  console.log("Time for the beach!");
} else if (weather === "rainy") {
  console.log("Stay indoors and read a book.");
} else {
  console.log("Let's go for a walk!");
}

// ---
// ---
// ---
// Example 03 - Using a simple condition with a number and multiple conditions
// Let's say you're building a game where players earn points. You want to reward them differently based on their score.

let score = 45;
if (score >= 90) {
  console.log("Congratulations! You earned an A grade!");
} else if (score >= 80) {
  console.log("Great job! You got a B grade.");
} else if (score >= 70) {
  console.log("You got a C grade. Keep working hard!");
} else {
  console.log("Your score is below a C. Keep practicing!");
}
// In this example:

// What: We're using conditionals to determine the grade a player gets based on their score.
// Why: To provide personalized feedback and rewards to players based on their performance.
// How: The if statements check the score and decide which message to display.

// Common Comparison Operators:
// ===: Equals with a "strict" type check
// !==: Not Equals with a "strict" type check
// >: Greater Than
// <: Less Than
// >=: Greater Than or Equal To
// <=: Less Than or Equal To

// Nested Conditionals
// You can also put conditionals inside other conditionals. This helps your code make more complex decisions.

// Example 01
let isHungry = true;
let hasMoney = false;

if (isHungry) {
  if (hasMoney) {
    console.log("Buy a snack.");
  } else {
    console.log("Wait until you have money.");
  }
} else {
  console.log("No need for a snack.");
}

// ----
// ----
// ----
// ----

// ----
// ----
// ----
// ----

// Switch Cases
// Switch cases are like multiple-choice questions for your code. They're a way to handle different scenarios based on the value of a single variable. Instead of using a bunch of if statements, switch cases let you choose from a list of options.

// Example 01 - Switch Case for specific case
// Imagine you're building a game where players can choose different characters. You want the game to react differently based on the chosen character.

// How Switch Cases Work:
// You have a variable that represents the player's chosen character.
// You use the switch keyword followed by the variable you're checking.
// Inside the switch block, you create cases for each character option.
// Each case represents a different option and contains the code you want to run for that option.
// At the end of each case, you use the break keyword to stop the code from running into the next case.

let chosenCharacter = "Hermione";
switch (chosenCharacter) {
  case "Harry":
    console.log("You chose the brave Harry Potter!");
    break;
  case "Hermione":
    console.log("You picked the clever Hermione Granger!");
    break;
  case "Ron":
    console.log("You went for the loyal Ron Weasley!");
    break;
  case "Draco":
    console.log("You selected the cunning Draco Malfoy.");
    break;
  default:
    console.log("That character is not in our list.");
}

// Example 02 - Switch case for multiple cases
let month = "June";
switch (month) {
  case "December":
  case "January":
  case "February":
    console.log("It's winter.");
    break;
  case "March":
  case "April":
  case "May":
    console.log("It's spring.");
    break;
  case "June":
  case "July":
  case "August":
    console.log("It's summer.");
    break;
  default:
    console.log("It's fall.");
}
