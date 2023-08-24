// Beckhy's

// do {
//     let userAgeAlert = "Adult"
//     const userAgeNum = prompt("So that we can prepare the correct size. Please tell us your age?")
//     //const pizzaSize = userAgeNum >= 18 ? "Adult size" : "Child sized"
//     if (userAgeNum >= 18) {
//       alert("You are an adult. We will prepare you an adult size portion")
//       userAgeAlert = "Adult"
//     } else { if (userAgeNum < 18) {
//       alert("You are a child. We will prepare you an child size portion")
//       userAgeAlert = "Child"
//     }
//   }
//   while (userAgeNum != 1-200) //how do I make a condition for if the variable does not equal a number??

// ---------
// ---------
// ---------
// ---------
// My version but it prompts an infinte loop
// do {
//   let userAgeAlert = "Adult";
//   const userAgeNum = prompt(
//     "So that we can prepare the correct size. Please tell us your age?"
//   );

//   if (isNaN(userAgeNum)) {
//     alert("Please enter a valid number for your age.");
//     continue; // This will skip the rest of the loop and ask for input again
//   }

//   if (userAgeNum >= 18) {
//     alert("You are an adult. We will prepare you an adult size portion");
//     userAgeAlert = "Adult";
//   } else {
//     alert("You are a child. We will prepare you a child size portion");
//     userAgeAlert = "Child";
//   }
// } while (true); // This will create an infinite loop until a valid number is entered

// In this code:

// The isNaN(userAgeNum) condition is used to check if the input is not a valid number.
// The continue statement is used to skip the rest of the loop and prompt the user for input again if the input is not a number.
// The loop continues indefinitely (while (true)) until a valid number is entered.
// Please note that with this code, you'll need to add a way for the user to exit the loop, otherwise, it will run indefinitely. You could include another condition, such as checking if the entered age is within a certain range or if the user enters a specific value (e.g., "-1" to exit).

// ---------
// ---------
// ---------
// REFACTORED VERSION

const userAgeNum = prompt(
  "So that we can prepare the correct size. Please tell us your age?"
);
const parsedAge = parseInt(userAgeNum);

if (isNaN(parsedAge)) {
  alert("Please enter a valid number for your age.");
} else {
  if (parsedAge >= 18) {
    alert("You are an adult. We will prepare you an adult size portion.");
  } else {
    alert("You are a child. We will prepare you a child size portion.");
  }
}
