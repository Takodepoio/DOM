const botanas = document.getElementsByTagName("li");
/* 
Aqui se comenta algo
*/

console.log( botanas[0].classList);
console.log( botanas[0].classList); // Acceso a clases a travez de su indice

/* 
Para agregar clases usamos el metodo add()
   elemento.classList.add(clase)

-Nombre de la clase pasa como string entre "" 0 ''
*/

botanas[1].classList.add ("bg-lightpink");
/* 
Verificar si existe una clase en un elemento con el método contains(clase)

-Devuelve true si existe la clase
-Devuelve false si no existe la clase
*/
console.log( botanas[2].classList.contains("botanitas"));
console.log( botanas[2].classList.contains("bg-lightblue"));
/* 
Para eliminar una clase usamos el método remover()
   elemento,classList.remove(clase)

*/
botanas[3].classList.remove("botanitas");
botanas[3].classList.remove("bg-lightpink");

