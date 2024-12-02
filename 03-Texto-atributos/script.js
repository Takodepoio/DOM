
const titulo = document.getElementById("title");
const items = document.getElementById("lista");

console.log(title);
console.log(items);

/* 
inerText

Devueve un "string" del contexto visibel dentro de un elemento.

elemento.innerText

-Excluye los elemntos ocultos.
-Excluye los espacios en el documento.
-Excluye las etiquetas html
*/
console.log(">>> Con innerText");
console.log(titulo.innerText);
console.log(lista.innerText);

/* 
textContent

devuelve un "string" del contexto visible dentro de un elemento.

  elemento.textContent

-incluye los espacios
-incluye los elementos ocultos
-Exluye los elementos HTML

*/
console.log(">>> Con textContent");
console.log(titulo.textContent);
console.log(lista.textContent);

/* 
innerHTML

devuelve un "string" con la estructura interna de el elemento seleccionado

elemento.innerHTML
*/
console.log(">>> Con innerHTML");
console.log(titulo.innerHTML);
console.log(lista.innerHTML);

/* 
Modificar el contenido con innerText

Asignamos el valor al elemento seleccionado.

  elemento.innerText = "string"
*/

titulo.innerText = "🏴‍☠️One Piece";
items.innerText = "no hay piratas!";

/* 
Modificar el contenido con textCotent

Asignamos el valor al elemento seleccionado
Incluyendo las etiquetas html

  elemento.innerHTML = "<tag>...</tag>"
*/
titulo.textContent = `!Amigos <span>'piratas'</span>!`;
lista.innerHTML = '<li> Shanks 😁</li><li class="oculto">❤️</li>'

/* 
  getAttribute()

  Devuelve el valor del atributo del elemento.

  elemento.getAttribute(atributo)

*/

const enlace = document.getElementsByTagName("a");

console.log(enlace[0].getAttribute("href"));

/* 
removeAttribute()

Elimina el valor del atributo de un elemento.

   elemento.removeAttribute(atributo)
*/

enlace[0].removeAttribute("href");

console.log(enlace[0].getAttribute("href"));

/* 
setAttribute()

Asigna un atributo y un valor a un elemento.

  elemento.
*/

enlace[0].setAttribute("href", "https://i.pinimg.com/736x/31/6a/9a/316a9a4f00410f61df3058973f6e3b9c.jpg");

console.log(enlace[0].getAttribute("href"));
/* antes */

console.log(enlace[0].getAttribute("target"));
enlace[0].setAttribute("Target", "_blank");

/* Despues */
console.log(enlace[0].getAttribute("target"));