class Produto{
    constructor(nome, preco, estoque){
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    async disponivel(){
        if (this.estoque >= 1){
            return true
        } else {
            return false
        }
    }

    async exibir(){

        const status = this.disponivel() ? "Em estoque" : "Fora de estoque";
        console.log(`${this.nome} - ${this.preco} - ${status}`)
    }
}

const produto1 = new Produto("Notebook", 3500, 10);
const produto2 = new Produto("Fone de ouvido", 150, 0);

produto1.exibir();
produto2.exibir();