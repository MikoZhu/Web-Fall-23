const questions = [
  {
    question: "Hello there, What's your name?",
    responseType: "input",
    next: "showFoodTypes", // using string function names for simplicity
  },
  {
    question:
      "Nice to meet you {name}. What type of food would you like to order?",
    responseType: "buttons",
    responses: ["Pizza", "Pasta", "Salad"],
    next: "showMenu",
  },
  // ... more questions
];

// In this structure:

// question: The question the bot will ask.
// responseType: Determines how the user will answer (e.g., through an input field or buttons).
// responses: Possible responses if buttons are used.
// next: The function to call after this question.
// By structuring your questions and answers in this way, you can loop through the questions array and programmatically generate the chat flow. This approach can make the code more maintainable and scalable.
