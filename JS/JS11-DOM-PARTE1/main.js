window.confirm("Deseja realmente sair desse jogo");

document.title = "Times"

var time = prompt("Qual o nome do time?")
if(time == "Sao Paulo" || time == "São Paulo"){
    alert("O time é o São Paulo")
    document.body.style.backgroundColor = "red"
    // createElement > serve para criar uma tag no HTML
   let nomeTime = document.createElement('h1')
    nomeTime.innerHTML = "São Paulo - Rogerio Ceni"
    document.body.appendChild(nomeTime)

    // innerHTML > Inserir uma informacao no html
}else if(time == "Corinthians"){

    alert("O time é o corinthians")
    document.body.style.backgroundColor = "black"
    let nomeTime = document.createElement('h1')
    nomeTime.innerHTML = "Corinthians - Cássio"
    document.body.appendChild(nomeTime)
}else if(time == "Palmeiras"){
    alert("O time é o Palmeiras")
    document.body.style.backgroundColor = "green"

}else{
    alert("Não sei qual é esse time")
}
