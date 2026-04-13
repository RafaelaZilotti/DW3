    // @file: src/CONTROLLER/tarefa.controller.js

    import { listar, criar, buscarPorId, atualizar, remover, obterResumo, listarPendentes } from '../models/tarefa.model.js'


    // Processa requisições da rota `GET /tarefas`
    export async function listarTarefas(request, reply) {

      // LOG para indicar que a função foi chamada
      console.log("Controller: listarTarefas chamado")

      const { busca, concluido=false } = request.query

      /* ------------------------------------------------------------------------------
      * Lógica de manipulação dos dados                                               |
      * Chama a função do modelo para obter as tarefas, passando as opções de filtro  |
      * Como a função no modelo é `async`, usamos `await` para aguardar o resultado   |
      * ------------------------------------------------------------------------------*/
      //
      const resultado = await listar({ busca, concluido })
      /* ------------------------------------------------------------------------ */


      
    }

    // Processa requisições da rota `POST /tarefas`
    export async function criarTarefa(request, reply) {
        
      console.log("Controller: criarTarefa chamado")

      const { descricao } = request.body

      const novaTarefa = await criar(descricao)
      return reply.status(201).send(novaTarefa)
    }

    // Processa requisições da rota `GET /tarefas/resumo`
    export async function obterResumo(request, reply) { 

        console.log("Controller: obterResumo chamado")

        const resumo = await obterResumo()

        return reply.send(resumo)

    }

    // Processa requisições da rota `GET /tarefas/pendentes`
    export async function obterPendentes(request, reply) {

        console.log("Controller: obterPendentes chamado")

        const pendentes = await listarPendentes()

        return reply.send(pendentes)
    }



    // Processa requisições da rota `GET /tarefas/:id`
    export async function obterTarefa(request, reply) { 

        console.log("Controller: obterTarefa chamado")

        const id = Number(request.params.id)

        const tarefa = await buscarPorId(id)

        if (!tarefa) {
          return reply.status(404).send({ status: 'error', message: 'Tarefa não encontrada' })
        }

        reply.send(tarefa)

    }

    // Processa requisições da rota `PATCH /tarefas/:id`
    export async function atualizarTarefa(request, reply) { 

        console.log("Controller: atualizarTarefa chamado")

        const id = Number(request.params.id)
        const dadosAtualizados = request.body

        const tarefaAtualizada = await atualizar(id, dadosAtualizados)

        if (!tarefaAtualizada) {
            return reply.status(404).send({ status: "error", message: "Tarefa não encontrada" });
        }

        return reply.send(tarefaAtualizada)

    }

    // Processa requisições da rota `PATCH /tarefas/:id/concluir`
    export async function concluirTarefa(request, reply) {

        console.log("Controller: concluirTarefa chamado")

        const id = Number(request.params.id)
        
        const tarefaAtualizada = await alternarConcluido(id)

        if (!tarefaAtualizada) {
            return reply.status(404).send({ status: "error", message: "Tarefa não encontrada" });
        }
        
        return reply.send(tarefaAtualizada)

    }

    // Processa requisições da rota `DELETE /tarefas/:id`
    export async function removerTarefa(request, reply) { 

        console.log("Controller: removerTarefa chamado")

        const id = Number(request.params.id)

        const resultado = await remover(id)

        if (!resultado) {
            return reply.status(404).send({ status: "error", message: "Tarefa não encontrada" });
        }
        
        return reply.status(204).send()
        
    }