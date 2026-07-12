const calendario = document.getElementById("calendario");


let dataAtual = new Date();



function criarCalendario(){


calendario.innerHTML = "";



let ano = dataAtual.getFullYear();

let mes = dataAtual.getMonth();



let primeiroDia = new Date(
ano,
mes,
1
).getDay();



let totalDias = new Date(
ano,
mes + 1,
0
).getDate();



let titulo = document.createElement("h2");


titulo.innerHTML =

`${meses[mes]} ${ano}`;


calendario.appendChild(titulo);





let grade = document.createElement("div");


grade.className="grade-calendario";





for(let i = 0; i < primeiroDia; i++){


let vazio = document.createElement("div");

vazio.className="dia vazio";


grade.appendChild(vazio);


}





for(let dia = 1; dia <= totalDias; dia++){


let div = document.createElement("div");


div.className="dia
