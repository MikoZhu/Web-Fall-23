// start here :)
console.log("Hello World");

// Welcome and Introduction
// Display a welcoming message for the user.
alert(
  `Welcome to the Music Festival Concert Slot Reservation! Get ready to choose your favorite music genre.`
);

// Prompt the user to enter their name.
const userName = prompt("Please enter your name:");

// Display a greeting message with the user's name.
alert(`Hello, ${userName}! Let's get started.`);

// Music Genre Selection
// Ask the user to choose a music genre.
const genreChoice = prompt(`Select a music genre:
  1 - Rock
  2 - Hip Hop
  3 - Electronic
  Please enter the number of your choice:`);

// Initialize a variable to store the selected genre.
let selectedGenre = "";

// Determine the selected genre based on the user's choice.
if (genreChoice === "1") {
  selectedGenre = "Rock";
} else if (genreChoice === "2") {
  selectedGenre = "Hip Hop";
} else if (genreChoice === "3") {
  selectedGenre = "Electronic";
} else {
  // If the user enters an invalid choice, show an error message and exit the program.
  alert("Invalid choice. Please select a valid number.");
  process.exit(1);
}

// The process.exit(1) command is used to exit a Node.js program with a non-zero exit code.
// In simpler terms, it's like pressing a stop button to immediately end the program's execution
// and indicate that something went wrong or an error occurred.

// Display the chosen genre.
alert(`You've chosen ${selectedGenre}!`);

// Concert Slot Reservation
// Ask the user to select a concert slot based on the chosen genre.
let concertSlot = "";
let artistNames = ""; // Initialize an array to store artist names for the selected genre.

// Determine the available concert slots and corresponding artist names.
switch (selectedGenre) {
  case "Rock":
    concertSlot = prompt(`Select a concert slot for Rock:
    1 - The Strokes
    2 - Parcels 
    3 - The Red Hot Chilli Peppers
    Please enter the number of your choice:`);
    artistNames = ["The Strokes", "Parcels", "The Red Hot Chilli Peppers"];
    break;
  case "Hip Hop":
    concertSlot = prompt(`Select a concert slot for Hip Hop:
    1 - Kendrick Lamar
    2 - Outkast
    3 - J Cole
    Please enter the number of your choice:`);
    artistNames = ["Kendrick Lamar", "Outkast", "J Cole"];
    break;
  case "Electronic":
    concertSlot = prompt(`Select a concert slot for Electronic:
    1 - DJ Koze
    2 - Fred Again 
    3 - Disclosure
    Please enter the number of your choice:`);
    artistNames = ["DJ Koze", "Fred Again", "Disclosure"];
    break;
  default:
    // If an invalid genre is chosen, show an error message and exit the program.
    alert("Invalid choice.");
    process.exit(1);
}

// Determine the selected time slot based on the user's concert slot choice.
let timeSlot = "";
switch (concertSlot) {
  case "1":
    timeSlot = "6:00 PM";
    break;
  case "2":
    timeSlot = "9:00 PM";
    break;
  case "3":
    timeSlot = "12:00 AM";
    break;
  default:
    // If an invalid concert slot is chosen, show an error message and exit the program.
    alert("Invalid slot choice.");
    process.exit(1);
}

if (concertSlot === "1") {
  alert(
    `Great Choice, You've reserved a spoty to see ${artistNames[0]} at ${timeSlot} for the ${selectedGenre} concert!`
  );
} else if (concertSlot === "2") {
  alert(
    `Great Choice, You've reserved a spoty to see ${artistNames[1]} at ${timeSlot} for the ${selectedGenre} concert!`
  );
} else if (concertSlot === "3") {
  alert(
    `Great Choice, You've reserved a spoty to see ${artistNames[2]} at ${timeSlot} for the ${selectedGenre} concert!`
  );
}
