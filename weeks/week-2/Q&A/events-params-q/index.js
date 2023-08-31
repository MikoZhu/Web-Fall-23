const box = document.querySelector(".box");

const hollaBtn = document.querySelector(".holla-btn");
const hejBtn = document.querySelector(".hej-btn");
const helloBtn = document.querySelector(".hello-btn");

function changeMe(event, color) {
  event.preventDefault();
  box.style.backgroundColor = color;
}

hollaBtn.addEventListener("click", (event) => {
  changeMe(event, "blue");
});

hollaBtn.addEventListener("click", (event) => {
  changeMe(event, "pink");
});

hollaBtn.addEventListener("click", (event) => {
  changeMe(event, "green");
});

// The Problem:
// In the provided code, you're trying to stop the form from submitting when the button is clicked. You're doing this by listening to the "click" event of the button (hollaBtn). When this button is clicked, you're calling the changeMe function, which tries to stop the default action (i.e., form submission) using event.preventDefault().

// However, the form is still being submitted. Why?

// The reason is that while you're listening to the "click" event of the button, the form's "submit" event is what actually triggers the form submission. By the time the "click" event's preventDefault() is called, the form's "submit" event might have already been triggered, causing the form to submit.

// The Solution:
// Instead of listening to the "click" event of the button, you should listen to the "submit" event of the form that contains the button. This way, you're directly stopping the form submission action.
