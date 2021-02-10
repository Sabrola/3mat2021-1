let fruits = ['laranja', 'maça', 'banana', 'pera', 'uva', 'mamão']
//exibir
console.log(fruits)

//retirar o ultimo
let lastOne = fruits.pop()
console.log(fruits)
console.log(lastOne)

//retirar o primeirto
let firtOne = fruits.shift()
console.log(fruits)
console.log(firtOne)

//tirar um do meio
//1° num, posição do que sai, 2° quantos são tirados
let third = fruits.splice(2, 1) //começa do zero
console.log(fruits)
console.log(third)

//colocando no final
fruits.push("jabuticaba")
console.log(fruits)

//coloca no começo
fruits.unshift('amora')
console.log(fruits)

//coloca no meio / splice server pra tirar e por / 1- onde 2- quantos etc -inseri mais
fruits.splice(3, 0, 'pessego')
console.log(fruits)

//mais de um
fruits.splice(2, 0, 'caqui','jaca')
console.log(fruits)

//trocando
fruits.splice(5, 1, 'abacate')
console.log(fruits)