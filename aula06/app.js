'use strict'

const getEstados = (event) => {
    const estado = event.target.id.replace('BR-', '')
}

const preencherDados = async () => {
    
}

const mapa = document.querySelector('svg')
mapa.addEventListener('click', getEstados)



