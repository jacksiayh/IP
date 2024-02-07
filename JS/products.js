document.addEventListener("DOMContentLoaded", function () {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const loginBtn = document.getElementById("loginBtn");

    function logOut() {
        const confirmLogout = confirm("Are you sure you want to log out?");
        if (confirmLogout) {
            localStorage.removeItem("loggedInUser");
            loginBtn.innerText = "Login";
            loginBtn.href = "index.html";
        }
    }

    if (loggedInUser && loggedInUser.loggedIn) {
        const user = loggedInUser.user;
        const password = loggedInUser.password;
        
        const welcomeDisplayed = localStorage.getItem("welcomeDisplayed");
        if (welcomeDisplayed !== "true") {
            alert(`Welcome ${user}!`);
            localStorage.setItem("welcomeDisplayed", "true"); 
        }
        
        loginBtn.innerText = "Log out";
        loginBtn.href = "#";
        loginBtn.addEventListener("click", logOut);
    } else {
        const confirmLogout = confirm("You are not logged in. Do you want to go to the login page?");
        if (confirmLogout) {
            window.location.href = "login.html";
        }

        loginBtn.innerText = "Login";
        loginBtn.href = "login.html";
    }

    function addToCart(product) {
        const cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
        
        const productName = product.querySelector('.pname').textContent;
        const productPrice = product.querySelector('.pprice').textContent;

        const newProduct = {
            name: productName,
            price: productPrice,
        };

        cart.push(newProduct);

        localStorage.setItem("shoppingCart", JSON.stringify(cart));

        console.log("Updated Shopping Cart:", cart);

    }

    document.querySelectorAll('.overlay').forEach(function (overlay) {
        overlay.addEventListener('click', function () {
            addToCart(this.parentElement); 
        });
    });
});
