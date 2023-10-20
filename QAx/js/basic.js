// Conteudo apenas para estudo




console.log('Olá, javascript')

// var nome = 'Mestre Yoda'
// var idade = 100
// var jedi = true

// // console.log(nome)
// // console.log(idade)
// // console.log(jedi)

// var username = "Fernando"
// document.getElementById('user-name').innerHTML = username


// //operadores matemáticos//

// var n1 = 5
// var n2 = 2.5
// var total = n1 +  n2
// console.log(total)



// Operadores de comparação//
// var v1 = 5 
// var v2 = '5'

// var resultado = v1 !== v2
// console.log(resultado)



// //Igual (==)
// Retorna verdadeiro se os valores comparados forem iguais.

// 1=='1' //true

// Não igual (!=)
// Retorna verdadeiro se os valores comparados não forem iguais. Esse operador também pode ser chamado de diferente de.

// 4!=1 //true

// Igual estrito (===)
// Esse operador é mais severo, só retorna verdadeiro se o valor e o tipo comparados forem iguais.

// 3==='3' //false
// 3===3 //true

// Não igual estrito (!==)
// Não se engane, esse operador vai retornar verdadeiro se os valores e ou os tipos forem diferentes

// 3!=='3' //true
// 3!==3 //false
// 3!==4 //true

// Maior que (>)
// Compara se o operador da esquerda é maior que o da direita. Caso seja retorna verdadeiro

// 1>2 //false
// 5>3 //true
// 4>'1' //true

// Maior ou igual que (>=)
// Compara se o operador da esquerda é maior ou igual ao da direita. Caso seja retorna verdadeiro

// 1>=2 //false
// 5>=3 //true
// 4>='1' //true
// 2>=2 // true

// Menor que (<)
// Compara se o operador da esquerda é menor que o da direita. Caso seja retorna verdadeiro

// 1<2 //true
// 5<3 //false
// 4<'1' //false    

// Menor ou igual que (<=)
// Compara se o operador da esquerda é menor ou igual ao da direita. Caso seja retorna verdadeiro

// 1<=2 //true
// 5<=3 //false
// 4<='1' //false
// 2<=2 // true

//--------------------

// function soma(n1, n2){
//   console.log(n1, n2)
// }

// function boasVindas(nome){
//     alert(nome + ',Seja bem vindo(a)')
// }

// boasVindas('Fernando')

// function soma (n1, n2){
//     return n1 + n2
// }

// var resultado= soma(5,5)
// console.log(resultado)

//controle de fluxos//


// var saldo = 1000

// function saque(valor) {

//     if (valor > saldo) {
//         console.log('Valor do saque superior so saldo')
//     } else if (valor > 700) {
//         console.log('valor do saque é superior ao maximo permitido')
//     } else {
//         saldo = saldo - valor
//     }


// }

// saque(500)
// console.log(saldo)


// var gaveteiro = ['Meias', 'Gravatas', 'Documentos', 'Salgadinhos']

// console.log(gaveteiro[0])

// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia']
// personagens.push('C3PO')
// personagens.push('R2D2')

// personagens = personagens.filter(function(p){
//     return p !== 'Princesa Leia'
// })

// personagens = personagens.filter(function(p){
//     return p === 'Mestre Yoda'
// })


// console.log(personagens)


//var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia']

// // personagens.forEach(function(p){
// //     console.log(p)
// // })

// for (var i in personagens){
//     console.log(i)
// }

// for(var i = 0; i <= 10; i++){
//     console.log(i)
// }


// var yoda = {}

// yoda.nome = "Mestre Yoda"
// yoda.idade = 100
// yoda.jedy = true
// yoda.outroCampo = "alguma coisa"

// console.log(yoda)

// var yoda = {
//     nome: 'Mestre Yoda',
//     idade: 100,
//     jedi: true,
//     mostraIdade: function() {
//         console.log(`À idade do ${this.nome} é ${this.idade} anos`)
//     }
// }

// console.log(yoda)
// yoda.mostraIdade()