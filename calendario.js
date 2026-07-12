// ===============================
// CALENDÁRIO ESPAÇO BONSAI
// ===============================


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




// Carregar dados


let reservas = JSON.parse(

localStorage.getItem("reservasBonsai")

) || [];



let datasBloqueadas = JSON.parse(

localStorage.getItem("datasBonsai")

) || [];






function criarCalendario(){



if(!calendario)return;



calendario.innerHTML="";



let ano = dataAtual.getFullYear();

let mes = dataAtual.getMonth();





let titulo = document.createElement("h2");


titulo.innerHTML =
`${meses[mes]} ${ano}`;



calendario.appendChild(titulo);






let grade = document.createElement("div");


grade.className="grade-calendario";






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







// espaços vazios


for(let i=0;i<primeiroDia;i++){


let vazio=document.createElement("div");


vazio.className="dia vazio";


grade.appendChild(vazio);


}







// criar dias


for(let dia=1;dia<=totalDias;dia++){



let caixa=document.createElement("div");



caixa.className="dia";



caixa.innerHTML=dia;





let dataTexto =

`${String(dia).padStart(2,"0")}/${String(mes+1).padStart(2,"0")}/${ano}`;







// Verificar bloqueios


let ocupado = datasBloqueadas.some(item=>


item.data.includes(dataTexto)

);








// Verificar pedidos


let pendente = reservas.some(item=>{


return (

item.status==="aguardando"

&&

item.inicio.includes(
`${ano}-${String(mes+1).padStart(2,"0")}-${String(dia).padStart(2,"0")}`
)

);


});







if(ocupado){


caixa.classList.add("ocupado");


}

else if(pendente){


caixa.classList.add("pendente");


}

else{


caixa.classList.add("livre");


}







grade.appendChild(caixa);



}






calendario.appendChild(grade);



}




criarCalendario();
