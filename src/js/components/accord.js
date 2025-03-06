const accordItems = document.querySelectorAll("[data-accord]");

if (accordItems.length > 0) {
  accordItems.forEach((item) => {
    const btn = item.querySelector("[data-accord-btn]");
    const content = item.querySelector("[data-accord-content]");

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      let isActive = btn.classList.toggle("active");

      content.style.maxHeight = isActive ? content.scrollHeight + "px" : null;
    });
  });
}
