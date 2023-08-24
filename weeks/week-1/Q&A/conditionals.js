// If Statements:
// Imagine you're making decisions. If it's sunny, you'll go for a walk. If it's raining, you'll stay indoors. If statements in JavaScript are like making these choices in your code. When you have a few different options and want your program to do something based on certain conditions, you use if statements. It's like saying, "If this is true, do that. If not, do something else."

// For example:

let weather = "sunny";
if (weather === "sunny") {
  mood = "happy";
} else if (weather === "rainy") {
  mood = "sad";
} else {
  mood = "neutral";
}

// Switch Case:
// Now, think about picking a toy to play with based on your favorite animal. If your favorite animal is a dog, you'll choose a ball. If it's a cat, you'll choose a string toy. Switch case works similarly. If you have one thing (variable) to check and you want different choices based on its value, you use switch case. It's like saying, "If it's a dog, play with the ball. If it's a cat, play with the string."

// For example:
let favoriteAnimal = "dog";
let toy;

switch (favoriteAnimal) {
  case "dog":
    toy = "ball";
    break;
  case "cat":
    toy = "string";
    break;
  default:
    toy = "unknown";
}
