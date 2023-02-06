'use strict'

// const calcular = document.getElementById('calcular')

// function somar() {
//     const numero1 = document.getElementById('numero1').value.replace(',', '.')
//     const numero2 = document.getElementById('numero2').value.replace(',', '.')
//     const formulario = document.getElementById('formulario')

//     if (isNaN(numero1) || isNaN(numero2)) {
//         alert('Foi digitado algo que não é um número')
//     } else if (numero1 == '' || numero2 == '') {
//         alert('Não foi digitado nenhum número')
//     } else {
//         const resultado = Number(numero1) + Number(numero2)
//         document.getElementById('resultado').value = resultado
//         formulario.classList.add('sombra-vermelha')
//     }

// }

// calcular.addEventListener('click', somar)

const calcular = document.getElementById('calcular')
calcular.addEventListener('click', somar)

function somar() {
    const nota1 = document.getElementById('nota1').value.replace(',', '.')
    const nota2 = document.getElementById('nota2').value.replace(',', '.')

    if (isNaN(nota1) || isNaN(nota2)) {
        alert('Foi digitado algo que não é um número')
    } else if (nota1 == '' || nota2 == '') {
        alert('Não foi digitado nenhum número')
    } else if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        alert('Uma nota inválida foi digitada')
    } else {
        const resultado = (Number(nota1) + Number(nota2)) / 2
        const situacaoReprovado = 'REPROVADO'
        const situacaoAprovado = 'APROVADO'
        const inputNota1 = document.getElementById('nota1')
        const inputNota2 = document.getElementById('nota2')
        if(nota1 < 6){
            inputNota1.classList.remove('notaAzul')
            inputNota1.classList.add('notaVermelha')
        }else{
            inputNota1.classList.remove('notaVermelha')
            inputNota1.classList.add('notaAzul')
        }if(nota2 < 6){
            inputNota2.classList.remove('notaAzul')
            inputNota2.classList.add('notaVermelha')
        }else{
            inputNota2.classList.remove('notaVermelha')
            inputNota2.classList.add('notaAzul')
        }
        if (resultado < 6) {
            document.getElementById('situacao').value = situacaoReprovado
            formulario.classList.remove('aprovado')
            formulario.classList.add('reprovado')
        } else {
            document.getElementById('situacao').value = situacaoAprovado
            formulario.classList.remove('reprovado')
            formulario.classList.add('aprovado')
        }
    }
}
