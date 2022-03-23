import _ from './documentParts';
import Todo from './todo';
import { listOfProjects, currentProjectIndex } from './defaultProj';
import dateFilter from './dateFilter';
import addEventListeners from './addListeners';

const addToDoToTable = () => {

    const makeRow = () => {
        const tr = document.createElement('tr');
        tr.classList.add('createdRow');
        tr.setAttribute('data-index', `${_.toDoCounter}`);
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        td1.classList.add('column1');
        td2.classList.add('column2');

        td1.innerHTML += `<i class="fa-regular fa-square"></i> ${createTaskName.value}`;
        if (createTaskDueDate.value !== '') {
            let filteredDueDate = dateFilter(createTaskDueDate.value.replace('T', ' '.replace(/-/g, '/')));
            td2.innerHTML = `${filteredDueDate} <i class="fa-regular fa-pen-to-square"></i><i class="fa-regular fa-trash-can"></i>`;
        }
        else {
            td2.innerHTML = `<i class="fa-regular fa-pen-to-square"></i><i class="fa-regular fa-trash-can"></i>`;
        }

        tr.appendChild(td1);
        tr.appendChild(td2);

        return tr;
    };

    const row = makeRow();

    // create an object to store the values and push into defaultProj later
    let toDoObj = Todo(createTaskName.value, createTaskDescription.value, createTaskDueDate.value,
        createTaskPriority.value, _.toDoCounter);
    
    _.toDoCounter++;

    listOfProjects[currentProjectIndex].addToList(toDoObj);

    _.table.appendChild(row);
    addEventListeners();
};

export default addToDoToTable;
