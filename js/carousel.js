let slide = document.getElementsByClassName("slide");
let autoplay = document
  .getElementsByClassName("container")[0]
  .getAttribute("data-autoplay");
let l = slide.length;
let interval = 5000;
let set;

window.onload = function () {
  initialize();
  slide[0].style.opacity = "1";
};

function initialize() {
  if (autoplay === "true")
    set = setInterval(function () {
      next();
    }, interval);
}

function change(index) {
  clearInterval(set);
  count = index;
  for (let j = 0; j < l; j++) {
    slide[j].style.opacity = "0";
  }
  slide[count].style.opacity = "1";
}

let count = 0;
function next() {
  clearInterval(set);
  slide[count].style.opacity = "0";
  count++;
  if (count == l) {
    count = 0;
    slide[count].style.opacity = "1";
  } else {
    slide[count].style.opacity = "1";
  }
  initialize();
}

function prev() {
  clearInterval(set);
  slide[count].style.opacity = "0";

  count--;
  if (count == -1) {
    count = l - 1;
    slide[count].style.opacity = "1";
  } else {
    slide[count].style.opacity = "1";
  }
  initialize();
}

document.querySelector(".prev").addEventListener("click", prev);
document.querySelector(".next").addEventListener("click", next);
