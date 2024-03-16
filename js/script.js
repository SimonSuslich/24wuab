let menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", showMenu);

let layer = document.querySelector(".fade-menu");
layer.addEventListener("click", showMenu);

let isOpened = false;

let contactIcons = document.querySelectorAll(".icons i"); 
contactIcons.forEach(icon => {
  icon.addEventListener("mouseover", async function (event) {
    icon.classList.toggle("bx-tada");
    await new Promise(resolve => setTimeout(resolve, 1500));
    icon.classList.toggle("bx-tada");
  });
});

function showMenu() {
  isOpened = !isOpened;
  let nav = document.querySelector("menu");
  nav.classList.toggle("show");
  layer.classList.toggle("visible");

  let menuBar = document.querySelector(".bx-menu");
  let xButton = document.querySelector(".bx-x");
  if (menuBar.style.display == "none") {
    menuBar.style.display = "block";
    xButton.style.display = "none";
  } else {
    menuBar.style.display = "none";
    xButton.style.display = "block";
  }

};


window.onscroll = () => {
  let navbar = document.querySelector('nav');
  navbar.classList.toggle('sticky', window.scrollY > 100);

  if (isOpened) {
    showMenu();
  };
};
