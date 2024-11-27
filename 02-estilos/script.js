console.log("Tic Tak BOOM");

const titulo = document.querySelector(".titulo");
/* 
mostramos el nodo seleccionado

-Nodo expandido -> <h1>...</h1>
-Nodo abstracto -> h1.title


*/

console.log(titulo);

/* 
objeto style

Accedemos a el usando la notacion de punto (.)

elemento.style

Resultado es CSS Style Declartion. Es una lista que representa todas las propiedades de estilo de un elemento.

Unicamente muesra el valor de los estilos en linea declarados en el elemento de HTML

*/

console.log(titulo.style);
/* 
Propiedades de estilo

Accedemos a las propiedades usando la notificaci[on de punto (.)

elemento.style.nombrePropiedad
*/

console.log("Valores en linea. Color: " + titulo.style.color + "- Fondo:" + titulo.style.backgroundColor);

/* 
Metodo setProperty()

Asignamos una propiedad de estilo al elemento seleccionado.
 elemento.style.
*/



/* 
Eliminar valores de propiedades

Usamos el metodo de propiedad y le definimos una cadena vacia

  elemento.style.nombrePropiedad = ""

Esto elimina los valores previamente definidos en JS y en los estilos en linea. 

*/
titulo.style.color = "";
titulo.style.backgroundColor = "";

/* 
Metodo removeProperty()

Elimina la propiedad del estilo

  elemento.style.removeProperty
  (nombrePropiedad)

*/
titulo.style.removeProperty("color");
titulo.style.removeProperty("background-color");

//al parecer solo remueve lo que esta en linea
