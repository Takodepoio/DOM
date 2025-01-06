/* 
un handler es una funcions que se va a activar cuando ocurre un evento

Funcion externa:
Esta funcion se escribe por gfuera del evento y se pasa como argumento al ddEventListener.

     function handles#(){
     //Código a ejecutar
     }

     la funcions se escribe fuera del evento
     elemento.addRventListener(tipoEvento , handler)

     Funcion anonima esta funcion se escrivbe dentro del evento y no tiene nombre.

     elemento.addEventListener(tipoEvento , function(){//codigo a ejecutar});
     funcion flecha se escribe dentro del evento

     funciones flecha () ->

     cuando el código que se ejecuta tiene mas de una line ase debe escribir entre las llaves
*/
const externa = document.getElementById("externa");
const anonima = document.getElementById("anonima");
const flecha  = document.getElementById("flecha");
/* Función Externa */
function funcionExterna(){
    console.log("Click en el boton extérna");
}
externa.addEventListener("click", funcionExterna);
//funcion anonima
anonima.addEventListener("click", function(){
       console.log("click en el boton anónima")
});

//funcion flecha

flecha.addEventListener("click",() => {
    console.log("click en el boton flecha")
});

