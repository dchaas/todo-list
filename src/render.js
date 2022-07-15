import { Todos } from "./todo";
import {Projects} from './todo.js';

// new project button
const buttons = (()=>{
    const newProj = document.querySelector('.new-project');
    const newProjForm = document.querySelector('.new-project-form');
    const newProjName = document.querySelector(`input[name="project-name"]`);

    newProj.addEventListener('click',function(e){
        e.preventDefault();
        newProjForm.style.visibility = 'visible';
        newProjForm.style.opacity = 0.8;
    });


    const addRemoveProject = document.querySelector('#add-remove-project');
    addRemoveProject.addEventListener('click',function(){
        newProjForm.style.visibility = 'hidden';
        newProjForm.style.opacity = 0;
        
        Projects.addRemoveProject(newProjName.value,Todos()); 
        newProjName.value = '';
        
        renderSideBar(Projects);
    });
        

    return {newProj};
})();




// animate the to-dos
function expandProject(event) {
    let child = event.target.nextElementSibling;
     if (child.style.maxHeight){
        child.style.maxHeight = null;
          } else {
            child.style.maxHeight = child.scrollHeight + "px";
          } 
}

let clearContent = function(element) {
     // clear the content
     while (element.hasChildNodes()) {
        element.removeChild(element.firstChild);
    }
}

// function to render the sidebar
let renderSideBar = function(projects) {
    const sideBar = document.querySelector('.projects');
    clearContent(sideBar);
    
    let allProjects = projects.getProjects();
    
    for (let project in allProjects) {
        //console.log(project);
        //console.log(allProjects[project].getToDos());
        //console.log(allProjects);

        // create the DOM elements
        const header = document.createElement('h3');
        header.classList.add('project-head');
        header.innerHTML = `${project}`;
        header.addEventListener('click',expandProject);

        const ul = document.createElement('ul');
        ul.classList.add('project-ul');

        allProjects[project].getToDos().forEach(todo => {
            const todoLi = document.createElement('li');
            todoLi.classList.add('project-li');
            todoLi.innerHTML = `${todo.title}`;
            ul.appendChild(todoLi);
        });

        sideBar.appendChild(header);
        sideBar.appendChild(ul);


    }
};

const renderFooter = ()=> {
    const footer = document.querySelector('.footer');
    const d = new Date();
    footer.innerHTML = `Copyright Big D - ${d.getFullYear()}`;
}


// function to render the todo
let renderToDo = function(todo) {
    const title = document.querySelector('input[name="title"]');
    const desc = document.querySelector('textarea[name="description"]');
    const dueDate = document.querySelector('input[name="due-date"]');
    const priority = document.querySelector('input[name="priority"]');
    const completed = document.querySelector('input[name="complete"]');

    title.value = todo.title;
    desc.value = todo.description;
    dueDate.value = todo.dueDate;
    priority.value = todo.priority;
    completed.checked = todo.complete;

};

export {renderSideBar,renderFooter,renderToDo,buttons};