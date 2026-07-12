let autorizado = localStorage.getItem("espacoBonsai");


if(autorizado !== "sim"){

    window.location.href = "index.html";

}



// Dados salvos

let reservas = JSON.parse(
    localStorage.getItem("reservasBonsai")
) || [];


let datasBloqueadas = JSON.parse(
    localStorage.getItem("datasBonsai")
) || [];





mostrarReservas();

mostrarDatas();






function mostrarReservas(){


let area = document.getElementById(
"reservas"
);


area.innerHTML = "";



if(reservas.length === 0){


area.innerHTML =
"<p>Sem pedidos de reserva.</p>";

return;


}




reservas.forEach((item)=>{


let div = document.createElement("div");


div.className="reserva-card";



div.innerHTML =

`

<h3>
🟡 Pedido de reserva
</h3>


<p>
👤 ${item.nome}
</p>


<p>
📱 ${item.whatsapp}
</p>


<p>
📅 ${item.inicio} até ${item.fim}
</p>


<p>
👥 ${item.pessoas} pessoas
</p>


<p>
🔥 Rechaud: ${item.rechaud}
</p>


<p>
🎂 Aniversário: ${item.aniversario}
</p>



<button onclick="aceitarReserva(${item.id})">

✅ Aceitar

</button>



<button onclick="recusarReserva(${item.id})">

❌ Recusar

</button>


`;


area.appendChild(div);



});



}








function aceitarReserva(id){



let reserva = reservas.find(

item => item.id === id

);



if(!reserva) return;



reserva.status="confirmada";





datasBloqueadas.push({

data:
reserva.inicio + " até " + reserva.fim,

motivo:
"Reserva confirmada",

status:"ocupado"

});





salvarDados();


mostrarReservas();

mostrarDatas();



alert(
"Reserva aceita! 🔴 Data ocupada."
);



}







function recusarReserva(id){



reservas = reservas.filter(

item => item.id !== id

);



salvarDados();


mostrarReservas();



alert(
"Reserva recusada."
);



}








function bloquearData(){



let data = prompt(
"Digite a data para bloquear:"
);



if(!data) return;



let motivo = prompt(
"Motivo do bloqueio:"
);



datasBloqueadas.push({

data:data,

motivo:
motivo || "Uso próprio",

status:"ocupado"

});



salvarDados();


mostrarDatas();



}







function mostrarDatas(){



let area = document.getElementById(
"calendario"
);



area.innerHTML="";



if(datasBloqueadas.length===0){


area.innerHTML=
"<p>⚪ Nenhuma data ocupada</p>";

return;


}




datasBloqueadas.forEach(item=>{


let div=document.createElement("div");


div.innerHTML=

`

<p>
🔴 ${item.data}
</p>

<p>
Motivo: ${item.motivo}
</p>

<hr>

`;


area.appendChild(div);



});



}







function salvarDados(){


localStorage.setItem(

"reservasBonsai",

JSON.stringify(reservas)

);



localStorage.setItem(

"datasBonsai",

JSON.stringify(datasBloqueadas)

);



}







function sairAdmin(){


localStorage.removeItem(
"espacoBonsai"
);


window.location.href="index.html";


}
