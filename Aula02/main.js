'use strict'

const adicionar = document.getElementById('adicionar')

// const adicionarCard = function(){
//     alert('Olá mundo')
// }
// const adicionarCard = () =>{
//     const container = document.getElementById('container')
//     container.innerHTML = container.innerHTML + '<div class="item">Senai</div>'
// }

const handleClick = () => {
    const nome = prompt('Digite o nome do Aluno: ')

    if(nome == ''){
        alert('Digite algum nome')
    }else if(nome == null){
        alert('Digite algum nome')
    }else if(/[0-9]/.test(nome)){
        alert('Digite nome sem número')
    }else{
        const nota = prompt('Digite a nota do Aluno: ').replace(',','.')
        if(nota == 0){
            alert('Digite alguma nota')
        }else if(nota == null){
            alert('Digite alguma nota')
        }else if(isNaN(nota)){
            alert('Digite uma nota válida')
        }else if (nota < 0 || nota > 10){
            alert('Digite uma nota válida, entre 0 e 10')
        }else{
            adicionarCard(nome, nota)
        }
    }
}
const adicionarCard = (nome, nota) => {
    const nomeVar = nome
    const notaVar = nota
    const container = document.getElementById('container')
    const novaDiv = document.createElement('div')
    if(notaVar < 6){
        novaDiv.classList.add('aluno__reprovado')
    }else {
        novaDiv.classList.add('aluno__aprovado')
    }
    novaDiv.innerHTML = `<h2 class = "aluno__nome">${nomeVar}</h2>
                         <span class = "aluno__nota">${notaVar}</span>`
    container.appendChild(novaDiv)
}

adicionar.addEventListener('click', handleClick)

