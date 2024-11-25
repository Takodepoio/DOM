/* DOM

  organiza los elementos del documento en "nodos" en un arbol jerarquico.

  Nodo -> es todo elemento individualen nuestro documento.

Tipos de nodo

1. Nodo de Documento
2. Nodo de Elemnto
3. Nodo de Atributo
4. Nodo de Texto
5. Nodo de Comentarios
*/
/* 
Nodo de Documento

Este nodo representa el documento completo de HTML. Incluye el contenido desde la "root" hasta los elementos hijos.

para acceder usamos document en JavaScript
*/
console.log(document);
console.log(document.head);
console.log(document.URL);
console.log(document.title);

/* 
Ndos de elemento

Para seleccionar nodos e elemento se enecesita la funcion getElementsByTagName("etiqueta")
*/

/*  let title = document.getElementsByTagName("p");

console.log(title);  */

/* 
Nodos de atributo

Son los nodos que accedemos a travez de su clase o ID

getElementById("nombreId") 
getElementByClassName("nombreClase")

querySelector("nombreSelector") -> Selecciona el primer elemento que encuentre con el selector.
querySelectorAll("nombreSelector")-> Seleccionar a todos los elementos con el mismo selector.


*/

let title = document.getElementById("title");

console.log(title);
console.log(title.innerText);
console.log(title.id);



let text = document.getElementsByClassName("paragraph");

console.log(text);
console.log(text[0].textContent);
console.log(text[1].textContent);

//let titulo = document.querySelector("h1"); // Tag
//let titulo = document.querySelector("titulo"); // id
let titulo = document.querySelector(".title"); // Tag

console.log(titulo);

//let parrafos = document.querySelectorAll("p");
//let parrafos = document.querySelectorAll("paragraph");
let parrafos = document.querySelectorAll(".paragraph");


console.log(parrafos);

/* 
Nodo de texto

Son elementos de texto contenidos por elementos de HTML


*/
let subtitulo = document.querySelector(".subtitle");
console.log(subtitulo.innerText);

/* 
nodos de comentarios

tienen un valor de 8 dentro de DOM

*/

let comentario = document.COMMENT_NODE;

console.log(comentario);



