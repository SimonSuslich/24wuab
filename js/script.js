let menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", showMenu);

let layer = document.querySelector(".fade-menu");
layer.addEventListener("click", showMenu);

let isOpened = false;

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
  navbar.classList.toggle('sticky', window.scrollY > 25);

  if (isOpened) {
    showMenu();
  };
};



const productsForSale = [
  {
    image: "/img/product1.webp",
    name: "Volvo v60",
    priceSEK: '200 000',
    year: 2019,
    miles: 4000,
  },
  {
    image: "/img/product2.webp",
    name: "BMW 3-Series",
    priceSEK: '250 000',
    year: 2019,
    miles: 5400,
  },
  {
    image: "/img/product3.webp",
    name: "Mercedes-Benz",
    priceSEK: '300 000 ',
    year: 2021,
    miles: 1200,
  },
  {
    image: "/img/product4.webp",
    name: "Mercedes",
    priceSEK: '350 000 ',
    year: 2022,
    miles: 3500,
  }
];




let productsHTML = '';
productsForSale.forEach((productForSale) => {
  productsHTML += `
  <a href="" class="product-link">
    <div class="product-box">
      <div class="image-box">
        <img src="${productForSale.image}" alt="Produkt säljes: ${productForSale.name}">
      </div>
      <div class="info-box">
        <p>${productForSale.name}</p>
        <ul>
          <li>${productForSale.year}</li>
          <li>${productForSale.miles} mil</li>
          <li>${productForSale.priceSEK} sek</li>
        </ul>
      </div>
    </div>
  </a>
  `;
});



document.querySelector('.js-products-container').innerHTML = productsHTML;