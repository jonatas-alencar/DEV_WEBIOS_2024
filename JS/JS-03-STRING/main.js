var string = "os alunos estão";
var string2 = "reprovados";
var string3 = "ou reprovados";
var olhaai = "os reprovados";
var num1 = 2
var num2 = 4

console.clear()

// * >> soma ou concatenaçao
console.log(string + string2 + string3);
console.log("os alunos estão" + "reprovados" + "ou aprovados?")
//template strings
console.log (`${string + string2 + string3 + (num1 + num2)}`)

console.clear()

var texto1 = "Ios fez uma excursão na TOTVS com três cabritinhos (alunos)"

console.log(texto1.charAt(23));
console.log(texto1[23])

console.clear()

var texto2 = "IOS"
var texto3 = "Está chovendo hamburguer"

console.log(`na variavel texto2 tem ${texto2} caracteres`)
console.log(`na variavel texto3 tem ${texto3} caracteres`)

console.clear()

var texto4 = "Aqui está em minúsculo"
var texto5 = "aqui está em maiúsculo"

console.log(`Minusculo: ${texto5.toUpperCase()}`)
console.log(`Maiusculo: ${texto4.toLowerCase()}`)

console.clear()

var str = "mozilla"

console.log(str)
console.log(str.substring(1, 4))
console.log(str.substring(2))

console.clear()

var texto6 = "Olha a pipoca"
console.log(texto6)
console.log(texto6.replace(`pipoca`, `carreta furacao`))

console.clear()

var texto7 = "Olha a carreta"
console.log(texto7)
console.log(texto7.trim(`Olha a carreta`))