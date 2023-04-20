'use strict'

class card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({mode:'open'})
        this.nome = 'Nome do Aluno'
        this.turma = 'Turma'
        this.foto = null
        this.cor = '#000000'
    }

    static get observedAttributes() {
        return['nome', 'turma', 'foto', 'cor']
    }

    attributeChangedCallback(nomeAttr, oldValue, newValue) {
        this[nomeAttr] = newValue
    }

    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }

    component() {
        const card = document.createElement('div')
        card.classList.add('card')

        const nomeAluno = document.createElement('div')
        nomeAluno.classList.add('card__text')
        nomeAluno.textContent = this.nome

        const imagem = document.createElement('div')
        imagem.classList.add('card__image')

        const turma = document.createElement('div')
        turma.classList.add('card__text')
        turma.textContent = this.turma

        card.append(nomeAluno, imagem, turma)

        return card
    }

    styles () {
        const css = document.createElement('style')
        css.textContent  = `
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }    

            .card {
                width: 200px;
                height: 300px;
                display: grid;
                grid-template-rows: 20% 60% 20%;
                place-items: center;
                background-color: ${this.cor};
            }

            .card__text {
                font-family: Arial;
                font-size: 2vh;
                color: #ffffff;
            }

            .card__image {
                width: 150px;
                height: 150px;
                border-radius: 50%;
                background-color: #ffffff;
                background-image: url(${this.foto});
                background-size: cover;
            }
        `

        return css
    }

}

customElements.define('card-oswaldo', card)