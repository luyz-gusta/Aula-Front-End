'use strict'

import { produtos } from "./produtos.js"
import './cards.js'

const criaCard = (produto) => {
    const card = document.createElement('card-luiz')
    card.classList.add('card')

    card.nome = produto.name
    card.preco = produto.price
    card.foto = produto.image
    card.descricao = produto.description

    return card
}

const carregarProdutos = () => {
    const container = document.getElementById('container')
    const cards = produtos.map(criaCard)

    container.replaceChildren(...cards)
}

carregarProdutos()
