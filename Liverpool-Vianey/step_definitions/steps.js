const { I, liverpoolPage, menuPage, categoryPage } = inject();

Given('que estoy en la página principal de Liverpool', () => {
  liverpoolPage.open();
});

Then('debería visualizar la página de Liverpool', () => {
  I.seeInTitle('Liverpool');
});

When('busco el producto {string}', (producto) => {
  liverpoolPage.searchProduct(producto);
});

Then('debería visualizar resultados de búsqueda para {string}', (producto) => {
  liverpoolPage.seeSearchResults(producto);
});

Then('debería visualizar un mensaje de producto no encontrado', () => {
  liverpoolPage.seeNoSearchResults();
});

Then('debería visualizar productos relacionados con {string}', (producto) => {
  liverpoolPage.seeRelatedProducts(producto);
  
});
When('abro el menú de categorías', () => {
  menuPage.openCategories();
});

When('abro las categorías', () => {
  menuPage.openCategories();
});

Then('debería visualizar las categorías principales', () => {
  I.seeElement(menuPage.categoriesButton);
});
When('selecciono la subcategoría {string}', (subcategory) => {
  menuPage.selectSubcategory(subcategory);
});

Then('debería acceder a la subcategoría {string}', (subcategory) => {
  I.see(subcategory);
});

When('navego a la categoría {string}', (category) => {
  menuPage.selectSubcategory(category);
});

Then('debería visualizar productos de la categoría {string}', (category) => {
  categoryPage.seeCategoryProducts(category);
});