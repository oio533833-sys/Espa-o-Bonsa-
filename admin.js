// Verifica autorização

let autorizado = localStorage.getItem(
    "espacoBonsai"
);


if(autorizado !== "sim"){

    window.location.href = "index.html";

}



// Carrega datas salvas

let datasBloqueadas = JSON.parse(

    localStorage.getItem(
        "datasBonsai"
    )

) || [];





mostrarDatas();





function bloquearData(){


let data = prompt(
"Digite a data que deseja bloquear:\nExemplo: 20/07/2026"
);



if(!data){

    return;

}




let motivo = prompt(

"Motivo:\n\n1 - Uso próprio\n2 - Família\n3 - Outro"

);



let novaData = {


data:data,

motivo:motivo || "Uso próprio",

status:"ocupado"


};





datasBloqueadas.push(
    novaData
);




localStorage.setItem(

"datasBonsai",

JSON.stringify(datasBloqueadas)

);




mostrarDatas();



alert(
"🔴 Data bloqueada com sucesso!"
);



}






function mostrarDatas(){


let area = document.getElementById(
"calendario"
);



area.innerHTML="";




if(datasBloqueadas.length === 0){


area.innerHTML=

"<p>⚪ Nenhuma data bloqueada</p>";

return;


}




datasBloqueadas.forEach(item=>{


let div = document.createElement(
"div"
);



div.className="data-bloqueada";



div.innerHTML=

`
<p>
🔴 ${item.data}
</p>

<p>
Motivo: ${item.motivo}
</p>
`;



area.appendChild(div);



});



}






function sairAdmin(){



localStorage.removeItem(
"espacoBonsai"
);



window.location.href="index.html";


}
