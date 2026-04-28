class Carrinho {
    constructor(itens) {
        this.itens = [];
    }

    adicionar(nome, preco, quantidade){
        this.itens.push({ nome, preco, quantidade })
    }

    remover(nome){
        const index = this.itens.findIndex(item => item.nome === nome)

        if (index !== -1){
            this.itens.splice(index, 1)
        }

    }

    total(){
        return this.itens.reduce((total, item) => total + item.preco * item.quantidade, 0)
    }

    exibir(){
        this.itens.forEach(item => console.log(` ${item.quantidade}x ${item.nome} - R$ ${item.preco.toFixed(2)}`))
        console.log(`Total: R$ ${this.total().toFixed(2)}`)
    }
}

const Carrinho1 = new Carrinho()

Carrinho1.adicionar("Arroz", 10, 2)
Carrinho1.adicionar("Sabao", 5.50, 1)
Carrinho1.adicionar("Feijao", 8, 3)

Carrinho1.remover("Feijao")

Carrinho1.exibir()