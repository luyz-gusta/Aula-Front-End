'use strict'

import { pesquisarCepViaCep } from "./viacep.js"

import { pesquisarCepPostmon } from "./postmon.js"

import { pesquisarCepBrasilAPI } from "./brasilApi.js"

const preencherFormularioViaCep = async () => {
    const cepDigitado = document.getElementById('cep').value
    const cep = await pesquisarCepViaCep(cepDigitado)
    document.getElementById('endereco').value = cep.logradouro
    document.getElementById('bairro').value = cep.bairro
    document.getElementById('cidade').value = cep.municipio
    document.getElementById('estado').value = cep.estado
}

const preencherFormularioPostmon = async () => {
    const cepDigitado = document.getElementById('cep').value
    const cep = await pesquisarCepPostmon(cepDigitado)
    document.getElementById('endereco').value = cep.logradouro
    document.getElementById('bairro').value = cep.bairro
    document.getElementById('cidade').value = cep.municipio
    document.getElementById('estado').value = cep.estado
}

// const preencherFormularioBrasilAPI = async () => {
//     const cepDigitado = document.getElementById('cep').value
//     const cep = await pesquisarCepBrasilAPI(cepDigitado)
//     document.getElementById('endereco').value = cep.logradouro
//     document.getElementById('bairro').value = cep.bairro
//     document.getElementById('cidade').value = cep.municipio
//     document.getElementById('estado').value = cep.estado
// }
// const preencherFormularioBrasilAPI = async () => {
//     const cepDigitado = document.getElementById('cep').value
//     const cep = await pesquisarCepBrasilAPI(cepDigitado)

//     if (isNaN(cepDigitado) || /![0-9]/.test(cepDigitado)) {
//         alert('ERROR')
//     } else {
//         document.getElementById('endereco').value = cep.logradouro
//         document.getElementById('bairro').value = cep.bairro
//         document.getElementById('cidade').value = cep.municipio
//         document.getElementById('estado').value = cep.estado
//     }
// }

// function limpa_formulário_cep() {
//     //Limpa valores do formulário de cep.
//     document.getElementById('endereco').value = ("");
//     document.getElementById('bairro').value = ("");
//     document.getElementById('cidade').value = ("");
//     document.getElementById('estado').value = ("");
// }

// document.getElementById('cep')
//     .addEventListener('blur', preencherFormularioViaCep)

// document.getElementById('cep')
//     .addEventListener('blur', preencherFormularioPostmon)

document.getElementById('cep')
    .addEventListener('blur', preencherFormularioBrasilAPI)
