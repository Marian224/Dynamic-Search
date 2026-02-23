import { filterProducts } from "../logic/filterProducts.js";

export const createSearchHandler = ({
    products,
    containerEl,
    renderProducts,
}) => {
    return (event) => {
        const filteredProducts = filterProducts(products, event.target.value);
        renderProducts(containerEl, filteredProducts);
    };
};