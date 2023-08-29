// Function to update the subtotal value of a product based on its price and quantity
function updateSubtotal(product) {
  // Get the price and quantity elements of the product
  const price = product.querySelector(".price span");
  console.log(price);
  const quantity = product.querySelector(".quantity input");
  console.log(quantity);

  // Extract numeric values from price and quantity elements
  const priceValue = parseFloat(price.innerText);
  const quantityValue = quantity.valueAsNumber;

  // Calculate the subtotal for the product
  const subtotalValue = priceValue * quantityValue;

  // Get the element where the subtotal is displayed and update its text content
  const subTotal = product.querySelector(".subtotal span");
  subTotal.innerText = subtotalValue.toFixed(2);

  // Return the calculated subtotal value
  return subtotalValue;
}

// Explanation

// The updateSubtotal function takes a parameter product, which is expected to be a DOM element representing a product in the cart.

// It uses the .querySelector(".price span") method to find the element with the class "price" and a nested <span> element within the provided product. This likely corresponds to the element displaying the product's price. The found element is stored in the price variable, and it's logged to the console.

// Similarly, it uses .querySelector(".quantity input") to find the <input> element within the provided product that is likely used to input the quantity of the product. The found element is stored in the quantity variable and logged to the console.

// It extracts the numeric value of the product's price by parsing the text content of the price element. This value is stored in the priceValue variable.

// It extracts the numeric value of the product's quantity by using the .valueAsNumber property of the quantity input element. The value is stored in the quantityValue variable.

// It calculates the subtotal for the product by multiplying the priceValue and quantityValue together, and the result is stored in the subtotalValue variable.

// It uses .querySelector(".subtotal span") to find the element with the class "subtotal" and a nested <span> element within the provided product. This is the element where the calculated subtotal will be displayed.

// It updates the text content of the subTotal element with the calculated subtotalValue, formatting it to have two decimal places using .toFixed(2).

// Finally, it returns the calculated subtotalValue.

// Overall, this function calculates the subtotal of a product based on its price and quantity, updates the display with the calculated value, and returns the subtotal value for further use.

// -----
// -----
// -----
// -----

// Function to update the total value of all products
function updateTotal(products) {
  let totalValue = 0;
  // Loop through each product and update totalValue by adding its subtotal
  products.forEach((product) => {
    totalValue += updateSubtotal(product);
  });
  // Update the displayed total value
  document.querySelector("#total-value span").innerText = totalValue.toFixed(2);
}

// Explanation

// - The updateTotal function takes a parameter products, which is expected to be an array of DOM elements representing the products in the cart.

// - It initializes a variable totalValue to store the cumulative total of all products.

// - It uses the .forEach() method to loop through each product element in the products array. For each product:

//    - a. It calls the updateSubtotal function to calculate the subtotal for the current product. The returned subtotal is stored in the subtotal variable.

//    - b. It adds the calculated subtotal to the totalValue. This step effectively accumulates the subtotals of all products.

// - After processing all products, it updates the displayed total value in the HTML. It uses document.querySelector("#total-value span") to target the element that displays the total value and then sets its text content to totalValue.toFixed(2) using the .innerText property. The .toFixed(2) method ensures that the total value is formatted with two decimal places.

// In summary, the updateTotal function iterates through each product in the provided array, calculates the total value by summing up the subtotals of all products, and updates the displayed total value in the HTML. This function plays a crucial role in keeping the displayed total value up-to-date as products are added or their quantities are changed.

// -----
// -----
// -----
// -----

// Function to remove a product from the cart
function removeProduct(event) {
  // The event parameter represents the event that triggered the function
  const target = event.currentTarget;
  console.log(target);
  // Find the closest row element with the "product" class
  const row = target.closest(".product");
  console.log(row);
  // Remove the row from the DOM
  row.remove();
  // Update the total after removing the product
  updateTotal(document.querySelectorAll(".product"));
}

// Explanation

// In  this function, the event parameter is used to determine which element triggered the event. It does this by accessing the currentTarget property of the event object. In this case, it's most likely that the event is triggered by clicking the "Remove" button for a product, and event.currentTarget will refer to that specific button element.

// Then, the target.closest(".product") method is used to find the closest ancestor element with the class "product". This effectively identifies the entire row (likely a table row) containing the product that the user wants to remove.

// Once the row is identified, row.remove() removes it from the DOM, effectively deleting the corresponding product's entry from the cart.

// Finally, after removing the product row, the updateTotal function is called with a NodeList of all remaining product rows with the class "product". This will update the total price based on the updated list of products.

// In summary, the event parameter is essential here as it allows the function to determine which specific "Remove" button was clicked and, consequently, which product should be removed from the cart.

// -----
// -----
// -----
// -----

// Function to create a new row for a product
function createProductRow(name, price) {
  const newRow = document.createElement("tr");
  newRow.className = "product";
  newRow.innerHTML = `
      <td class="name">
        <span>${name}</span>
      </td>
      <td class="price">$<span>${price}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" required placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0.00</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    `;
  return newRow;
}

// Explanation

