let familia = ['Amanda', 'Max', 'Camilla', 'Thiago']
/*
console.log(familia.join(", "))

familia.pop()
familia.pop()
console.log(familia)


familia.unshift('Amor')

console.log(familia)
*/



familia.push('Amor')
/*
let excluidos = familia.splice(2, 2, "Felicidade")
console.log(familia)
console.log(excluidos)
*/

let excluidos = familia.slice(2,4)
console.log(excluidos)
console.log(familia)

/*
familia.forEach(function(ser) {
    console.log(ser + ' é parte da família')})
*/


let caixaAlta = familia.map(function(ser){
    return ser.toUpperCase()
})

console.log(caixaAlta)

