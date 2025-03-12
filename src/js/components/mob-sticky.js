const tabletMedia = window.matchMedia("(max-width: 800px)");
const stickyBlock = document.querySelector(".mob-sticky");
const footer = document.querySelector("footer");
let globalObserver = null;
tabletMedia.addEventListener("change", (e) => {
  if (globalObserver) globalObserver.disconnect();
  if (stickyBlock) {
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (e.matches && entry.isIntersecting) {
            stickyBlock.style.transform = "translateY(100%)";
            stickyBlock.style.opacity = "0";
            stickyBlock.style.pointerEvents = "none";
          } else {
            stickyBlock.style.transform = "translateY(0)";
            stickyBlock.style.opacity = "1";
            stickyBlock.style.pointerEvents = "auto";
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    observer.observe(footer);

    if (!e.matches) {
      observer.unobserve(footer);
      observer.disconnect();
      stickyBlock.style.transform = null;
      stickyBlock.style.opacity = null;
      stickyBlock.style.pointerEvents = null;
    }
  }
});

if (stickyBlock) {
  globalObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          stickyBlock.style.transform = "translateY(100%)";
          stickyBlock.style.opacity = "0";
          stickyBlock.style.pointerEvents = "none";
        } else {
          stickyBlock.style.transform = "translateY(0)";
          stickyBlock.style.opacity = "1";
          stickyBlock.style.pointerEvents = "auto";
        }
      });
    },
    {
      threshold: 0.1,
    }
  );
  globalObserver.observe(footer);
}
