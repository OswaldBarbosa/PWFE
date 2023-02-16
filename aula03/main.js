'use script'

const buttonAdicionar = document.getElementById('adicionar')

// const buttonAdicionarCard = () => {
//     const divContainer = document.getElementById('container')
//     divContainer.innerHTML = divContainer.innerHTML + '<div class ="item"></div>' 
// }

const adicionarCard = (nome, nota) => {
    const container = document.getElementById('container')
    const novaDiv = document.createElement('div')

    if (nome == "" || nome == null || nota == "" || nota == null){
        alert('Você deixou algum capom vazio')
    } else if (nota < 0){
        alert('as notas tem que estar no escopo de 0 a 10')
    }else if ( nota > 10){
        alert('as notas tem que estar no escopo de 0 a 10')
    }else if(nota >= 6){
        novaDiv.classList.add('aprovado')
        novaDiv.innerHTML = `<h2 class = "aluno__nome">${nome}</h2>
                             <span class = "aluno__nota">${nota}</span>`
        container.appendChild(novaDiv) 
    }else if (nota <= 5){
        novaDiv.classList.add('reprovado')
        novaDiv.innerHTML = `<h2 class = "aluno__nome">${nome}</h2>
                             <span class = "aluno__nota">${nota}</span`          
        container.appendChild(novaDiv)
    } else if (isNaN(nota)) {
        alert('Não é possível digitar uma letra na nota')
        
    }
    
}

const handleCLick = () => {
    const nome = prompt ('Digite o nome do aluno:')
    const nota = prompt ('Digite a nota do aluno:')
    adicionarCard (nome, nota)
}
buttonAdicionar.addEventListener('click', handleCLick)