const CACHE = "espaco-bonsai-v1";


const arquivos = [

"index.html",

"style.css",

"script.js",

"reserva.html",

"reserva.js",

"admin.html",

"admin.js",

"calendario.js",

"manifest.json"

];





self.addEventListener(
"install",
evento => {


evento.waitUntil(

caches.open(CACHE)

.then(cache => {


return cache.addAll(arquivos);


})

);


});







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
