class Timer {
  constructor(nome) {
    this.nome = nome
    this.segundos = 0
  }

  iniciar() {

    setInterval(() => {
        this.segundos++
        console.log(`${this.nome}: ${this.segundos}s`)
    }, 1000)

    //Versao com o erro:

    //setInterval(function() {
    //  this.segundos++
    //  console.log(`${this.nome}: ${this.segundos}s`)
    //}, 1000)
  }
}

const t = new Timer('Cronômetro')
t.iniciar()

//Perguntas:
// 1. Qual é o erro e por que ele acontece?

// O erro é o uso de uma funcao normal dentro de um setInterval,
// ele ocorre porque funções normais definem o valor de this no momento da execução, dependendo de como são chamadas, assim o this nao aponta mais para a instancia da classe.

// 2. Corrija o código usando arrow function.

// 3. O que muda no comportamento do this ao usar uma arrow function?

// Ao utilizar uma arrow function o valor this nao e redefinido no momento da execucao, ele herda o valor do contexto onde foi definido(escopo lexico),
// Nesse caso, a arrow function dentro do método iniciar mantém o this da instância de Timer, garantindo que this.segundos e this.nome continuem
// a se referir aos atributos do objeto Timer, permitindo que o contador funcione corretamente.