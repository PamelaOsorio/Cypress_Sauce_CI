import { elements as el } from "./elements"

class Cart {
    validarPordutoPresenteNoCarrinho(name){
        cy.get(el.productCart).click()
        cy.get(el.productName)
        .should('have.text', name)
        cy.screenshot('produto_no_carrinho')  
    
    }
}

export default new Cart()