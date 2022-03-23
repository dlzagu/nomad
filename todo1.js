const toDoform = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");
let toDos =[];

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();

}
function saveToDo(){
    localStorage.setItem("todos",JSON.stringify(toDos));
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
event.preventDefault();
const newTodo = toDoInput.value;
toDoInput.value = "";
paintToDo(newTodo);
toDos.push(newTodo);
saveToDo();
}


toDoform.addEventListener("submit",handleToDoSubmit);

const saveToDos = localStorage.getItem("todos");
if (saveToDo !== null){
    const parsedToDos = JSON.parse(saveToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}