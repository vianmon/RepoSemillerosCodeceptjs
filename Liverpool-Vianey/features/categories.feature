
Feature: Navegación por categorías en Liverpool

  @LP004
  Scenario: Expandir categoría principal
    Given que estoy en la página principal de Liverpool
    When abro el menú de categorías
    Then debería visualizar las categorías principales
@LP005
Scenario: Acceder a una subcategoría
    Given que estoy en la página principal de Liverpool
    When abro las categorías
    When selecciono la subcategoría "Ropa"
    Then debería acceder a la subcategoría "Ropa"
  @LP006
  Scenario: Validar productos de categoría
    Given que estoy en la página principal de Liverpool
    When navego a la categoría "Electrónica"
    Then debería visualizar productos de la categoría "Electrónica"