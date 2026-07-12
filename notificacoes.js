// ===============================
// NOTIFICAÇÕES ESPAÇO BONSAI
// ===============================


function verificarNotificacoes(){


let reservas = JSON.parse(

localStorage.getItem("reservasBonsai")

) || [];



let novas = reservas.filter(item =>

item.status === "aguardando"

);




let contador = document.getElementById(
"contador-notificacao"
);



if(contador){


contador.innerHTML = novas.length;


}





if(novas.length > 0){


mostrarAviso(novas[0]);


}


}






function mostrarAviso(reserva){



let aviso = document.createElement("div");


aviso.className="notificacao";



aviso.innerHTML = `


<h3>
🔔 Nova reserva!
</h3>


<p>
👤 ${reserva.nome}
</p>


<p>
📅 ${reserva.inicio}
</p>



<button onclick="fecharNotificacao()">

OK

</button>


`;



document.body.appendChild(aviso);



}







function fecharNotificacao(){


let aviso = document.querySelector(
".notificacao"
);



if(aviso){

aviso.remove();

}


}






verificarNotificacoes();
