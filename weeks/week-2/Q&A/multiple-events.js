const button = document.getElementById("myButtonEvent");
const form = document.getElementById("myForm");
const hoverDiv = document.getElementById("hoverDiv");

// button.addEventListener("click", function () {
//   console.log("alert");
//   alert("Button was clicked!");
// });

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevents the form from actually submitting and refreshing the page
  alert("Form was submitted!");
});

hoverDiv.addEventListener("mouseover", function () {
  alert("Div was hovered over!");
});

// Can you chain them to be pased as multiple arguments though ?

// button.addEventListener("click", "submit", "mouseover", function () {
//   console.log("alert");
//   alert("Button was clicked!");
// });

// No, the addEventListener method does not support chaining multiple event types as separate arguments.The method signature expects the first argument to be a single string representing the event type.

// However, if you want to attach the same function to multiple events, you can use a loop or iterate over an array of event types. Here's an example:

const buttonTwo = document.getElementById("myButtonEventTwo");

const events = ["click", "mouseover"];

events.forEach((event) => {
  buttonTwo.addEventListener(event, function () {
    alert(`Button event triggered: ${event}`);
  });
});
