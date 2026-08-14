Feature: Búsqueda de productos en Liverpool

  Scenario: Abrir la página principal de Liverpool
    Given que estoy en la página principal de Liverpool
    Then debería visualizar la página de Liverpool

  @LP001
  Scenario: Buscar un producto existente
    Given que estoy en la página principal de Liverpool
    When busco el producto "impresora"
    Then debería visualizar resultados de búsqueda para "impresora"

  @LP002
  Scenario: Buscar un producto inexistente
    Given que estoy en la página principal de Liverpool
    When busco el producto "xyzproducto123456"
    Then debería visualizar un mensaje de producto no encontrado

  @LP003
  Scenario: Validar resultados de búsqueda
    Given que estoy en la página principal de Liverpool
    When busco el producto "impresora"
    Then debería visualizar productos relacionados con "impresora"