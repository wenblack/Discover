//1 Declarar uma variavel chamada weight
let weight

//2 Informar o tipo de variavel
console.log(typeof weight)

//3 Criar as variaveis name, age , stars e isSubscribed
let name = "Wender"
let age = 28
let stars = 4.5
let isSubscribed = true
console.log(`o ${name} tem  ${age} anos tem  ${stars} estrelas e seu status é  ${isSubscribed}`)

//4 criar um objeto student com as propriedades do exercício anterior 
let student = {
    name:"Wender",
    age: 28,
    isSubscribed: true,
    weight :60
}

//5 Imprimir os dados do  objeto
console.log(`o ${student.name} tem  ${student.age} anos  e pesa  ${student.weight} kg.`)

//6 Criar um array e atribuir o  objeto estudante
let students = [
    student,
    
]

//7 imprimir somente a posição 0
console.log(students[0])

//8 Adicionar novo estudante ao Array
const raphael ={
    name:"Raphael",
    age: 27,
    isSubscribed: true,
    weight :67
}
students [1] = raphael

console.log(students)

//9 Qual a resposta do código abaixo
console.log(a)
var a = 1