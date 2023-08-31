// JS Syntax

// Select the first element with the class "box" from the DOM and store it in the "box" variable.
const box = document.querySelector(".box");

// Select all input elements with the name attribute set to "theme" from the DOM and store them in the "themeRadios" variable.
const themeRadios = document.querySelectorAll('input[name="theme"]');

// Loop through each radio button in the "themeRadios" NodeList.
themeRadios.forEach((radio) => {
  // Add an event listener to each radio button to listen for the "change" event.
  // This event triggers when the radio button's state changes (i.e., when it's selected).
  radio.addEventListener("change", function () {
    // Here, 'this' refers to the radio button that was changed (i.e., the one that triggered this event).
    // We're using 'this' to get the value of the radio button that was selected.
    const selectedTheme = this.value;

    let color; // Declare a variable to store the background color value.

    // Use a switch statement to determine the color based on the value of the selected radio button.
    switch (selectedTheme) {
      case "dark":
        color = "darkgray";
        break;
      case "light":
        color = "lightblue";
        break;
      case "crazy":
        color = "purple";
        break;
      default:
        color = "lightgreen"; // Default color if none of the above cases match.
        break;
    }

    // Add the "color-transition" class to the "box" element.
    // This class presumably contains CSS that provides a smooth color transition effect.
    box.classList.add("color-transition");

    // Change the background color of the "box" element to the value stored in the "color" variable.
    box.style.backgroundColor = color;

    // Set a timeout to execute a function after a delay of 300 milliseconds.
    setTimeout(() => {
      // After the delay, remove the "color-transition" class from the "box" element.
      // This ensures that subsequent changes to the box's style don't have the transition effect.
      box.classList.remove("color-transition");
    }, 300); // 300 milliseconds delay.
  });
});
