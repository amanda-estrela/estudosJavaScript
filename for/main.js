let itens = ['Interestelar', 'Perdido em Marte', 'Apollo 13', 'Gravidade']

function criaLista(){
    let itensLista = '';
    for(let i = 0; i < itens.length; i++){
        itensLista += `<li> ${itens[i]}</li>`
    }
    return itensLista
}

let lista = document.getElementById('lista');
lista.innerHTML= criaLista();