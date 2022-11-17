"use strict";
console.log("go");
const section_1 = document.querySelector("#section-1");
// //Sticky Navigation
// const obsOption = {
//   //when section-1 in viewport( becoz root is null )
//   //come 10% or remain 10% callback will be called(because threshold is 0.1)
//   root: null,
//   threshold: 0.1,
// };

// //entries is array //observer is our observer object
// const obsCallback = function (entries, observer) {
//   entries.forEach((value) => console.log(value));
// };

// //observer need callback and object as a arg
// const observer = new IntersectionObserver(obsCallback, obsOption);

// //observer is observing section-1
// observer.observe(section_1);

//////////////////////////sticky nav
const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;
const stickyNav = function (entries, headerObserver) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
});

headerObserver.observe(section_1);

/////////////////////////smooth scrolling

const buttons = [...document.querySelectorAll(".btn")];

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const href = btn.getAttribute("href");
    document.querySelector(href).scrollIntoView({
      behavior: "smooth",
    });

    navbar.classList.add("nav-close");
    navbar.classList.remove("nav-open");
  });
});

//////////////////////////////////
const menu_option = document.querySelector(".menu-option");
const navbar = document.querySelector(".navbar");

menu_option.addEventListener("click", (e) => {
  navbar.classList.add("nav-open");
  navbar.classList.remove("nav-close");
});

console.log(navbar.name);
