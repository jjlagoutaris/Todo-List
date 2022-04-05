import _ from './documentParts';
import defaults from './defaultProjects';
import { addEventListeners } from './addListeners';
import { dateFilter } from './time';

export const generateProject = (selectedProject) => {
    defaults.currentProjectIndex = selectedProject.getIndex();
    clearOldProject();
    generateTableHeader(selectedProject);
    generateRows(selectedProject);
    addEventListeners();
};

const clearOldProject = () => {
    _.table.textContent = '';
};

const generateTableHeader = (selectedProject) => {
    let tr = document.createElement('tr');
    tr.classList.add('titles');
    let thProjName = document.createElement('th');
    thProjName.classList.add('projName');
    thProjName.textContent = selectedProject.getTitle().substring(0,30);
    let thDueDate = document.createElement('th');
    thDueDate.classList.add('dueDate');
    thDueDate.innerHTML = `Due Date <i class="fa-solid fa-calendar-day"></i>`;
    tr.appendChild(thProjName);
    tr.appendChild(thDueDate);
    _.table.appendChild(tr);
};

const generateRows = (selectedProject) => {

    if(selectedProject.getIndex() == 2 || selectedProject.getIndex() == 3){
        const makeRow = (row) => {
            const tr = document.createElement('tr');
            tr.classList.add('viewOnly');
            tr.setAttribute('data-index', `${row.getID()}`);
            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            td1.classList.add('column1');
            td2.classList.add('column2');

            _.setPriorityColors(row.getPriority(), td1);
    
            td1.innerHTML = `${row.getTitle()}`;
            td2.innerHTML = `${dateFilter(row.getDueDate())}`;
    
            tr.appendChild(td1);
            tr.appendChild(td2);
    
            return tr;
        };
    
        for (let i = 0; i < selectedProject.arr.length; i++) {
            _.table.appendChild(makeRow(selectedProject.arr[i]));
        }
        if(_.toDoList.contains(_.addToDoBtn)){
            _.toDoList.removeChild(_.addToDoBtn);
        }
    }
    else{
        const makeRow = (row) => {
            const tr = document.createElement('tr');
            tr.classList.add('createdRow');
            tr.setAttribute('data-index', `${row.getID()}`);
            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            td1.classList.add('column1');
            td2.classList.add('column2');

            _.setPriorityColors(row.getPriority(), td1);
    
            td1.innerHTML = `<i class="fa-regular fa-square"></i> ${row.getTitle()}`;
            td2.innerHTML = `${dateFilter(row.getDueDate())} <i class="fa-regular fa-pen-to-square"></i><i class="fa-regular fa-trash-can"></i>`;
    
            tr.appendChild(td1);
            tr.appendChild(td2);
    
            return tr;
        };
    
        for (let i = 0; i < selectedProject.arr.length; i++) {
            _.table.appendChild(makeRow(selectedProject.arr[i]));
        }
        
        if(!_.toDoList.contains(_.addToDoBtn)){
            _.toDoList.appendChild(_.addToDoBtn);
        }
    }            

};

export const generateTodaysToDos = () => {
    defaults.listOfProjects[2].arr.splice(0, defaults.listOfProjects[2].arr.length, ...defaults.listOfProjects[1].filterTodaysToDos());
    generateProject(defaults.todaysToDos);
};

export const generateThisWeeksToDos = () => {
    defaults.listOfProjects[3].arr.splice(0, defaults.listOfProjects[3].arr.length, ...defaults.listOfProjects[1].filterThisWeeksToDos());
    generateProject(defaults.thisWeeksToDos);
};

export const generateDefaultToDos = () => {
    generateProject(defaults.defaultProj);
};

const setupDefaultProjects = () => {
    _.todaysToDos.addEventListener('click', generateTodaysToDos);
    _.thisWeeksToDos.addEventListener('click', generateThisWeeksToDos);
    _.defaultProject.addEventListener('click', generateDefaultToDos);
    generateProject(defaults.listOfProjects[defaults.currentProjectIndex]);
};

setupDefaultProjects();