//class
// objetos tem duas é composta por duas coisas Propriedades = caracteristicas e Metodos = funcionalidades

class Carro{
    constructor(nome, ano){ // Molde de um objeto
        this.nome = nome;
        this.ano = ano;
        this.arreya = [
            this.novo1 = {
                nome: "fixo",
                ano: "teste",
                idade: "vai",
            }
        ]
            
        
    }
    anoCarro(anoAtual){
        return anoAtual - this.ano;
        //anoAtual = 2024
        // this.ano 2012
    }
}

//new = novo
// criar uma nova copia da classe = instance
let carro1 = new Carro ("KWID", 2012);
let carro2 = new Carro ("MOBI", 2015);
let carro3 = new Carro ("HB20", 2020);

console.log(Carro);
console.log(carro1);
console.log(carro2);
console.clear()

let anoAtual = new Date(); // 2024 - 2012 = 12
let recebeAno = anoAtual.getFullYear();
console.log(anoAtual)
console.log(recebeAno)
console.log(carro1.anoCarro(recebeAno)) // ano = 2012 // 2026 - 2012 = 14

// 2026 - 2012 = 14
