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

        td1.innerHTML += `<i class="fa-regular fa-square"></i> ${taskName.value}`;
        if (taskDueDate.value !== '') {
            let filteredDueDate = dateFilter(taskDueDate.value.replace('T', ' '.replace(/-/g, '/')));
            // filteredDueDate = dateFilter(filteredDueDate);
            td2.innerHTML = `${filteredDueDate} <i class="fa-regular fa-pen-to-square"></i><i class="fa-regular fa-trash-can"></i>`;
        }
        else {
            td2.innerHTML = `<i class="fa-regular fa-pen-to-square"></i><i class="fa-regular fa-trash-can"></i>`;
        }

        tr.appendChild(td1);
        tr.appendChild(td2);

        return { tr, td1, td2 };
    };

    const row = makeRow();

    // create an object to store the values and push into defaultProj later
    let toDoObj = Todo(taskName.value, taskDescription.value, taskDueDate.value,
        taskPriority.value, _.toDoCounter);
    
    _.toDoCounter++;

    listOfProjects[currentProjectIndex].addToList(toDoObj);

    _.table.appendChild(row.tr);
    addEventListeners();
};

export default addToDoToTable;
