 //referencias

 const taskInput = document.getElementById('taskInput');
 const addButton = document.getElementById('addButton');
 //Escuchador
 addButton.addEventListener('click', createTask);

 function createTask(){
  if((taskInput.value = true)){
  console.log(taskInput.value);
  taskInput.value = ''; /* regreamos el valor vacío al input */
} else{
  alert('Heeee! Escribe una tarea ')
}
 }