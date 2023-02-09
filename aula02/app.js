"use strict"

const nota1 = document.getElementById("nota1")
const nota2 = document.getElementById("nota2")
const buttonCalcular = document.getElementById("calcular")
const media = document.getElementById("media")
const formulario = document.getElementById("formulario")
const situacao = document.getElementById("situacao")

function somar() {
    media.value = (Number(nota1.value) + Number(nota2.value)) / 2;    
    if (media.value >= 6) {
        formulario.classList.add("aprovado")
        formulario.classList.remove("reprovado")
        media.value = "APROVADO"
    }else {
        formulario.classList.add("reprovado")
        formulario.classList.remove("aprovado")
        media.value = "REPROVADO"
    }
}

buttonCalcular.addEventListener("click", somar)
