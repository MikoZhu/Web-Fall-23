// Function to update the subtotal value of a product based on its price and quantity
function updateSubtotal(product) {
  // Get the price and quantity elements of the product
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  console.log(price, quantity);

  // Extract numeric values from price and quantity elements
  const quantityValue = quantity.valueAsNumber;
  const priceValue = parseFloat(price.innerText);

  // Calculate the subtotal for the product
  const subtotalValue = priceValue * quantityValue;

  // Get the element where the subtotal is displayed and update its text content
  const subTotal = product.querySelector(".subtotal span");
  subTotal.innerText = subtotalValue.toFixed(2);

  // Return the calculated subtotal value
  return subtotalValue;
}

// Function to update the total value of all products
function updateTotal(products) {
  let totalValue = 0;
  // Loop through each product and update totalValue by adding its subtotal
  products.forEach((product) => {
    totalValue += updateSubtotal(product);
  });
  // Update the displayed total value
  const total = document.querySelector("#total-value span");
  total.innerText = totalValue.toFixed(2);
}

// Function to remove a product from the cart
function removeProduct(event) {
  // The event parameter represents the event that triggered the function
  const target = event.currentTarget;
  console.log(target);
  // Find the closest row element with the "product" class
  const row = target.closest(".product");
  console.log(row);
  // Remove the row from the DOm using remove() mnethod
  row.remove();
  // Update the total after removing the product
  updateTotal(document.querySelectorAll(".product"));
}

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
              <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
              <button class="btn btn-remove">Remove</button>
          </td>
      `;
  return newRow;
}

// Function to handle creating a new product
function createProduct() {
  // Get input elements for the new product's name and price
  const createRow = document.querySelector(".create-product");
  const newProdNameInput = createRow.querySelector("input[type='text']");
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
  removeBtn.onclick = removeProduct;

  // Reset Input Values
  newProdNameInput.value = "";
  newProdPriceInput.value = 0;
}

// EVENTS Connection to DOM
// -----
// -----
// -----
// -----
// When the window is loaded, set up event listeners for various actions
window.addEventListener("load", () => {
  // Attach an event listener to the "Calculate Prices" button
  const calculatePricesBtn = document.querySelector("#calculate");
  const calculateFunc = () => {
    // Get all product elements and update the total
    const products = Array.from(document.querySelectorAll(".product"));
    updateTotal(products);
    console.log(updateTotal(products));
  };
  calculatePricesBtn.onclick = calculateFunc;

  //  Attach "remove" event listeners to all "Remove" buttons
  const removeBtns = document.querySelectorAll(".btn-remove");
  removeBtns.forEach((removeBtn) => {
    removeBtn.onclick = removeProduct;
  });

  // Attach a "create" event listener to the "Create" button
  const createBtn = document.querySelector("#create");
  if (createBtn) {
    createBtn.onclick = createProduct;
  }
});
