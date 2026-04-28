class Documento {
    constructor(titulo){
        this.titulo = titulo;
        this.conteudo = "";
        this._historico = [];
    }

    editar(novoConteudo){
        this._historico.push(this.conteudo)
        this.conteudo = novoConteudo
    }

    desfazer(){
        if (this._historico.length === 0){
            console.log("Nada para desfazer.")
        }

        this.conteudo = this._historico.pop()
    }

    exibir(){
        console.log(`[${this.titulo}] Conteúdo atual: ${this.conteudo}`)
    }
}

const doc1 = new Documento("Relatório")

doc1.editar("Primeira versão do relatório.")
doc1.editar("Segunda versão do relatório.")

doc1.desfazer()

doc1.exibir()