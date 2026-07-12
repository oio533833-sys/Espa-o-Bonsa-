// ===============================
// SEGURANÇA DO PAINEL
// ===============================

let autorizado = localStorage.getItem("espacoBonsai");


if(autorizado !== "sim"){

    window.location.href = "index.html";

}



// ===============================
// CARREGAR DADOS
// ===============================


let reservas = JSON.parse(
    localStorage.getItem("reservasBonsai")
) || [];


let datasBloqueadas = JSON.parse(
    localStorage.getItem("datasBonsai")
) || [];





mostrarReservas();

mostrarDatas();





// ===============================
// MOSTRAR RESERVAS
// ===============================


function mostrarReservas(){


let area = document.getElementById("reservas");


area.innerHTML = "";



if(reservas.length === 0){


area.innerHTML =
"<p>Nenhuma reserva recebida.</p>";

return;

}




reservas.forEach(reserva=>{


let div = document.createElement("div");


div.className="reserva-card";



let status = reserva.status;



div.innerHTML = `


<h3>

${
status === "aguardando"

?

"🟡 Nova solicitação"

:

status === "confirmada"

?

"🔴 Confirmada"

:

"⚪ Recusada"

}

</h3>


<p>👤 ${reserva.nome}</p>

<p>📱 ${reserva.whatsapp}</p>

<p>👥 ${reserva.pessoas} pessoas</p>

<p>📅 ${reserva.inicio} até ${reserva.fim}</p>

<p>🍲 Rechaud: ${reserva.rechaud}</p>

<p>🎂 Aniversário: ${reserva.aniversario}</p>



${
status === "aguardando"

?

`

<button onclick="aceitarReserva(${reserva.id})">

✅ Aceitar

</button>


<button onclick="recusarReserva(${reserva.id})">

❌ Recusar

</button>

`

:

""

}


`;



area.appendChild(div);



});



}







// ===============================
// ACEITAR RESERVA
// ===============================


function aceitarReserva(id){


let reserva = reservas.find(

r => r.id === id

);



if(!reserva)return;



reserva.status="confirmada";





datasBloqueadas.push({

data:
reserva.inicio + " até " + reserva.fim,

motivo:
"Reserva de cliente",

status:
"ocupado"

});





salvar();



mostrarReservas();

mostrarDatas();



alert(
"Reserva confirmada! 🔴"
);



}







// ===============================
// RECUSAR RESERVA
// ===============================


function recusarReserva(id){



reservas = reservas.map(r=>{


if(r.id===id){


r.status="recusada";


}


return r;


});




salvar();



mostrarReservas();



alert(
"Reserva recusada."
);



}








// ===============================
// BLOQUEAR DATA MANUAL
// ===============================


function bloquearData(){


let data = prompt(

"Qual data deseja bloquear?"

);



if(!data)return;




let motivo = prompt(

"Motivo do bloqueio:\nExemplo: Família"

);



datasBloqueadas.push({


data:data,


motivo:

motivo || "Uso próprio",


status:"ocupado"


});



salvar();


mostrarDatas();



alert(
"Data bloqueada 🔴"
);



}






// ===============================
// MOSTRAR DATAS
// ===============================


function mostrarDatas(){



let area = document.getElementById(
"calendario"
);



if(!area)return;



area.innerHTML="";



if(datasBloqueadas.length===0){


area.innerHTML=

"<p>⚪ Nenhuma data ocupada.</p>";

return;


}




datasBloqueadas.forEach(item=>{


let div=document.createElement("div");


div.className="data-bloqueada";


div.innerHTML=

`

<p>
🔴 ${item.data}
</p>

<p>
${item.motivo}
</p>

`;



area.appendChild(div);



});



}







// ===============================
// SALVAR
// ===============================


function salvar(){


localStorage.setItem(

"reservasBonsai",

JSON.stringify(reservas)

);



localStorage.setItem(

"datasBonsai",

JSON.stringify(datasBloqueadas)

);



}







// ===============================
// SAIR
// ===============================


function sairAdmin(){


localStorage.removeItem(
"espacoBonsai"
);



window.location.href="index.html";


}
