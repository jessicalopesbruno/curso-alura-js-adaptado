( () => {
    const criarTarefa = (evento) => {
     evento.preventDefault()

     const lista = document.querySelector('[data-list]')
     const input = document.querySelector('[data-form-input]')
     const valor = input.value
   

     const tarefa = document.createElement ('li')
     const conteudo = `<p class=content>${valor}</p>`

    
     tarefa.classList.add('task')
     tarefa.innerHTML = conteudo
     tarefa.appendChild(BotaoDeleta())
     tarefa.appendChild(BotaoConclui())
     lista.appendChild(tarefa)
     input.value = " "

}
const NovaTarefa = document.querySelector('[data-form-button]')


NovaTarefa.addEventListener('click', criarTarefa)

const BotaoConclui = () => {
    const botaoConclui = document.createElement('button')

    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'DONE'

    botaoConclui.addEventListener('click', concluirTarefa)

return botaoConclui
}

const concluirTarefa = (evento) =>{
    const botaoConclui = evento.target
    const tarefaCompleta = botaoConclui.parentElement
    
    tarefaCompleta.classList.toggle('done')
}

const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button')
    botaoDeleta.classList.add('delete-button')
    botaoDeleta.innerText = 'DELETE'
    botaoDeleta.addEventListener('click',deletarTarefa)

    return botaoDeleta

}

const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target

    const tarefaCompleta = botaoDeleta.parentElement

    tarefaCompleta.remove()
}

})()