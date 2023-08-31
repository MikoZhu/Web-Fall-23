function modifyHTMLContent() {
  const div = document.getElementById("htmlExample");
  div.innerHTML = "New content with a <em>different tag</em>.";
}

function showVisibleText() {
  const div = document.getElementById("textExample");
  alert(div.innerText); // This will alert an empty string because the text is hidden with CSS.
}

function showAllText() {
  const div = document.getElementById("contentExample");
  alert(div.textContent); // This will alert "This text is also hidden." even though it's hidden with CSS.
}
