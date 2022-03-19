import _ from './documentParts';
import { listOfProjects, currentProjectIndex } from './defaultProj';
import Todo from './todo';

const deleteToDo = (e) => {
    const item = e.target;
    const todo = item.parentElement.parentElement;
    todo.remove();

    // find indexOf that equates data-index to todo's ID number
    let targetIndex = todo.getAttribute('data-index');
    for(let i = 0; i < listOfProjects[currentProjectIndex].arr.length; i++){
        if (listOfProjects[currentProjectIndex].arr[i].getID() == targetIndex){
            console.log(listOfProjects[currentProjectIndex].arr[i].getTitle());
            listOfProjects[currentProjectIndex].removeFromList(i);
            console.log(listOfProjects[currentProjectIndex].arr[i].getTitle());
        }
    }
}

export default deleteToDo;