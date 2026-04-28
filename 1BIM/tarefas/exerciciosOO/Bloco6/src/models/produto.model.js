class ProdutoModel{
    #produtos = [
        {id: 1, nome:"Teclado", preco: 200},
        {id: 2, nome:"Mouse", preco: 80},
        {id: 3, nome:"Monitor", preco: 1200}
    ]

    #proximoId = 4

    findAll(){
        return [...this.#produtos];
    }

    findById(id){
        return this.#produtos.find(produto => produto.id === id);
    }

    create(dados){

        const novoProduto = {
            id: this.#proximoId++,
            nome: dados.nome,
            preco: dados.preco
        }

        this.#produtos.push(novoProduto)
        return novoProduto;
    }

    delete(id){
        const index = this.#produtos.findIndex(produto => produto.id === id)

        if (index === -1) return false;

        this.#produtos.splice(index, 1);
        return true;
    }

    static validar(dados){
        const erros = [];

        if (!dados || !dados.nome || dados.nome.trim() === ''){
            erros.push("O campo 'nome' é obrigatório.")
        }

        if (!dados || dados.preco === undefined || typeof dados.preco !== 'number' || dados.preco <= 0){
            erros.push("O preco deve ser um numero maior que zero.")
        }

        if (erros.length > 0){
            return { valido: false, erros }
        }

        return { valido: true }
    }
}

module.exports = ProdutoModel;