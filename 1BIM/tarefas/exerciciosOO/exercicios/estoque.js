class Estoque {
    constructor() {
        this.produtos = [];
    }

    cadastrar(nome, quantidade){
        const produto = this.produtos.find(produto => produto.nome === nome)

        if (!produto){
            console.log("Produto já cadastrado.")
        }

        this.produtos.push({nome, quantidade})
    }

    entrada(nome, quantidade){
        const produto = this.produtos.find(produto => produto.nome === nome)

        if (!produto){
            console.log("Produto não encontrado.")
        }

        produto.quantidade += quantidade
    }

    saida(nome, quantidade){
        const produto = this.produtos.find(produto => produto.nome === nome)

        if (!produto){
            console.log("Produto não encontrado.")
        }
        if (produto.quantidade - quantidade <= 0){
            console.log("Quantidade insuficiente.")
        }

        produto.quantidade -= quantidade

    }

    exibir(){
        this.produtos.forEach(produto => console.log(`${produto.nome}: ${produto.quantidade} unidades`))
    }
}

const estoque1 = new Estoque()

estoque1.cadastrar("Caneta", 50)
estoque1.cadastrar("Caderno", 5)

estoque1.entrada("Caderno", 3)

estoque1.saida("Caneta", 20)

estoque1.exibir()
