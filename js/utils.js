function cycle(direction, current, nbOfItems) {
  if (direction === "next") return (current + 1) % nbOfItems;
  else return current === 0 ? nbOfItems - 1 : current - 1;
}

function translateToLeft(items, factor) {
  items.forEach((item) => {
    item.style.transform = `translateX(${-100 * factor}%)`;
  });
}
