const boxes = document.querySelectorAll(".content");

window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
  const triggerBottom = window.innerHeight;

  boxes.forEach((box) => {
    const boxBottom = box.getBoundingClientRect().bottom;

    if (boxBottom < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
