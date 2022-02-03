function Person(name, walk) {
	this.name = name
    this.walk = walk
    this.run = function(){
        return this.name + " está Correndo"
    }
}
//Criando novas instancias
const mayk = new Person("Mayk",true)
const joao = new Person("João", false)

//Testes
console.log(mayk)
console.log(joao)

//Utilizando atributos da Funcão Construtora
console.log(mayk.run())
console.log(joao.run())