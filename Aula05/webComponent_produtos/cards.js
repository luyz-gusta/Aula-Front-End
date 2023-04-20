'use strict'

class card extends HTMLElement {
    constructor() {
        super() //Usaer a nossa criação da classe e não na criação do elemento mãe

        //Permite que os itens seja alterado em tempo real e não só nacpntrução dele
        this.shadow = this.attachShadow({ mode: 'open' })

        this.nome = 'Nome Produto'
        this.foto = null
        this.descricao = ''
        this.preco = '0,0'
    }

    static get observedAttributes() {
        return ['nome', 'foto', 'descricao', 'preco']
    }

    attributeChangedCallback(nameAtrr, oldValue, newValue) {
        this[nameAtrr] = newValue
    }

    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }

    component() {
        const card = document.createElement('div')
        card.classList.add('card')

        const foto = document.createElement('img')
        foto.classList.add('card__image')
        foto.src = `./img/${this.foto}`

        const titulo = document.createElement('h5')
        titulo.classList.add('card__title')
        titulo.textContent = this.nome

        const descricao = document.createElement('p')
        descricao.classList.add('card__description')
        descricao.textContent = this.descricao

        const preco = document.createElement('span')
        preco.classList.add('card__price')
        preco.textContent = 'R$ ' + this.preco

        card.append(foto, titulo, descricao, preco)

        return card
    }

    styles() {
        const css = document.createElement('style')
        css.textContent = `
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: 'Mulish', sans-serif;
        }

        .card{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            gap: 12px;
            border: 1px solid #ddd;
            border-radius: 5px;
            box-shadow: 0px 0px 8px #0006;
            padding: 16px;
            cursor: pointer;
            background-color: white;
        }
        
        .card:hover{
            box-shadow: 0px 0px 8px #00F6;
        }
        
        .card__image{
            width: 200px;
            height: 200px;
            object-fit: contain;
        }
        
        .card__title{
            font-size: 1.5rem;
        }
        .card__description{
            font-size: 1rem;
        }
        .card__price{
            width: 100%;
            font-size: 1.5rem;
            font-weight: 900;
        }
        `
        return css
    }
}

customElements.define('card-luiz', card)