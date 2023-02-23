'use script'

import {produtos} from "./produtos.js"

const criarCard = (produto) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const foto = document.createElement('img')
    foto.classList.add('card__image')
    foto.src = `./img/${produto.image}`

    const title = document.createElement('h5')
    title.classList.add('card__title')
    title.textContent = produto.name

    const description = document.createElement('p')
    description.classList.add('card__description')
    description.textContent = produto.description

    const price = document.createElement('p')
    price.classList.add('card__price')
    price.textContent = produto.price

    card.append(foto, title, description, price)

    return card
}

const carregarProdutos = () => {
    const container = document.getElementById('container')
    const cards = produtos.map(criarCard)

    container.replaceChildren(...cards)
}

carregarProdutos()