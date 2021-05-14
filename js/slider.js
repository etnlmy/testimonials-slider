const ACTIVE_TESTIMONY = "slider__testimony--active";
const CLICK = "click";

function cycle(direction, current, nbOfItems) {
  if (direction === "next") 
    return (current + 1) % nbOfItems
  else 
    return current === 0 ? (nbOfItems - 1) : current - 1;
}

function translateX(items, currentItem) {
  items.forEach(item => {
    item.style.transform = `translateX(${-100*currentItem}%)`;
  });
}

function showTestimony(testimonies, index) {
  testimonies.forEach(testimony => testimony.classList.remove(ACTIVE_TESTIMONY));
  testimonies[index].classList.add(ACTIVE_TESTIMONY);
}

const photos = document.querySelectorAll(".slider__photo");
const testimonies = document.querySelectorAll(".slider__testimony");
var currentIndex = 0;

function next() {
  currentIndex = cycle("next", currentIndex, photos.length);
  translateX(photos, currentIndex);
  showTestimony(testimonies, currentIndex);
};

function prev() {
  currentIndex = cycle("prev", currentIndex, photos.length);
  translateX(photos, currentIndex);
  showTestimony(testimonies, currentIndex);
}

document.getElementById("btn-next").addEventListener(CLICK, next);
document.getElementById("btn-prev").addEventListener(CLICK, prev);