import _ from './documentParts';
import Todo from './todo';
import { listOfProjects, currentProjectIndex } from './defaultProj';
import dateFilter from './dateFilter';
import createToDoForm from './createToDoForm';
import addEventListeners from './addListeners';

const getToDoInfo = _.addToDoBtn.addEventListener('click', () => {

    let form = createToDoForm();

    _.table.appendChild(form.container);
    _.toDoList.removeChild(_.addToDoBtn);

    form.submitBtn.addEventListener('click', addToDoToTable);
    form.cancelBtn.addEventListener('click', cancelNewToDo);

    return { taskName, taskDescription, taskPriority, taskDueDate };
});

const addToDoToTable = () => {

    const makeRows = () => {
        const tr = document.createElement('tr');
        tr.classList.add('createdRow');
        tr.setAttribute('data-index', `${_.toDoCounter}`);
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        td1.classList.add('column1');
        td2.classList.add('column2');

        td1.innerHTML += `<i class="fa-regular fa-square"></i> ${taskName.value}`;
        if (taskDueDate.value !== '') {
            let filteredDueDate = taskDueDate.value.replace('T', ' '.replace(/-/g, '/'));
            filteredDueDate = dateFilter(filteredDueDate);
            td2.innerHTML = `${filteredDueDate} <i class="fa-regular fa-pen-to-square"></i><i class="fa-regular fa-trash-can"></i>`;
        }
        else {
            td2.innerHTML = `<i class="fa-regular fa-pen-to-square"></i><i class="fa-regular fa-trash-can"></i>`;
        }

        tr.appendChild(td1);
        tr.appendChild(td2);

        return { tr, td1, td2 };
    };

    const rows = makeRows();

    // create an object to store the values and push into defaultProj later
    let toDoObj = Todo(taskName.value, taskDescription.value, taskDueDate.value,
        taskPriority.value, _.toDoCounter);
    
    _.toDoCounter++;

    listOfProjects[currentProjectIndex].addToList(toDoObj);

    _.table.removeChild(_.table.lastChild);
    _.table.appendChild(rows.tr);
    _.toDoList.appendChild(_.addToDoBtn);
    addEventListeners();
};

const cancelNewToDo = () => {
    _.table.removeChild(_.table.lastChild);
    _.toDoList.appendChild(_.addToDoBtn);
};
