const { I } = inject();

module.exports = {
  searchInput: 'input[placeholder="Buscar por producto, categoría y más..."]',

  open() {
    I.amOnPage('/');
  },

  searchProduct(producto) {
    I.waitForElement(this.searchInput, 15);

    I.click(this.searchInput);
    I.fillField(this.searchInput, producto);

    I.wait(2);

    I.amOnPage('/tienda?s=' + encodeURIComponent(producto));

    I.wait(8);
  },

  seeSearchResults(producto) {
    I.see(producto);
    I.saveScreenshot('liverpool-resultados');
  },

  seeNoSearchResults() {
    I.wait(5);

    I.see('no encontramos nada');

    I.saveScreenshot('liverpool-sin-resultados');
  },

  seeRelatedProducts(producto) {
    I.wait(5);

    I.saveScreenshot('liverpool-productos-relacionados');

    I.see(producto);
  }
};