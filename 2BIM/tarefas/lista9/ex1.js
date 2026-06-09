function dividir(a, b){
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Os valores devem ser números')
    }

    if (b === 0) {
        throw new Error('Não é possível dividir por zero')
    }

    return a / b
}

try {

    console.log(dividir(10, 2)); // retorna 5
    console.log(dividir(10, 0)); // lanca um erro
    console.log(dividir('10', 2)); // lanca um erro

} catch (error){
    
    console.error('Ocorreu um erro:', error.message);

}