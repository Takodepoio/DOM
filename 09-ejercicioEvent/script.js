/* referenci */
const emojiCursor = document.querySelector(".emoji-cursor");
/* Detecamos el evento movimiento del mouse */

document.addEventListener("mousemove" , (e) => {
    /* console.log(e.clientX)
    console.log(e.clientY) */
    /* guardamos las cordenadas en variables */
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    emojiCursor.style.left = `${mouseX}px`;
    emojiCursor.style.top = `${mouseY}px`;
} )
/* cambiar el emoji al presionar una tecla */

document.addEventListener("keydown" , (e) => {
    /* utilizamos switch para asignar un nuevo emoji */
    switch (e.key){
        case "1" : 
        emojiCursor.textContent = "🧡"
        brake;
        case "2" : 
        emojiCursor.textContent = "💛"
        brake;
          case "3" : 
        emojiCursor.textContent = "💚"
        brake;
          case "4" : 
        emojiCursor.textContent = "💙"
        brake;
        case "5" : 
        emojiCursor.textContent = "🖤"
        brake;
        default:
             emojiCursor.textContent = "❤"

        
    }
})