import './styles.css';

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