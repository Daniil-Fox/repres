const tabletMedia = window.matchMedia("(max-width: 1024px)");

const testiCont = document.querySelector(".testi-hero__right");
if (testiCont) {
  tabletMedia.addEventListener("change", (e) => {
    const testiCards = [...testiCont.children];
    const testiItems = document.querySelectorAll(".testi-item");
    if (e.matches) {
      if (testiItems.length > 0) {
        let j = 0;
        for (let i = 0; i < testiItems.length; i += 2) {
          testiItems[i].after(testiCards[j]);
          j = (j + 1) % testiCards.length;
        }
        if (j != 0) testiItems[testiItems.length - 1].after(testiCards[j]);
      }
    }
  });
}
