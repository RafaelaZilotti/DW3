class ContaBancaria {
    constructor(titular, saldoInicial){
        this.titular = titular;
        this.saldo = saldoInicial;

    }

    async depositar(valor){
        this.saldo += valor
    }

    async sacar(valor){
        if (valor > this.saldo){
            console.log("Saldo insuficiente.")
        } else {
            this.saldo -= valor
        }
    }

    async exibirSaldo(){
        console.log(`Titular: ${this.titular} | Saldo: R$ ${this.saldo}`)
    }

}

const conta1 = new ContaBancaria("Ana",150)
const conta2 = new ContaBancaria("Carlos", 80)

conta1.depositar(50);
conta1.sacar(30);
conta1.exibirSaldo();

conta2.depositar(50);
conta2.sacar(30);
conta2.exibirSaldo();

conta1.exibirSaldo();