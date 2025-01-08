/* 
Objeto event

El objeto event represent un suceso que ocurre en el naveador, como n click, pulsar una tecla o el movimieno del mouse y proporciona información sobre las propiedades y metodos para manejarlo.

Para pasar al evento event (e) se pasa automaticamente como un argumento a la función manejadora.

Sintacis
Function FuncionManejadora(e){
//código a ejectar...
}

Sintaxis function funcionManejadora(event){
//codigo a ejectar 


Propiedades del objeto event:

-type: devuelve el tipo de vento 
-traget; devuelve la marca de tiempo de milisegundos desde la carga de la página.
}

-code: Develve el código de la tecla presionada.

-key:Devuelve el valor de la ecla presionada

-ClientX: Devuelve la posicion horizontal de puntero de mouse en relacion a la ventana del navegador.

-clientY: Devuelve la posicion vertical del puntero del mouse en relacion con la ventana del navegador. 
-clientX: Devuelve la posicion horizontal del puntero del mouse en relacioncon la ventana del navegadors
*/
const button = document.getElementsByClassName("boton");

//console.log(button[0]);
button[0].addEventListener("click", mostrarObjetoEvento);
/* aCCEDEMOS AL OBJETO EVENTO */
function mostrarObjetoEvento(event){
    /* código que se ejecta */
    console.log(event);
    console.log(event.type);
    console.log(event.target);
    console.log(event.timeStamp);
    console.log(event.target.innerText);
}
document.addEventListener("keydown", function(e){
    console.log(e);
    console.log(e.type);
    console.log(e.code);
    console.log(e.key);
});

document.addEventListener("mousemove", (e) => {
    console.log(e.type);
    console.log("cord x: "+ e.clientX + "cord Y " + e.clientY);
});


