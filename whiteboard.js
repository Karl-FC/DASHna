//Drag and Drop//
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

    tasks.forEach(function(task) {
        task.style.position = 'absolute';
        makeDraggable(task);
    });
};

//New Task//
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(!input.value) return;

    const newTask = document.createElement("p");
    newTask.classList.add("task");
    newTask.draggable = true;
    newTask.setAttribute("draggable", "true");

    newTask.addEventListener("dragstart", () => {
        newTask.classList.add("is-dragging");
      });
    
      newTask.addEventListener("dragend", () => {
        newTask.classList.remove("is-dragging");
      });
    
    newTask.innerText=input.value;

    document.getElementById('todo-list').appendChild(newTask);
    makeDraggable(newTask);

    // Use setTimeout to delay the addition of the event listeners
    setTimeout(() => makeDraggable(newTask), 1);
});
