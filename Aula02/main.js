'use strict'

const adicionar = document.getElementById('adicionar')

// const adicionarCard = function(){
//     alert('Olá mundo')
// }
// const adicionarCard = () =>{
//     const container = document.getElementById('container')
//     container.innerHTML = container.innerHTML + '<div class="item">Senai</div>'
// }
const verificarNome = (nomeVar) => {
    const nome = nomeVar
    const status = true
    

    if(nome == ''){
        alert('Digite algum nome')
        status = false
        return status
    }else if(nome == null){
        alert('Digite algum nome')
        status = false
        return status
    }else if(/[0-9]/.test(nome)){
        alert('Digite nome sem número')
        status = false
        return status
    }else{
        return nome
    }
}

const verificarNota = (notaVar) => {
    const nota = notaVar
    const status = true

    if(nota == 0){
        alert('Digite alguma nota')
        status = false
        return status
    }else if(nota == null){
        alert('Digite alguma nota')
        status = false
        return status
    }else if(isNaN(nota)){
        alert('Digite uma nota válida')
        status = false
        return status
    }else if (nota < 0 || nota > 10){
        alert('Digite uma nota válida, entre 0 e 10')
        status = false
        return status
    }else{
        return nota
    }
}

const handleClick = () => {
    const aluno = {
        nome: verificarNome(prompt('Digite o nome do Aluno: ')),
        nota: verificarNota(prompt('Digite o nota do Aluno: ').replace(',','.'))
    }

    if(aluno.nome != false && aluno.nota != false){
        adicionarCard(aluno)
    }

        
}

const adicionarCard = (aluno) => {
    const container = document.getElementById('container')
    const novaDiv = document.createElement('div')
    if(aluno.nota < 6){
        novaDiv.classList.add('aluno__reprovado')
    }else {
        novaDiv.classList.add('aluno__aprovado')
    }
    novaDiv.innerHTML = `<h2 class = "aluno__nome">${aluno.nome}</h2>
                         <span class = "aluno__nota">${aluno.nota}</span>`
    container.appendChild(novaDiv)
}

adicionar.addEventListener('click', handleClick)

