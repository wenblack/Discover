//Objeto
const family = {
    name : 'Barbosa',
    income : [2000,30,50,20 ],
	expenses: [8000, 120, 60,25,40],
}
//Usando for of para somar os dados do Array
function sum(array){
    let total = 0

    for (let value of array){
        total += value
    }
    return total        
}

//Função que retorna a mensagem solicitada
function message(){
    const totalincomes = sum(family.income)
    const totalexpenses = sum(family.expenses)
    const balance = totalincomes - totalexpenses 
     
    if(balance <=0){
        result = "Negativo"
        
    }else{
        result = "Positivo"
        
    }

    return ` A Família ${this.name} está com saldo ${result}.
    O Saldo atual é de R$ ${balance}.`

}

//Executando a função
console.log(message())


