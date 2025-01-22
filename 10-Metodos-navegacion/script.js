/* 
Metodos de navegación

Nos permiten movernos entre los elementos relacionados en el DOM
*/

//refrencias

const padre = document.getElementById("parent");
const hijo = document.getElementById("child");
const hermano = document.getElementById("sibling");
//Parent Node --> Devuelve el nodo padre del elemento.
console.log(hijo.parentNode); 
//childNodes (Nodelist) de todos los nodos hijos, incluyendo elementos, texto comentarios
console.log(padre.childNodes);
//Cildren --> Esto devuelve na colección de HTML (HTMlCollection) de los nodos que son elementos. Ignora nodos de texto o comentarios.
console.log(padre.children);

//firstChild
console.log(padre.firstChild);

//firstElementChild --> Envelve el primer nodo hijo que sea un elemento.

console.log(padre.firstElementChild);

//LastChild --> Devuelve el ultimo nodo hijo, puede ser nodo de texto , comentario o elemento.

console.log(padre.lastChild);

// lastElementChld --> Devuelve el ultimo nodo de un hijo que da un elemento.

console.log(padre.lastElementChild);

//nextSibling -->Devuelve el siguiente nodo hermano, puede ser nodo de texto, comentario o elemento. 

console.log(hijo.nextSibling);
console.log(hermano.nextSibling);

//nextElementSibling --> Esto devuelve el siguiente nodo hermano que sea un elemento.

console.log(hijo.nextElementSibling);
console.log(hermano.nextElementSibling);

//previousSibling --> Devuelve el anterio nodo hermano, puede ser un nodo de texto, comentario o elemento.

console.log(hijo.previousSibling);
console.log(hermano.previousSibling);

// previousElementSibling --> Devuelve el nodo anterior por el anterior nodo herman que sea un elemeno.

console.log(hijo.PreviouseElementSibling);
console.log(hermano.previousElementSibling);
