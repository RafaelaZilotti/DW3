function criarProduto(dados){
    if (!dados.nome){
        throw new Error("O nome do produto é obrigatório");
    }

    if (typeof dados.preco !== 'number' || dados.preco <= 0) {
        throw new Error("O preço do produto deve ser um número maior que zero");
    }

    if (typeof dados.estoque !== 'number' || !Number.isInteger(dados.estoque) || dados.estoque < 0){
        throw new Error("O estoque do produto deve ser um número inteiro maior ou igual a zero");
    }

    return {
        nome: dados.nome,
        preco: dados.preco,
        estoque: dados.estoque
    }
}

const produtos = [
    { nome: "Laptop", preco: 3900, estoque: 29 },
    { preco: 10, estoque: 5 },
    { nome: "Mouse", preco: -70, estoque: 17 },
    { nome: "Teclado", preco: 540, estoque: 1.5 }
];

for (const produto of produtos) {
    try {
        const resultado = criarProduto(produto);
        console.log("Produto criado:", resultado);
    } catch (erro) {
        console.log("Erro:", erro.message);
    }
}
