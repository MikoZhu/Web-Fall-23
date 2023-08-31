const box = document.querySelector(".box");

const hollaBtn = document.querySelector(".holla-btn");
const hejBtn = document.querySelector(".hej-btn");
const helloBtn = document.querySelector(".hello-btn");

function changeMe(event, color) {
  event.preventDefault();
  box.style.backgroundColor = color;
}

// Attach event listener to the form's submit event
const hollaForm = hollaBtn.closest(".form");
// Attach the event listener to the form's "submit" event
hollaForm.addEventListener("submit", (event) => {
  console.log("Clicked - holla");
  changeMe(event, "green");
});

// ----
// ----
// ----

// Assuming you might want to add functionality for the other buttons in the future:

// ----
// ----
// ----

// Attach event listener to the form's submit event
const hejForm = hejBtn.closest(".form");
// Attach the event listener to the form's "submit" event
hejForm.addEventListener("submit", (event) => {
  console.log("Clicked - hej");
  // Add desired functionality for hejBtn here
  changeMe(event, "blue");
});

// ----
// ----
// ----

// Attach event listener to the form's submit event
const helloForm = helloBtn.closest(".form");
// Attach the event listener to the form's "submit" event
helloForm.addEventListener("submit", (event) => {
  console.log("Clicked - hello");
  // Add desired functionality for helloBtn here
  changeMe(event, "yellow");
});
