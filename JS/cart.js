// Mapping of product names to iframe codes
const productIframes = {
    "3x3 Normal Rubiks Cube": '<iframe width="220px" height="220px" title="3x3 cube painted" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/360baa5c52c043068683b64bb96b8ed0/embed"></iframe>',
    "3x3 Lego Rubiks Cube": '<iframe width="220px" height="220px" title="lego 3x3 cube painted" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/b9ca252abf3a468e8334f28e4b039a89/embed"> </iframe>',
    "2x2 mini Rubiks cube": '<iframe width="220px" height="220px" title="2x2 cube painted" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/c62ccd84efb740c48533a808b1551f92/embed"></iframe>',
    "2x2 Lego Mini Rubiks cube": '<iframe width="220px" height="220px" title="lego 2x2 cube painted" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/3b08ac6f65a64c5caa90cccef6add301/embed"></iframe>',
    "Rubiks cube Keychain": '<iframe width="220px" height="220px" title="keychain cube painted" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/39e24be6af6946e7a9d7e0bc25cc6a06/embed"></iframe>',
    "Pyraminx Rubiks cube": '<iframe width="220px" height="220px" title="pyraminx cube painted" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/56321f8c6dc642b0a9015a96330930b0/embed"></iframe>',
};

function getProductIframeCode(productName) {
    // Retrieve the iframe code based on the product name
    return productIframes[productName] || '';
}

function displayCartItems() {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = "";

    const cartItems = JSON.parse(localStorage.getItem("shoppingCart")) || [];

    cartItems.forEach(item => {
        const container = document.createElement("div");
        container.classList.add("cart-item-container");

        // Get the iframe code based on the product name
        const iframeCode = getProductIframeCode(item.name);

        // Create a div and set its innerHTML to the iframe code
        const iframeContainer = document.createElement("div");
        iframeContainer.innerHTML = iframeCode;

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

        container.appendChild(iframeContainer);
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

    if (cartItemsContainer && mainContainer) {
        const cartItemContainers = cartItemsContainer.getElementsByClassName("cart-item-container");
        const totalHeight = Array.from(cartItemContainers).reduce((sum, container) => sum + container.clientHeight, 0);

        mainContainer.style.height = totalHeight + "px";
    }
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
    }
}

// Display cart items on page load
displayCartItems();
displayNoProductsMessage();
