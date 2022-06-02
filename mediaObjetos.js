const alunos = [
    {
        nome: 'Amanda',
        media: 9,
        turma: '3A',
    },
    {
        nome: 'Letícia',
        media: 8,
        turma: '2B',
    },
    {
        nome: 'Mariana',
        media: 10,
        turma: "3A",
    },
    {
        nome: "Pedro",
        media: 5,
        turma: "1C"
    }
]

function aprovados(arr, notaCorte){
    const listaDeAprovados = [];
    for(let i = 0; i < arr.length; i++){
        const {nome, media} = arr[i]

        if(media >= notaCorte){
            listaDeAprovados.push(nome)
        }
    }
    return listaDeAprovados;
}

console.log(aprovados(alunos, 6));