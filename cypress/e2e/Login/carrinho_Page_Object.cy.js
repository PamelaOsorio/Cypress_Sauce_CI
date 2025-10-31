import Login from '../../pages/login' 
import Inventory from '../../pages/inventory'
import Cart from '../../pages/cart'
import Header from '../../pages/header'

describe('carrinho', () =>  {
    beforeEach(()=> {
    //Arrange
    Login.visitarPagina()
    Login.preencherCredenciaisValidas()
    })

    it('Adicionar produto no carrinho', () => {

    const qtdItensAdicionados = 1
    //Act
    Inventory.adicionarProdutoNoCarrinho('Sauce Labs Backpack')
    //Assert
    Header.validarAdiçãoDeProdutoNoCarrinho(qtdItensAdicionados)
    Cart.validarPordutoPresenteNoCarrinho('Sauce Labs Backpack')    
})

   it('Remover produto do carrinho', () => {
    //Act
    Inventory.adicionarProdutoNoCarrinho('Sauce Labs Backpack')
    Inventory.removerProdutoDoCarrinho('Sauce Labs Backpack')
    //Assert
    Header.validarRemoçãoDoProdutoNoCarrinho()
})

});