// - The createProductRow function takes two parameters: name and price, representing the product's name and price.
// - It creates a new <tr> (table row) element using document.createElement("tr").
// - The class name of the newly created row is set to "product" using newRow.className = "product".
// - The inner HTML of the row is constructed using a template literal (enclosed in backticks):
//    - The first cell contains the product name wrapped in a <span>.
//    - The second cell holds the product price, preceded by a "$" symbol.
//    - The third cell features an <input> element of type "number" for specifying the quantity, with predefined attributes.
//    - The fourth cell contains a placeholder for the subtotal.
//    - The fifth cell contains a "Remove" button with an appropriate class.
// - The content from the template literal is assigned to the innerHTML property of the new row.
// - The function concludes by returning the newly created row.

// In summary, the createProductRow function dynamically generates a table row structure to represent a product within a shopping cart interface.

// -----
// -----
// -----
// -----

// Function to handle creating a new product
function createProduct() {
  // Get input elements for the new product's name and price
  const createRow = document.querySelector(".create-product");
  const newProdNameInput = createRow.querySelector("input");
  const newProdNameValue = newProdNameInput.value;
  const newProdPriceInput = createRow.querySelector("input[type='number']");
  const newProdPriceValue = Number(newProdPriceInput.value).toFixed(2);

  // Create a new row for the product and set its content
  const newTableRow = createProductRow(newProdNameValue, newProdPriceValue);
  // Get the parent element where the new row will be added
  const parent = document.querySelector("#cart tbody");
  // Append the new row to the parent
  parent.appendChild(newTableRow);

  // Attach a "remove" event listener to the new product's remove button
  const removeBtn = newTableRow.querySelector(".btn-remove");
  removeBtn.addEventListener("click", removeProduct);

  // Reset input values
  newProdNameInput.value = "";
  newProdPriceInput.value = 0;
}

// Explanation

// The createProduct function handles the process of creating a new product within the shopping cart interface.

// It begins by selecting input elements related to the new product's name and price:

// - The createRow variable is assigned the result of querying for an element with the class "create-product".
// - The newProdNameInput variable is assigned the result of querying for an <input> element within createRow.
// - The newProdNameValue variable is assigned the value of the newProdNameInput input element.
// - The newProdPriceInput variable is assigned the result of querying for an <input> element with the attribute type set to "number" within createRow.
// - The newProdPriceValue variable is assigned the numeric value of newProdPriceInput converted to a string with two decimal places.

// The function creates a new row for the product by calling the createProductRow function and passing newProdNameValue and newProdPriceValue as arguments.

// It then identifies the parent element (#cart tbody) where the new product's row will be added:

// - The parent variable is assigned the result of querying for an element with the id "cart" and finding the <tbody> element inside it.

// The new product's row (newTableRow) is appended to the identified parent element.

// An event listener for the "remove" action is attached to the new product's remove button:

// - The removeBtn variable is assigned the result of querying for an element with the class "btn-remove" within newTableRow.
// - A "click" event listener is added to removeBtn, calling the removeProduct function when clicked.

// Finally, the input values are reset to prepare for the creation of the next product:

// - The newProdNameInput input value is set to an empty string.
// - The newProdPriceInput input value is set to 0.

// In summary, the createProduct function manages the creation of a new product within the cart interface. It collects input values for the product's name and price, generates a new row with this information, adds the row to the cart, attaches a "remove" event listener to the remove button, and resets the input values for further product additions.

// -----
// -----
// -----
// -----

// When the window is loaded, set up event listeners for various actions
window.addEventListener("load", () => {
  // Attach an event listener to the "Calculate Prices" button
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", () => {
    // Get all product elements and update the total
    const products = Array.from(document.querySelectorAll(".product"));
    updateTotal(products);
  });

  // EXPLANATION
  // An event listener is attached to the "Calculate Prices" button:
  // The calculatePricesBtn variable is assigned the result of querying for an element with the id "calculate".
  // A "click" event listener is added to calculatePricesBtn, triggering a function when clicked.
  // Within the click listener function:
  // All product elements are collected and converted to an array using Array.from(document.querySelectorAll(".product")).
  // The updateTotal function is called, passing the array of products to recalculate and update the total value.

  // Attach "remove" event listeners to all "Remove" buttons
  const removeBtns = document.querySelectorAll(".btn-remove");
  removeBtns.forEach((removeBtn) => {
    removeBtn.addEventListener("click", removeProduct);
  });
  // EXPLANATION
  // Event listeners for the "Remove" action are attached to all "Remove" buttons:
  // The removeBtns variable is assigned the result of querying for all elements with the class "btn-remove".
  // A forEach loop iterates over each removeBtn element.
  // For each removeBtn, a "click" event listener is added, invoking the removeProduct function when clicked.

  // Attach a "create" event listener to the "Create" button
  const createBtn = document.querySelector("#create");
  if (createBtn) {
    createBtn.addEventListener("click", createProduct);
  }
  // EXPLANATION
  // An event listener is attached to the "Create" button:
  // The createBtn variable is assigned the result of querying for an element with the id "create".
  // A conditional check ensures that createBtn is not null (i.e., the button is present).
  // If createBtn is present, a "click" event listener is added, triggering the createProduct function when clicked.
});

// Explanation
// Upon the window's "load" event, the following event listeners are attached:
// In summary, the provided event listeners are attached during the window's "load" event and control various actions within the shopping cart interface:
// - Calculating and updating total prices when the "Calculate Prices" button is clicked.
// - Initiating the removal of a product when a "Remove" button is clicked.
// - Creating a new product row when the "Create" button is clicked, if the button exists.
