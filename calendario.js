let calendario = document.getElementById("calendario");

let dataAtual = new Date();

const meses = [
"Janeiro",
"Fevereiro",
"Março",
"Abril",
"Maio",
"Junho",
"Julho",
"Agosto",
"Setembro",
"Outubro",
"Novembro",
"Dezembro"
];



function criarCalendario(){


calendario.innerHTML = "";



let ano = dataAtual.getFullYear();

let mes = dataAtual.getMonth();



let titulo = document.createElement("h2");

titulo.innerHTML =
`${meses[mes]} ${ano}`;

calendario.appendChild(titulo);





let grade = document.createElement("div");

grade.className = "grade-calendario";



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





for(let i = 0; i < primeiroDia; i++){


let vazio = document.createElement("div");

vazio.className="dia vazio";

grade.appendChild(vazio);


}





for(let dia = 1; dia <= totalDias; dia++){


let caixa = document.createElement("div");


caixa.className="dia";



caixa.innerHTML = dia
