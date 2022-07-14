import './styles.css';
import {Todo,Todos,Projects} from './todo.js';

// animate the to-dos
function expandProject(event) {
    let child = event.target.nextElementSibling;
     if (child.style.maxHeight){
        child.style.maxHeight = null;
          } else {
            child.style.maxHeight = child.scrollHeight + "px";
          } 
}

const projectHead = document.querySelector('.project-head');
//const projectUL = document.querySelector('.project-ul');

projectHead.addEventListener('click',expandProject);

let todo1 = Todo('Todo 1','I must do it','tomorrow','high','notes','checklist');
let todo2 = Todo('Todo 2','I must do it','tomorrow','high','notes','checklist');
let todo3 = Todo('Todo 3','I must do it','tomorrow','high','notes','checklist');
let todo4 = Todo('Todo 4','I must do it','tomorrow','high','notes','checklist');

let todos = Todos();

console.log(todo1);

todos.addToDo(todo1);
todos.addToDo(todo2);
todos.addToDo(todo3);

console.log(todos.getToDos());
console.log(todos.removeToDo(todo2));
console.log(todos.getToDos());

Projects.addProject('Home',todos);
console.log(Projects.projects['Home'].getToDos());

todos.addToDo(todo4);
console.log(Projects.projects['Home'].getToDos());