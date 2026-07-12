function abrirCodigo(){


let autorizado = localStorage.getItem(
"espacoBonsai"
);



if(autorizado === "sim"){


window.location.href="admin.html";

return;


}




let codigo = prompt(
"Digite o código de acesso"
);



if(codigo === "1511"){


localStorage.setItem(
"espacoBonsai",
"sim"
);



alert(
"✅ É esse dispositivo! Acesso autorizado."
);



window.location.href="admin.html";



}else{


alert(
"Código incorreto!"
);


}


}
