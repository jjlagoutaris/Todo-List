import _ from './documentParts';
import Todo from './todo';
// import Project from './project';
import defaultProj from './defaultProj';
import dateFilter from './dateFilter';
import createToDoForm from './createToDoForm';

const getToDoInfo = _.addToDoBtn.addEventListener('click', () => {

    let form = createToDoForm();

    _.table.appendChild(form.container);
    _.toDoList.removeChild(_.addToDoBtn);

    form.submitBtn.addEventListener('click', addToDoToTable);
    form.cancelBtn.addEventListener('click', cancelNewToDo);

    return {taskName, taskDescription, taskPriority, taskDueDate};
});

const addToDoToTable = () => {

    const makeRows = () => {
        const tr = document.createElement('tr');
        const td0 = document.createElement('td');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        td2.classList.add('column2');

        td0.innerHTML = `<i class="fa-regular fa-square"></i>`;
        td1.textContent = taskName.value;
        if (taskDueDate.value !== ''){
            let filteredDueDate = taskDueDate.value.replace('T', ' '.replace(/-/g, '/'));
            filteredDueDate = dateFilter(filteredDueDate);
            td2.textContent = filteredDueDate;
        }
        td3.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`;
        td4.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;
    
        tr.appendChild(td0);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        return {tr, td0, td1, td2, td3, td4};
    };

    const rows = makeRows();

    // create an object to store the values and push into defaultProj later
    let toDoObj = Todo(taskName.value, taskDescription.value, taskDueDate.value, 
        taskPriority.value, _.toDoCounter);

    defaultProj.addToList(toDoObj);
    
    // increment for later toDos
    _.toDoCounter++;

    _.table.removeChild(_.table.lastChild);
    _.table.appendChild(rows.tr);
    _.toDoList.appendChild(_.addToDoBtn);
};

const cancelNewToDo = () => {
    _.table.removeChild(_.table.lastChild);
    _.toDoList.appendChild(_.addToDoBtn);
};

export default { getToDoInfo };