'use strict'

class card extends HTMLElement {
    constructor() {
        super() //Usaer a nossa criação da classe e não na criação do elemento mãe

        const shadow = this.attachShadow({ mode: 'open' })
        //Permite que os itens seja alterado em tempo real e não só nacpntrução dele

        const titulo = document.createElement('div')
        titulo.textContent = "SENAI - Jandira"

        const css = document.createElement('style')
        css.textContent = `
           div{
            display: grid;
            place-items: center;
            width:400px;
            height: 400px;
            font-size: 2rem;
            background-color: green;
            color: white;
           } 
        `
        shadow.append(titulo, css)
    }
}

customElements.define('card-luiz', card)