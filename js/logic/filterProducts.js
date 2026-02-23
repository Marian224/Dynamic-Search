export const filterProducts = (products, searchTerm) => {
    const term = searchTerm.toLowerCase().trim();

    if (!term) {
        return products;
    }

    return products.filter(
        (product) =>
            product.title.toLowerCase().includes(term) ||
        product.type.toLowerCase().includes(term), 
    );
};