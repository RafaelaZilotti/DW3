class FilaAtendimento {
    constructor() {
        this._fila = [];
        this.contador = 1;
    }

    entrada(nome){

        const senhaAtual = this.contador;
        this._fila.push({ senha: senhaAtual, nome })

        console.log(`Senha ${senhaAtual} gerada para ${nome}`)

        this.contador++

    }

    chamarProximo(){
        if (this._fila.length === 0){
            console.log("Fila vazia.")
        }

        const proximo = this._fila.shift()
        console.log(`Chamando senha ${proximo.senha} - ${proximo.nome}`)

        return proximo

    }

    tamanho(){
        console.log(`Pessoas na fila: ${this._fila.length}`)
    }
}

const fila1 = new FilaAtendimento()

fila1.entrada("Ana")
fila1.entrada("Bruno")
fila1.entrada("Carla")

fila1.chamarProximo()
fila1.chamarProximo()

fila1.tamanho()
