let primeiroTitulo = document.getElementById('primeiroTitulo');

primeiroTitulo.style.color = 'red'
primeiroTitulo.innerText = 'alanzoca';

// getElementsByClassName
let pegaClasse = document.getElementsByClassName
('getClass');

let (1 = 0; i < pegaClasse.length; i++){
    pegaClasse[i].style.color = 'blue';
}
pegaClasse.style.houver = 'blue';

console.log(pegaClasse);
console.clear()

//getElementsbyname
let byname = document.getElementsByName('filho');

console.log(byname);

byname.forEach(funcao)

//[90, 60, 50]
// primeiro parametro é referente aos valores do metodoArray
// segundo parametro referente ao indice
function funcao (cont, indice){
return byname[indice].style.color = "pink"
}
console.clear()
//getElementsByTagName
let bytagName = document.getElementsByTagName("p");

for(c = 0; c <bytagName.length; c++){
    bytagName[c].style.color = '#FF4500'
    bytagName[c].style.fontSize = '20px'
    bytagName[c].style.boxShadow = '10px 5px 5px #000000'
    if (c % 2 == 0){
        bytagName[c].style.backgroundColor = '#FFFF00'
    } else {
        bytagName[c].style.backgroundColor = '#fff'
    }

}
let removendo = document.getElementById('remove1')
removendo.remove()

console.log(bytagName)

let recebeLista = document.getElementById('paiLista')
recebeLista.style.listStyle = 'none'