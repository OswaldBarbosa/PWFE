'use strict'

export const pesquisarCep = async (cepPesquisa) => {
    const url = `https://api.postmon.com.br/v1/cep/${pesquisarCep}`
    const response = await fetch(url)
    const data = await response.json()

    return {
        logradouro: data.logradouro,
        bairro: data.bairro,
        municipio: data.localidade,
        estado: data.uf
    }
}