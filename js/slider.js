const CLICK = "click";
const ACTIVE = "--active";

function slider({ photoClassName, testimonyClassName }) {
  function activateItem(items, indexToActivate, classToActivate) {
    items.forEach((item) =>
      item.classList.remove(`${classToActivate}${ACTIVE}`)
    );
    items[indexToActivate].classList.add(`${classToActivate}${ACTIVE}`);
  }

  function moveToItem(direction) {
    currentIndex = cycle(direction, currentIndex, photos.length);
    translateToLeft(photos, currentIndex);
    activateItem(testimonies, currentIndex, testimonyClassName);
  }

  const photos = document.querySelectorAll(`.${photoClassName}`);
  const testimonies = document.querySelectorAll(`.${testimonyClassName}`);
  var currentIndex = 0;

  const buttonNext = document.getElementById("btn-next");
  const buttonPrev = document.getElementById("btn-prev");

  buttonNext.addEventListener(CLICK, () => moveToItem("next"));
  buttonPrev.addEventListener(CLICK, () => moveToItem("prev"));

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") buttonPrev.click();
    else if (e.key === "ArrowRight") buttonNext.click();
  });

  addSwipeListeners({
    onSwipeRight: () => buttonPrev.click(),
    onSwipeLeft: () => buttonNext.click(),
  });
}

slider({
  photoClassName: "slider__photo",
  testimonyClassName: "slider__testimony",
});
