const { I } = inject();

module.exports = {
  seeSubcategory(subcategory) {
    I.waitForText(subcategory, 15);
    I.see(subcategory);
  }
};