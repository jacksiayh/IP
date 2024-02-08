// Get all heart icons and likes amount labels
const heartIcons = document.querySelectorAll(".like-button .heart-icon");
const likesAmountLabels = document.querySelectorAll(".like-button .likes-amount");

// Initialize likes amount array with initial values from HTML
let likesAmounts = Array.from(likesAmountLabels, (label) => parseInt(label.innerHTML, 10));

// Add click event listener to each heart icon
heartIcons.forEach((heartIcon, index) => {
  heartIcon.addEventListener("click", () => {
    heartIcon.classList.toggle("liked");
    if (heartIcon.classList.contains("liked")) {
      likesAmounts[index]++;
    } else {
      likesAmounts[index]--;
    }

    // Update the likes amount for the corresponding product
    likesAmountLabels[index].innerHTML = likesAmounts[index];
  });
});
