import './styles.css';
import {Todo,Todos,Projects} from './todo.js';
import {renderSideBar,renderFooter,getLocalStorage} from './render.js';


//const projectHead = document.querySelector('.project-head');
//const projectUL = document.querySelector('.project-ul');

// create the default and completed projects for initial population of the DOM
if (!localStorage.getItem('projects')) {
    Projects.addProject('Completed',Todos());
    Projects.addProject('Default',Todos());
    Projects.getProjects()['Default'].addToDo(Todo('Default 1','I must do it','2022-08-01','1','notes','checklist'));    
} else {
    getLocalStorage();
}



// adding some additional content for checking it out
// let todo1 = Todo('Todo 1','I must do it','2022-09-18','3','notes',true);
// let todo2 = Todo('Todo 2','I must do it','2022-07-20','4','notes',false);
// let todo3 = Todo('Todo 3','I must do it','2022-07-25','2','notes',false);
// let todo4 = Todo('Todo 4','I must do it','2022-09-18','5','notes',false);

// let todos = Todos();

// console.log(todo1);

// todos.addToDo(todo1);
// todos.addToDo(todo2);
// todos.addToDo(todo3);

// console.log(todos.getToDos());
// console.log(todos.removeToDo(todo2));
// console.log(todos.getToDos());

// Projects.addProject('Home',todos);
// console.log(Projects.getProjects()['Home'].getToDos());

// todos.addToDo(todo4);
// console.log(Projects.getProjects()['Home'].getToDos());

renderSideBar(Projects);
renderFooter();
//renderToDo(todo1);