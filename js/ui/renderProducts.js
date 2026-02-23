export const renderProducts = (containerEl, items) => {
    containerEl.innerHTML = "";

    items.forEach((product) => {
        const { title, type, price, img } = product;

        const cardHTML = `
        <div class="product-card">
        <img src="${img}" alt="${title}" class="product-img">
        <div>
          <span style="font-size: 12px; color: #86868b">${type}</span>
          <h3>${title}</h3>
          <p class="price">$${price}</p>
        </div>
        <button class="buy-btn" onclick="alert('Додано ${title} у кошик!')">Buy</button>
      </div>
      `;
        
      containerEl.insertAdjacentHTML("beforeend", cardHTML);
    });
};