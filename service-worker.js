const CACHE_NAME = "espaco-bonsai-v1";


const arquivos = [

"./",

"index.html",

"style.css",

"script.js",

"manifest.json",

"logo.png",

"reserva.html",

"reserva.js",

"admin.html",

"admin.js",

"calendario.js"

];





// Instalar o aplicativo

self.addEventListener(
"install",
evento => {


evento.waitUntil(

caches.open(CACHE_NAME)

.then(cache => {


return cache.addAll(arquivos);


})

);


});







// Abrir o aplicativo

self.addEventListener(
"fetch",
evento => {


evento.respondWith(


caches.match(evento.request)

.then(resposta => {


return resposta || fetch(evento.request);


})


);


});







// Atualizar versão

self.addEventListener(
"activate",
evento => {


evento.waitUntil(

caches.keys()

.then(chaves => {


return Promise.all(

chaves.map(chave => {


if(chave !== CACHE_NAME){


return caches.delete(chave);


}


})

);


})


);


});
