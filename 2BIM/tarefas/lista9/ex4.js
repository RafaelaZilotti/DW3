const usuarios = [
  { id: 1, nome: 'Ana' },
  { id: 2, nome: 'Bruno' },
  { id: 3, nome: 'Carla' }
];

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = "NotFoundError";
    }
}

function buscarUsuarioPorId(id){

    const usuario = usuarios.find(usuario => usuario.id === id);

    if (typeof id !== 'number'){
        throw new ValidationError('O ID deve ser um número');
    }

    if (!usuario) {
        throw new NotFoundError('Usuário não encontrado');
    }

    return usuario;
}

const ids = [1, '1', 99];

for (const id of ids) {
    try {
        const usuario = buscarUsuarioPorId(id);
        console.log("Usuário encontrado:", usuario);
    } catch (erro) {
        if (erro instanceof ValidationError) {
            console.log(`Erro de validação: ${erro.message}`);
        } else if (erro instanceof NotFoundError) {
            console.log(`Erro de não encontrado: ${erro.message}`);
        } else {
            console.log("Erro inesperado");
        }
    }
}