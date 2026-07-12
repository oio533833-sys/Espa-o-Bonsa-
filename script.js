// =================================
// ESPAÇO BONSAI - SCRIPT PRINCIPAL
// =================================


// Abrir página de reserva

function abrirReserva(){

    window.location.href = "reserva.html";

}





// =================================
// ACESSO SECRETO DA PROPRIETÁRIA
// =================================


function abrirCodigo(){


    let dispositivo = localStorage.getItem(
        "espacoBonsai"
    );



    // Se já foi autorizado

    if(dispositivo === "sim"){


        window.location.href = "admin.html";


        return;

    }




    let codigo = prompt(
        "Digite o código de acesso:"
    );




    if(codigo === "1511"){



        localStorage.setItem(

            "espacoBonsai",

            "sim"

        );



        alert(
            "✅ É esse dispositivo! Acesso autorizado."
        );



        window.location.href = "admin.html";



    }

    else{


        alert(
            "❌ Código incorreto!"
        );


    }



}







// =================================
// ATIVAR PWA
// =================================


if("serviceWorker" in navigator){


    window.addEventListener(
        "load",

        () => {


            navigator.serviceWorker.register(
                "service-worker.js"
            )

            .then(() => {


                console.log(
                    "Espaço Bonsai instalado como PWA"
                );


            })

            .catch((erro)=>{


                console.log(
                    "Erro no PWA:",
                    erro
                );


            });



        }

    );


}
