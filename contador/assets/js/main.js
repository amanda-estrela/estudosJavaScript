const add = document.getElementById('increment');
const remove = document.getElementById('decrement');
const contador = document.getElementById('contador')

add.addEventListener("click",somaContador);
remove.addEventListener("click",subtraiContador);

function somaContador(){
    contador.innerHTML = parseInt(contador.innerHTML) +1;
}

function subtraiContador() {
    contador.innerHTML = parseInt(contador.innerHTML) -1;
}


