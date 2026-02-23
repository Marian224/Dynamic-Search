import { createSearchHandler } from "../handlers/onSearch.js";
import { renderProducts } from "../ui/renderProducts.js";

export const initApp = (products) => {
    const containerEl = document.querySelector("#productContainer");
    const inputEl = document.querySelector("#searchInput");

    if (!containerEl || !inputEl) {
        return;
    }

    const onSearch = createSearchHandler({
        products,
        containerEl,
        renderProducts,
    });

    inputEl.addEventListener("input", onSearch);
    renderProducts(containerEl, products);
};