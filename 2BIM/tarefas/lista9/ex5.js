async function buscarPedido(id){
    if(id === undefined || id === null){
        throw new Error("ID do pedido é obrigatório");
    }
    
    await new Promise (resolve => setTimeout(resolve, 1000));

    if (id !== 1){
        throw new Error("Pedido não encontrado");
    }

    return{
        id: 1,
        total: 150
    }
}

function executar(){
    try {
        const pedido = await buscarPedido(id);
        console.log("Pedido encontrado:", pedido);
    } catch (erro) {
        console.log("Erro:", erro.message);
    }
}

executar(1); //retorna o pedido
executar(99); //cai no catch
executar(); //cai no catch