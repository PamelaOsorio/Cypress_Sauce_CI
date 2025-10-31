describe('carrinho', () =>  {
    beforeEach(()=> {
    //Arrange
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    })

    it('Adicionar produto no carrinho', () => {
    //Act
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    //Assert
    cy.get('[data-test="shopping-cart-badge"]')
    .should('be.visible')
    .and('have.text', '1') 

    cy.get('.shopping_cart_link').click()
    cy.get('.inventory_item_name')
    .should('have.text', 'Sauce Labs Backpack')

    //Screenshot
     cy.screenshot('produto_no_carrinho')  
    })

   it('Remover produto do carrinho', () => {
    //Act
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()

     cy.get('.shopping_cart_badge')
    .should('not.exist')
    //Screenshot
    cy.screenshot('produto_removido')
})

});