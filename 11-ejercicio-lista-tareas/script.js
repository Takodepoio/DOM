 //referencias

 const taskInput = document.getElementById('taskInput');
 const addButton = document.getElementById('addButton');
 const taskList = document.getElementById('taskList');
 //Escuchador
 addButton.addEventListener('click', createTask);
 taskInput.addEventListener('keypress', (e) =>{
  console.log(e.key);
  if(e.key === 'Enter'){
    createTask();

  }
});


 function createTask(){
  if((taskInput.value)){
    //creamos los elementos que integran una tarea
  console.log(taskInput.value);
  //creamos el contenedor de una tarea
  const taskItem = document.createElement('div');
  taskItem.classList.add('task');

  /* creamos el parrafo de una tarea */
  const taskText = document.createElement('p');
  taskText.innerText = taskInput.value;
  /* creamos el contenedor de los iconos */
  const taskIcons = document.createElement('div');
  taskIcons.classList.add('task-icons');

  /* crear icono de check */
  const iconCheck = document.createElement('i');
  iconCheck.classList.add('bi', 'bi-check', 'icon-complete');

  /* crear icono de trash */
  const iconDelete = document.createElement('i');
  iconDelete.classList.add('bi', 'bi-trash', 'icon-delete');

  /* Estructra de los elementos */
  taskIcons.append(iconCheck, iconDelete);
  taskItem.append(taskText, taskIcons);
  taskList.append(taskItem);
  /* escuchadores de los iconos */
  iconCheck.addEventListener('click', (e)=>{
    console.log(e.target.parentNode.parentNode.classList.toggle('complete'));
  });
  iconDelete.addEventListener('click', (e)=>{
    console.log(e.target.parentNode.parentNode.remove());
  });



  /* regresamos el valor vacío al input */

  taskInput.value = ''; /* regreamos el valor vacío al input */
 } else{
  alert('Heeee! Escribe una tarea ')
  }
  

 }
