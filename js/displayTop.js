let topProductsHTML = '';
i = 0;
while (i < 6) {
    i++;
    topProductsHTML += `
    <a href="" class="product-link">
      <div class="product-box">
        <div class="image-box">
          <img src="${productsForSale[i].image}" alt="Produkt säljes: ${productsForSale[i].name}">
        </div>
        <div class="info-box">
          <p>${productsForSale[i].name}</p>
          <ul>
            <li>${productsForSale[i].year}</li>
            <li>${productsForSale[i].miles} mil</li>
            <li>${productsForSale[i].priceSEK} sek</li>
          </ul>
        </div>
      </div>
    </a>
    `;
};



document.querySelector('.js-top-products-container').innerHTML = topProductsHTML;