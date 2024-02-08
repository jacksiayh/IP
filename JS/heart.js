const heartIcons = document.querySelectorAll(".like-button .heart-icon");
const likesAmountLabels = document.querySelectorAll(".like-button .likes-amount");

let likesAmounts = Array.from(likesAmountLabels, (label, index) => {
  const storedLikeStatus = localStorage.getItem(`likeStatus${index}`);
  if (storedLikeStatus && storedLikeStatus === "true") {
    heartIcons[index].classList.add("liked");
  }
  return parseInt(label.innerHTML, 10);
});

heartIcons.forEach((heartIcon, index) => {
  heartIcon.addEventListener("click", () => {
    heartIcon.classList.toggle("liked");

    localStorage.setItem(`likeStatus${index}`, heartIcon.classList.contains("liked"));

    if (heartIcon.classList.contains("liked")) {
      likesAmounts[index]++;
    } else {
      likesAmounts[index]--;
    }

    likesAmountLabels[index].innerHTML = likesAmounts[index];
  });
});
