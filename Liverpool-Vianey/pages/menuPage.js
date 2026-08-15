const { I } = inject();

module.exports = {
  categoriesButton:
    'button[data-testid*="header-menu-mobile-menu-items-submenu-0"]',

  openCategories() {
    I.waitForElement(this.categoriesButton, 15);

    I.scrollTo(this.categoriesButton);

    I.executeScript((selector) => {
      const button = document.querySelector(selector);
      if (button) {
        button.click();
      }
    }, this.categoriesButton);

    I.wait(2);
  },

selectSubcategory(subcategory) {
  if (subcategory === 'Ropa') {
    I.amOnPage('/tienda/ropa/catst4003074');
    I.wait(5);
  }
  if (subcategory === 'Electrónica') {
    I.amOnPage('/tienda/electronica/cat5150041');
    I.wait(8);
  }

}}