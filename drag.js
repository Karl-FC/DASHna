//Drag and Drop//
$( function() {
    $( ".task" ).draggable();
} );

//New Task//
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(!input.value) return;

    const newTask = document.createElement("p");
    newTask.classList.add("task");
    newTask.innerText=input.value;

    document.getElementById('todo-list').appendChild(newTask);
    
    // Draggability w/ no scrolling
    $( newTask ).draggable({ scroll: false });

     // Add an event listener for the 'contextmenu' event to remove the task
     newTask.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        this.style.visibility='hidden';
    });

        // Clear the input field
        input.value = "";

    // Reset Button
const resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", () => {
    // Get the task container
    const taskContainer = document.getElementById('todo-list');

    // Remove all tasks
    while (taskContainer.firstChild) {
        taskContainer.firstChild.remove();
    }
});

});









/*Draggable and Droppable//
var dragged;

function dragStart(event) {
    dragged = event.target;
    event.dataTransfer.setData('text/plain', null);
}

function dragEnd(event) {
    dragged.style.left = event.pageX + 'px';
    dragged.style.top = event.pageY + 'px';
}

function makeDraggable(task) {
    task.addEventListener('dragstart', dragStart);
    task.addEventListener('dragend', dragEnd);
}

window.onload = function() {
    var tasks = document.querySelectorAll('.task');

   
   //Yun bago// 
    tasks.forEach(function(task) {
        task.style.position = 'relative';
        makeDraggable(task);
    });
};*/