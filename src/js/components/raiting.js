class StarRating {
  constructor(element) {
    this.element = element;
    this.rating = parseFloat(element.dataset.rating) || 0;
    this.maxStars = 5;
    this.init();
  }

  init() {
    const starsWrapper = document.createElement("div");
    starsWrapper.className = "rating-stars";

    const fillWrapper = document.createElement("div");
    fillWrapper.className = "rating-fill";

    const fillPercentage = (this.rating / this.maxStars) * 100;
    fillWrapper.style.width = `${fillPercentage}%`;

    for (let i = 0; i < this.maxStars; i++) {
      const star = document.createElement("span");
      star.className = "star";
      star.innerHTML = "★";
      starsWrapper.appendChild(star.cloneNode(true));
      fillWrapper.appendChild(star);
    }

    this.element.appendChild(starsWrapper);
    this.element.appendChild(fillWrapper);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const ratingElements = document.querySelectorAll(".rating");
  ratingElements.forEach((element) => new StarRating(element));
});
