import { elements as el } from "./elements"
class Header {
validarAdiçãoDeProdutoNoCarrinho(quantidade){
         cy.get(el.shoppingCart)
        .should('be.visible')
        .and('have.text', quantidade.toString()) 

}
validarRemoçãoDoProdutoNoCarrinho(){
        cy.get(el.productExist)
        .should('not.exist')

        cy.screenshot('produto_removido')
    }
}
export default new Header()