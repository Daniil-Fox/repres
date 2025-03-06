import "./_components.js";
import IMask from "imask";
document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".float-field__input");

  if (inputs.length > 0) {
    inputs.forEach((input) => {
      input.addEventListener("focus", function () {
        this.parentElement.classList.add("float-field--focused");
      });

      input.addEventListener("blur", function () {
        if (this.value === "") {
          this.parentElement.classList.remove("float-field--focused");
        }
      });
      if (input.value !== "") {
        input.parentElement.classList.add("float-field--focused");
      }
    });
  }

  const phoneInput = document.querySelectorAll("input[type=tel]");
  let mask;
  if (phoneInput.length > 0) {
    const initMask = (inp) => {
      mask = IMask(inp, {
        mask: "000 000 000",
        lazy: true,
        placeholderChar: "_",
        onAccept: (value) => {
          console.log("Accepted value:", value);
        },
        onComplete: (value) => {
          value = 58 + value;
          console.log(value);
        },
      });
    };
    const destroyMask = () => {
      if (mask) {
        mask.destroy();
        mask = null;
      }
    };
    phoneInput.forEach((input) => {
      initMask(input);
    });
  }

  const reviewCards = document.querySelectorAll(".testi-item");
  if (reviewCards.length > 0) {
    function initializeReviews() {
      reviewCards.forEach((card) => {
        const readMoreBtn = card.querySelector(".testi-item__more");
        if (readMoreBtn) {
          const content = card.querySelector(".testi-item__body p");
          const maxWords = parseInt(card.getAttribute("data-max-words") || 20);

          function truncateText() {
            const fullText = content.textContent.trim();
            const words = fullText.split(/\s+/);

            if (words.length > maxWords) {
              const truncatedText = words.slice(0, maxWords).join(" ") + "...";
              content.textContent = truncatedText;
              content.dataset.fullText = fullText;
              card.classList.remove("expanded");
              readMoreBtn.innerHTML =
                'Leer más <svg class="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="#7B61FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
            } else {
              card.classList.add("short");
            }
          }

          truncateText();

          readMoreBtn.addEventListener("click", function () {
            if (card.classList.contains("expanded")) {
              truncateText();
            } else {
              content.textContent = content.dataset.fullText;
              card.classList.add("expanded");
              readMoreBtn.innerHTML =
                'Leer menos <svg class="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="#7B61FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
            }
          });
        }
      });
    }
    initializeReviews();
  }
});
