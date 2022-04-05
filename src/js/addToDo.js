import _ from './documentParts';
import { Todo } from './todo';
import defaults from './defaultProjects';
import { dateFilter, now } from './time';
import { addEventListeners } from './addListeners';

export const addToDoToTable = () => {

    const makeRow = () => {
        const tr = document.createElement('tr');
        tr.classList.add('createdRow');
        tr.setAttribute('data-index', `${_.toDoCounter}`);
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        td1.classList.add('column1');
        td2.classList.add('column2');

        _.setPriorityColors(createTaskPriority.value, td1);

        td1.innerHTML = `<i class="fa-regular fa-square"></i> ${createTaskName.value}`;
        if (createTaskDueDate.value !== '') {
            let filteredDueDate = dateFilter(createTaskDueDate.value);
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

    defaults.listOfProjects[defaults.currentProjectIndex].addToList(toDoObj);
    defaults.listOfProjects[1].addToList(toDoObj);

    _.table.appendChild(row);
    defaults.save();
    // set default values
    createTaskName.value = '';
    createTaskDescription.value = '';
    createTaskDueDate.value = now();
    createTaskPriority.value = 'Normal';
    addEventListeners();
};
