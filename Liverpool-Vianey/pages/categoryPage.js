const { I } = inject();

module.exports = {
  seeSubcategory(subcategory) {
    I.waitForText(subcategory, 15);
    I.see(subcategory);
  },

  seeCategoryProducts(category) {
    I.waitForText(category, 15);
    I.see(category);

    I.wait(5);
    I.seeElement('a[href*="/tienda/"]');
  }
};