const games = document.getElementById("juegos");

/* 
Al crear un elemento se tienen que guardar en un avariable o una constante
*/

const newGame = document.createElement("li");

console.log(newGame);

/* 
Para agregarlo al DOM se usa la funcion append
elementoReferencia.append(nuevoElemento)
*/

games.append(newGame);

newGame.innerText("Halo");