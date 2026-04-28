class Livro {
    constructor(titulo, autor){
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = true;
    }

    emprestar(){
        if (this.disponivel === false){
            console.log("Livro indisponível.")
        } else {
            this.disponivel = false;
        }
    }

    devolver(){
        this.disponivel = true;
    }

    exibir(){
        const status = this.disponivel ? "Disponível" : "Indisponível";
        return (`${this.titulo} - ${this.autor} - ${status}`)
    }
}

class Biblioteca {
    constructor(nome){
        this.nome = nome;
        this.acervo = [];
    }

    adicionar(livro){
        this.acervo.push(livro)
    }

    buscar(titulo){
        return this.acervo.find(livro => livro.titulo === titulo)
    }

    emprestar(titulo){
        const livro = this.buscar(titulo)

        if (!livro){
            console.log("Livro não encontrado.")
        } else {
            livro.emprestar()
        }
    }

    devolver(titulo){
        const livro = this.buscar(titulo)

        if (!livro){
            console.log("Livro não encontrado.")
        } else {
            livro.devolver()
        }
    }


    exibirAcervo(){
        this.acervo.forEach(livro => console.log(livro.exibir()))
    }
}

const biblioteca1 = new Biblioteca()

const livro1 = new Livro("O Alquimista", "Paulo Coelho")
const livro2 = new Livro("Dom Casmurro", "Machado de Assis")
const livro3 = new Livro("1984", "George Orwell")

biblioteca1.adicionar(livro1)
biblioteca1.adicionar(livro2)
biblioteca1.adicionar(livro3)

biblioteca1.emprestar("Dom Casmurro")
biblioteca1.emprestar("1984")

biblioteca1.devolver("1984")

biblioteca1.exibirAcervo()