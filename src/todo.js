let Todo = (title,description,dueDate,priority,notes,complete) => {

    //const getTitle = () => title;
    //const setTitle = (str) => title;

    const printDetails = () => {
        console.log(`Task ${title} is due on ${dueDate}`);
    };

    return {title,description,dueDate,priority,notes,complete,printDetails};
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
    const setToDos = (tds) => {
        todos = tds;
    };

    return {getToDos, setToDos, addToDo,removeToDo};

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
            if (title!=='') {
                addProject(title,todos);
            }
        }

    }

    const getProjects = () => projects;
    const setProjects = (ps) => projects=ps;

    return {getProjects,setProjects,addProject,deleteProject,addRemoveProject};

})();


export {Todo,Todos};
