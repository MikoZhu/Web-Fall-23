const box = document.querySelector(".box");

const hollaBtn = document.querySelector(".holla-btn");
const hejBtn = document.querySelector(".hej-btn");
const helloBtn = document.querySelector(".hello-btn");

function changeMe(event, color) {
  event.preventDefault();
  box.style.backgroundColor = color;
}

// Attach onclick property to the form's submit event
const hollaForm = hollaBtn.closest(".form");
hollaForm.onsubmit = function (event) {
  console.log("Clicked - holla");
  changeMe(event, "green");
};

// ----
// ----
// ----

// Assuming you might want to add functionality for the other buttons in the future:

// ----
// ----
// ----

// Attach onclick property to the form's submit event
const hejForm = hejBtn.closest(".form");
hejForm.onsubmit = function (event) {
  console.log("Clicked - hej");
  changeMe(event, "blue");
};

// ----
// ----
// ----

// Attach onclick property to the form's submit event
const helloForm = helloBtn.closest(".form");
helloForm.onsubmit = function (event) {
  console.log("Clicked - hello");
  changeMe(event, "yellow");
};
