'use strict'

class card extends HTMLElement {
    constructor() {
        super() //Usaer a nossa criação da classe e não na criação do elemento mãe

        //Permite que os itens seja alterado em tempo real e não só nacpntrução dele
        this.shadow = this.attachShadow({ mode: 'open' })

        this.nome = 'Nome do Aluno'
        this.foto = null
        this.cor =  '#001B26'
        this.turma = 'DS2T'
    }

    static get observedAttributes(){
        return ['nome', 'foto', 'cor', 'turma']
    }

    attributeChangedCallback(nameAtrr, oldValue, newValue){
        this[nameAtrr] = newValue
    }

    connectedCallback() {
        this.shadow.appendChild(this.componet())
        this.shadow.appendChild(this.styles())
    }

    componet() {
        const card = document.createElement('div')
        card.classList.add('card')

        const nomeAluno = document.createElement('div')
        nomeAluno.classList.add('card__text')
        nomeAluno.textContent = this.nome

        const fotoAluno = document.createElement('div')
        fotoAluno.classList.add('card__image')

        const turma = document.createElement('div')
        turma.classList.add('card__text')
        turma.textContent = this.turma.toUpperCase()

        card.append(nomeAluno, fotoAluno, turma)
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
            display: grid;
            grid-template-rows: 20% 60% 20%;
            place-items: center;
            width: 200px;
            height: 300px;      
            background-color: ${this.cor};  
            box-shadow: 8px 8px 12px rgba(0, 0, 0, 0.25);
            border: 2px solid rgba(0, 0, 0, 0.25);
            transition: all 0.7s;
        }
        .card:hover{
            width: 235px;
            height: 335px;
        }
        .card__text{
            font-size: 1.5rem;
            font-weight: 700;
            color: #fff;
        }
        .card__image{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            border: 5px solid red;
            background-image: url(${this.foto});
            background-size: cover;
            transition: all 0.5s;
        }
        .card__image:hover{
            width: 115px;
            height: 115px;
        }
        `
        return css
    }
}

customElements.define('card-luiz', card)