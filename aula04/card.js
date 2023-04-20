'use script'

export class card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.title = 'Nome do Produto'
        this.price = "$0"
        this.cor = '#fff'
    }

    static get observedAttributes() {
        return ['cor']
    }

    attributeChangedCallback(nomeAttr, oldValue, newValue) {

    }

    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }

    component() {
        const card = document.createElement('div')
        card.classList.add('card')

        const title = document.createElement('div')
        title.classList.add('card__title')
        title.textContent = `${this.title}`

        const foto = document.createElement('div')
        foto.classList.add('card__image')

        const description = document.createElement('div')
        description.classList.add('card__description')

        const price = document.createElement('div')
        price.classList.add('card__price')
        price.textContent = `${this.price}`

        card.append(title, foto, description, price)

        return card
    }

    styles() {
        const css = document.createElement('style')
        css.textContent = `
        .card {
            height: 200px;    
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
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: ${this.cor};
        }

        .card__title{
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

customElements.define('card-produtos', card)