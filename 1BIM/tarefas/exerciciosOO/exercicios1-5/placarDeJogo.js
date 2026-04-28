class Placar {
    constructor(timeCasa, timeVisitante, golsCasa, golsVisitante) {
        this.timeCasa = timeCasa;
        this.timeVisitante = timeVisitante;
        this.golsCasa = 0;
        this.golsVisitante = 0;
    }

    marcarGol(time) {
        if(time === this.timeCasa){
            this.golsCasa += 1
        } else if (time === this.timeVisitante){
            this.golsVisitante += 1
        } else {
            console.log("Time inválido.")
        }
    }

    exibir(){
        console.log(`${this.timeCasa} ${this.golsCasa} x ${this.golsVisitante} ${this.timeVisitante}`)
    }

    resultado(){
        if (this.golsCasa > this.golsVisitante){
            console.log(`Vitória do ${this.timeCasa}`)
        } else if (this.golsVisitante > this.golsCasa){
            console.log(`Vitória do ${this.timeVisitante}`)
        } else {
            console.log("Empate")
        }
    }
}

const placar1 = new Placar("Flamengo","Vasco")

placar1.marcarGol("Flamengo")
placar1.marcarGol("Flamengo")
placar1.marcarGol("Vasco")

placar1.exibir()
placar1.resultado()