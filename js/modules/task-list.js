function showTasks() {
    tasks.forEach(function(title) {
        addNewTask(title);
    }); 
}


//Ukończone Zadanie
function toggleTaskComplete(task) {
task.classList.toggle('btn-success');
}

//Zaadanie Usunięte
function deleteTask(task) {
var liToDelete = task.closest('li');
task.closest('ul').removeChild(liToDelete);
}