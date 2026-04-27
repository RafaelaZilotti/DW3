class Aluno{
    constructor(nome, notas){
        this.nome = nome;
        this.notas = [];
    }

    async adicionarNota(nota){
        this.notas.push(nota) 
    }

    async calcularMedia(){
        if ( this.notas.length === 0 )return 0;

        const soma = this.notas.reduce((total, nota) => total + nota, 0);
        return soma / this.notas.length;

    }

    async situacao(){
        return this.calcularMedia() >= 6 ? "Aprovado" : "Reprovado";
    }

    async exibir(){
        console.log(`${this.nome} | Média: ${this.calcularMedia()} | ${this.situacao()}`)
    }
}

const aluno1 = new Aluno("Ana")

aluno1.adicionarNota(7)
aluno1.adicionarNota(8)
aluno1.adicionarNota(7.5)

aluno1.exibir()
