export const elements = {
    addProduct: (itemName) => `[data-test="add-to-cart-${transform(itemName)}`,
    removeCart:(itemName) => `[data-test="remove-${transform(itemName)}`,
}

function transform(texto) {
  return texto.replaceAll(' ', '-').toLowerCase();
}
