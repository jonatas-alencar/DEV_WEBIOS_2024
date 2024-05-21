//array
var numeros = [-2, 40, 16, 111, 33, 64]

console.log(numeros)
console.log(numeros[3])

// // var aleatorios = [true, "Texto", 345, "texto", false]
// console.log(aleatorios)

var pessoas = ["Ana", "Katia", "Davi", "Jesus", "Deus", "Alice", "Laura", "Esther"]

console.log(pessoas)
console.log(pessoas [3], pessoas [7])
console.clear()

var bidi = [
    ['Banana', 'Maçã', 'Pêra'], // linha 0
    ['Laranja', true, 1], //linha 1
    //0, 1, 2, 3
    [null, 'Uva', -350],//linha 2
]
// para acessar info utilizando array bidi passamos no colchetes o indice da linha e depois coluna
console.log(bidi)
console.log(bidi[1][1])
console.log(bidi[2][2])
console.clear()

//Array Bidi >> Crie um array bidimencional que contenha itens de mercado, o array deve ser feito com 4 linhas e em cada linha deve ter 4 produtos
//produtos: Pipoca, Arroz, Feijão, Batata, Molho de Tomate, Alface, Leite em pó, detergente, leite de coco, candida, maça, vinagre, bolacha, azeite, limão, shampoo

var numeros = [
    ["Pipoca", "Arroz", "Feijão", "Batata"],
    ["molho de tomate", "Alface", "Leite em pó", "detergente"],
    ["leite de coco", "candida", "maça", "vinagre"],
    ["bolacha", "azeite", "limão", "shampoo"],
]   
console.log(`${numeros[3][2]} \n ${numeros[1][3]}`)
console.clear()

let moeda = ["Real", "Euro", "Coroa", "Dolar"]
console.log(moeda)
moeda[3] = "Yen"
console.log(moeda)  
console.clear() 

 let numArray = [2, 4, 6, 8, 10];
 console.log(numArray)
 var mudanca = numArray.toString();
 console.log(mudanca)
 console.clear()   

 var teste1 = [5, 10, 15, 20, 25, 30]
 console.log(teste1)
 var mudanca2 = teste1.join(" ** ")
 console.log(mudanca2)
 console.log("Com o toString")
 //transforma array em string e muda o separador dos valores
 console.clear()

 let array = [0, 2, 3, 5, 7]
 console.log(array.length)
 console.clear()
 let utilizaPop = ["Pollyana", "Andre", "Felippe", "Lucas Nathan", "Esther", "Ludemila"]
console.log(utilizaPop)
 var mudanca4 = utilizaPop.pop()
 console.log(mudanca4)
 console.log(utilizaPop)

var mudanca5 = utilizaPop.push("Saraiva")//insere no final do array
console.log(mudanca5) 
console.log(utilizaPop)
console.clear()

var nomesCarros = ["Audi", "Celta", "Uno com escada", "HB20"]
console.log(nomesCarros)
var mudanca6 = nomesCarros.shift()
console.log(mudanca6)
console.log(nomesCarros)
console.clear()

var insereNoInicio = [true, 34, "mano", "Socorro", "JS"]
console.log(insereNoInicio)
var mudanca7 = insereNoInicio.unshift("Nice")
console.log(mudanca7)
console.log(insereNoInicio)
console.clear()

delete insereNoInicio[2]
console.log(insereNoInicio)