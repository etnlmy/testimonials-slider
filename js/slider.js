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

  document
    .getElementById("btn-next")
    .addEventListener(CLICK, () => moveToItem("next"));
  document
    .getElementById("btn-prev")
    .addEventListener(CLICK, () => moveToItem("prev"));
}

slider({
  photoClassName: "slider__photo",
  testimonyClassName: "slider__testimony",
});
