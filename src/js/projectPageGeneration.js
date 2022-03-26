import _ from './documentParts';
import defaults from './defaultProjects';
import addEventListeners from './addListeners';
import { dateFilter } from './dateFilter';

const clearOldProject = () => {
    _.table.textContent = '';
};

const generateProject = (selectedProject, projectIndex) => {
    defaults.currentProjectIndex = projectIndex;
    clearOldProject();
    generateTableHeader();
    generateRows(selectedProject);
    addEventListeners();
};

const generateTableHeader = () => {
    let tr = document.createElement('tr');
    tr.classList.add('titles');
    let thProjName = document.createElement('th');
    thProjName.classList.add('projName');
    thProjName.textContent = 'DEFAULT';
    let thDueDate = document.createElement('th');
    thDueDate.classList.add('dueDate');
    thDueDate.innerHTML = `DUE DATE <i class="fa-solid fa-arrow-down"></i>`;
    tr.appendChild(thProjName);
    tr.appendChild(thDueDate);
    _.table.appendChild(tr);
};

const generateRows = (selectedProject) => {

    const makeRow = (row) => {
        const tr = document.createElement('tr');
        tr.classList.add('createdRow');
        tr.setAttribute('data-index', `${row.getID()}`);
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        td1.classList.add('column1');
        td2.classList.add('column2');

        td1.innerHTML = `<i class="fa-regular fa-square"></i> ${row.getTitle()}`;
        td2.innerHTML = `${dateFilter(row.getDueDate())} <i class="fa-regular fa-pen-to-square"></i><i class="fa-regular fa-trash-can"></i>`;

        tr.appendChild(td1);
        tr.appendChild(td2);

        return tr;
    };
    
    for(let i = 0; i < selectedProject.arr.length; i++){
        _.table.appendChild(makeRow(selectedProject.arr[i]));
    }

};

const generateTodaysToDos = () => {
    generateProject(defaults.todaysToDos, 2);
}

const generateThisWeeksToDos = () => {
    generateProject(defaults.thisWeeksToDos, 3);
}

const generateDefaultToDos = () => {
    generateProject(defaults.defaultProj, 0);
}

const setupDefaultProjects = () => {
    _.todaysToDos.addEventListener('click', generateTodaysToDos);
    _.thisWeeksToDos.addEventListener('click', generateThisWeeksToDos);
    _.defaultProject.addEventListener('click', generateDefaultToDos);
}

setupDefaultProjects();

generateProject(defaults.listOfProjects[defaults.currentProjectIndex], defaults.currentProjectIndex);