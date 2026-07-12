function enviarReserva(){


let nome = document.getElementById(
"nome"
).value;


let whatsapp = document.getElementById(
"whatsapp"
).value;


let pessoas = document.getElementById(
"pessoas"
).value;


let inicio = document.getElementById(
"inicio"
).value;


let fim = document.getElementById(
"fim"
).value;


let rechaud = document.getElementById(
"rechaud"
).value;


let aniversario = document.getElementById(
"aniversario"
).value;





if(
nome === "" ||
whatsapp === "" ||
inicio === "" ||
fim === ""
){


alert(
"Preencha todos os campos obrigatórios!"
);


return;


}






let reserva = {


id: Date.now(),


nome:nome,


whatsapp:whatsapp,


pessoas:pessoas,


inicio:inicio,


fim:fim,


rechaud:rechaud,


aniversario:aniversario,


status:"aguardando"


};






let reservas = JSON.parse(

localStorage.getItem(
"reservasBonsai"
)

) || [];





reservas.push(
reserva
);





localStorage.setItem(

"reservasBonsai",

JSON.stringify(reservas)

);






document.getElementById(
"mensagem"
).innerHTML =

`
<br>

✅ Pedido enviado!

<br><br>

Aguardando a aceitação do aluguel.

<br><br>

🌿 Espaço Bonsai entrará em contato pelo WhatsApp informado.

`;






}
