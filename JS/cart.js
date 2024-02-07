function displayCartItems() {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = "";

    const cartItems = JSON.parse(localStorage.getItem("shoppingCart")) || [];

    cartItems.forEach(item => {
        const container = document.createElement("div");
        container.classList.add("cart-item-container");

        const image = document.createElement("img");
        image.src = item.image;

        const name = document.createElement("p");
        name.textContent = item.name;

        const price = document.createElement("p");
        price.textContent = item.price;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", function () {
            container.remove();

            const itemIndex = cartItems.indexOf(item);
            if (itemIndex !== -1) {
                cartItems.splice(itemIndex, 1);
                localStorage.setItem("shoppingCart", JSON.stringify(cartItems));
            }

            if (cartItems.length === 0) {
                displayNoProductsMessage();
            }

            adjustMainContainerSize();
        });

        container.appendChild(image);
        container.appendChild(name);
        container.appendChild(price);
        container.appendChild(removeButton);

        cartItemsContainer.appendChild(container);
    });

    adjustMainContainerSize();
}

function adjustMainContainerSize() {
    const cartItemsContainer = document.getElementById("cart-items");
    const mainContainer = document.getElementById("main-container");

    const cartItemContainers = cartItemsContainer.getElementsByClassName("cart-item-container");
    const totalHeight = Array.from(cartItemContainers).reduce((sum, container) => sum + container.clientHeight, 0);

    mainContainer.style.height = totalHeight + "px";
}

// Event listener for checkout button
const checkoutBtn = document.getElementById("checkoutBtn");
checkoutBtn.addEventListener("click", function () {
    // Redirect to the checkout page
    window.location.href = "checkout.html";
});

// Adjust Checkout Button Display on Page Load
const cartItems = JSON.parse(localStorage.getItem("shoppingCart")) || [];
if (cartItems.length === 0) {
    checkoutBtn.style.display = "none";
}

function displayNoProductsMessage() {
    const cartItemsContainer = document.getElementById("cart-items");
    const checkoutBtn = document.getElementById("checkoutBtn");

    const cartItems = JSON.parse(localStorage.getItem("shoppingCart")) || [];

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = "<p>No products right now, go back to the products page?</p>";
        checkoutBtn.style.display = "none";

        const backButton = document.createElement("button");
        backButton.textContent = "Go to Products";
        backButton.style.fontSize = "18px";
        backButton.style.padding = "10px 20px";
        backButton.style.marginTop = "20px";
        backButton.addEventListener("click", function () {
            window.location.href = "products.html";
        });

        cartItemsContainer.appendChild(backButton);
    } else {
        // If there are products, clear any previous "Go to Products" button
        const backButton = document.querySelector("#cart-items button");
        if (backButton) {
            backButton.remove();
        }

        cartItems.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item.name + " - $" + item.price.toFixed(2);
            cartItemsContainer.appendChild(li);
        });
    }
}


// Display cart items on page load
displayCartItems();

displayNoProductsMessage();
