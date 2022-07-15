let Todo = (title,description,dueDate,priority,notes,checklist) => {

    //const getTitle = () => title;
    //const setTitle = (str) => title;

    const printDetails = () => {
        console.log(`Task ${title} is due on ${dueDate}`);
    };

    return {title,description,dueDate,priority,notes,checklist,printDetails};
};

let Todos = () => {
    let todos = [];

    const addToDo = (todo) => todos.push(todo);
    
    const findIndex = (todo) => {
        let id = todos.filter(td => td.title===todo.title);
        return id;
    }

    const removeToDo = (todo) => {
        let id = findIndex(todo);
        //todos = todos.splice(0,id-1).concat(todos.splice(id+1));
        todos = todos.filter(td => td.title!==todo.title);
    };
    const getToDos = () => todos;

    return {getToDos, addToDo,removeToDo};

};

// create the module to store projects
export const Projects = (()=>{
    let projects = {};

    const addProject = (title,todos) => {
        projects[title] = todos;
    };

    const deleteProject = (title) => {
        delete projects[title];
    };

    const addRemoveProject = (title,todos) => {
        if (projects.hasOwnProperty(title)) {
            deleteProject(title);
        } else {
            addProject(title,todos);
        }

    }

    const getProjects = () => projects;

    return {getProjects,addProject,deleteProject,addRemoveProject};

})();


export {Todo,Todos};
