//objetos 
let pessoa = {
    corDosolhos: "verde", 
    altura: 1.70, 
    corCabelo: "Preto", 
    nome: "Caio", 
    sobrenome: "Maciel",
    hobbie: ["futebol", "LOL", "tocar guitarra"],

    endereço : {
    rua: "Jao madeiro",
    numero: 234,
    cidade: "Sao Paulo",
    estado: "SP",
    }
}   
console.log(pessoa)
console.log(pessoa.nome) //retornar apenas uma propriedade
console.log(pessoa.hobbie)  
console.log(pessoa.hobbie[1])// retorna apenas um hobbie
//retorna todo o endereço
console.log(pessoa.endereço)//retorna todo o endereço
//retornar apenas uma informaçaa dentro de endereço
console.log(pessoa.endereço.estado)//retorna apenas uma informaçao dentro de endereço
console.clear()
 let tarefa = [
    {
        id: 1,
        isPronta: true,
        nomeTarefa: "Pular"
    },
 
    
         {
                id: 2,
                isPronta: false,
                nomeTarefa: "Lavar"

    },

{
        id: 3,
        isPronta: true,
        nomeTarefa: "Limpar o banheiro"
    },
]
console.log(tarefa)
console.log(tarefa[1]) // retorna um objeto
console.log(tarefa[1].nomeTarefa)   
console.clear()
let recebeJSON = JSON.stringify(pessoa);
console.log(recebeJSON)

var JSONITO = `{"corDosolhos" "verde", 
"altura: 1.70", 
"corCabelo: Preto", 
"nome: Caio", 
"sobrenome: Maciel",
"hobbie: "futebol", "LOL", "tocar guitarra"],

endereço : 
rua: "Jao madeiro",
numero: 234,
cidade: "Sao Paulo",
estado: "SP",
}`

console.log(JSONITO)
console.log(JSON.parse(JSONITO)) // transforma JSON em objeto
