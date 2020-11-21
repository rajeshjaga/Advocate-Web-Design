// import { } from './import';

document.addEventListener("DOMContentLoaded", () => {
  //Variables declaration
  const navButton = document.getElementById("nav-button");
  const ul = document.querySelector("ul");
  const navBar = document.querySelectorAll("#nav-bar");
  const accordiano = document.getElementById("accordian");
  const closeAccordiano = document.getElementById("closeaccordian");
  const disabledCards = document.querySelectorAll(".disabled");
  //event listeners
  navButton.addEventListener("click", () => {
    ul.classList.toggle("show");
    navBar.forEach((bar) => {
      bar.classList.toggle("show");
    });
  });
  //accordian
  accordiano.addEventListener("click", () => {
    disabledCards.forEach((card) => {
      if (card.classList.contains("disabled")) {
        card.style.display = "block";
        accordiano.style.display = "none";
        closeAccordiano.style.display = "block";
      }
    });
  });
  closeAccordiano.addEventListener("click", () => {
    disabledCards.forEach((card) => {
      if (card.classList.contains("disabled")) {
        card.style.display = "none";
        accordiano.style.display = "block";
        closeAccordiano.style.display = "none";
      }
    });
  });

  const images = document.querySelectorAll(".slides img");
  const imageContainer = document.querySelector(".slides");
  var i = 0;
  function start() {
    i++;
    console.log(i);
    if (i > images.length - 1) {
      i = 0;
    }

    imageContainer.style.transform = `translateX(${-i * 100}%)`;
  }
  setInterval(start, 2000);
});
