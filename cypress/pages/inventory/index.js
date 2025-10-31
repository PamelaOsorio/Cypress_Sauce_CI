import {elements as el} from "./elements"
class Inventory{

    validarAcessoAPagina(){
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
        //Screenshot
        cy.screenshot('login_com_sucesso')

    }
    adicionarProdutoNoCarrinho(itemName){
         cy.get(el.addProduct(itemName)).click();
    }
    
    removerProdutoDoCarrinho(itemName){
        cy.get(el.removeCart(itemName)).click()
    }

}

export default new Inventory()