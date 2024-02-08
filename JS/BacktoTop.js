// Wait for the DOM to be fully loaded before executing the code
document.addEventListener("DOMContentLoaded", function () {
    // Get the backToTopButton element by its ID
    var backToTopButton = document.getElementById("backToTopBtn");

    // Add a scroll event listener to the window
    window.onscroll = function () {
        // Check if the user has scrolled more than 20 pixels from the top
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            // If scrolled, display the backToTopButton
            backToTopButton.style.display = "block";
        } else {
            // If not scrolled (or less than 20 pixels), hide the backToTopButton
            backToTopButton.style.display = "none";
        }
    };

    // Add a click event listener to the backToTopButton
    backToTopButton.onclick = function () {
        // Call the scrollToTop function when the button is clicked
        scrollToTop();
    };

    // Function to smoothly scroll to the top of the page
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Use smooth scrolling behavior
        });
    }
});
