// Determine the selected genre based on the user's choice.
let food = parseInt(prompt("please enter your choice. 1,2,3"));
if (food === 1) {
  console.log("You have chosen 1");
} else if (food === 2) {
  console.log("You have chosen 2");
} else if (food === 3) {
  console.log("You have chosen 13");
} else {
  // If the user enters an invalid choice, show an error message and exit the program.
  alert("Invalid choice. Please select a valid number.");
  process.exit(1);
  console.error("YOU DID NOT SUBMIT ANY OF THE CORRECT NUMBERS");
}
