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


