import _ from './documentParts';
import defaults from './defaultProjects';
import { addToDoToTable } from './addToDo';
import { createEditModal, createProjectModal } from './createModals';
import { dateFilter, now } from './time';
import { Project } from './project';

export const addEventListeners = () => {
    // remove toDo
    const trashBtns = document.querySelectorAll('.fa-trash-can');
    for (let i = 0; i < trashBtns.length; i++) {
        trashBtns[i].addEventListener('click', deleteToDo);
    }
    // mark complete
    const uncheckedBoxes = document.querySelectorAll('.fa-square');
    for (let i = 0; i < uncheckedBoxes.length; i++) {
        uncheckedBoxes[i].addEventListener('click', completeToDo);
    }
    // mark incomplete
    const checkedBoxes = document.querySelectorAll('.fa-square-check');
    for (let i = 0; i < checkedBoxes.length; i++) {
        checkedBoxes[i].addEventListener('click', undoToDoCompletion);
    }
    // edit toDo modal
    const editModalBtns = document.querySelectorAll('.fa-pen-to-square');
    for (let i = 0; i < editModalBtns.length; i++) {
        editModalBtns[i].addEventListener('click', instantiateEditModal);
    }
    // create toDo modal
    _.addToDoBtn.addEventListener('click', instantiateCreationModal);
    // create project modal
    _.addProjectBtn.addEventListener('click', instantiateProjectModal);
    // remove project modal
    const removeProjectBtns = document.querySelectorAll('.fa-circle-minus');
    for (let i = 0; i < removeProjectBtns.length; i++) {
        removeProjectBtns[i].addEventListener('click', removeProject);
    }
    
};


// selectedProject ex. defaults.listOfProjects[defaults.currentProjectIndex]
_.sidebar.addEventListener('click', loadProject);

export function loadProject (e) {
    if(e.target.classList.contains('otherProjects')){
        // setup
        const projIndex = e.target.getAttribute('data-index');
        defaults.currentProjectIndex = projIndex;
        _.table.textContent = '';
        // generateTableHeader 
        let tr = document.createElement('tr');
        tr.classList.add('titles');
        let thProjName = document.createElement('th');
        thProjName.classList.add('projName');

        if (defaults.listOfProjects[defaults.currentProjectIndex].getTitle().length > 0){
            thProjName.textContent = defaults.listOfProjects[defaults.currentProjectIndex].getTitle().substring(0,30);
        }
        else{
            thProjName.textContent = 'Unnamed';
        }
        let thDueDate = document.createElement('th');
        thDueDate.classList.add('dueDate');
        thDueDate.innerHTML = `Due Date <i class="fa-solid fa-calendar-day"></i>`;
        tr.appendChild(thProjName);
        tr.appendChild(thDueDate);
        _.table.appendChild(tr);
        // generate rows
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
    
        for (let i = 0; i < defaults.listOfProjects[defaults.currentProjectIndex].arr.length; i++) {
            _.table.appendChild(makeRow(defaults.listOfProjects[defaults.currentProjectIndex].arr[i]));
        }

        if(!_.toDoList.contains(_.addToDoBtn)){
            _.toDoList.appendChild(_.addToDoBtn);
        }

        // addEventListeners()
        addEventListeners();
    }
};

const deleteToDo = (e) => {
    const item = e.target;
    const todo = item.parentElement.parentElement;
    todo.remove();

    const removeFromArray = () => {
        let targetIndex = todo.getAttribute('data-index');
        let list = defaults.listOfProjects;
        let index = defaults.currentProjectIndex;

        for (let i = 0; i < list[index].arr.length; i++) {
            let id = list[index].arr[i].getID();
            if (id == targetIndex) {
                list[index].removeFromList(id);
                list[1].removeFromList(id);
            }
        }
        
    };
    removeFromArray();
};

const completeToDo = (e) => {
    const item = e.target;
    const todo = item.parentElement.parentElement;
    todo.classList.add('completed');
    todo.innerHTML = todo.innerHTML.replace('<i class="fa-regular fa-square"></i>', '<i class="fa-regular fa-square-check"></i>');
    addEventListeners();
};

const undoToDoCompletion = (e) => {
    const item = e.target;
    const todo = item.parentElement.parentElement;
    todo.classList.remove('completed');
    todo.innerHTML = todo.innerHTML.replace('<i class="fa-regular fa-square-check"></i>', '<i class="fa-regular fa-square"></i>');
    addEventListeners();
};

const instantiateEditModal = (e) => {

    const item = e.target;
    const todo = item.parentElement.parentElement;
    const targetIndex = todo.getAttribute('data-index');
    const shortHand = defaults.listOfProjects[defaults.currentProjectIndex];

    const getToDoInfo = () => {
        for (let i = 0; i < shortHand.arr.length; i++) {
            if (shortHand.arr[i].getID() == targetIndex) {
                let name = shortHand.arr[i].getTitle();
                let description = shortHand.arr[i].getDescription();
                let dueDate = shortHand.arr[i].getDueDate();
                let priority = shortHand.arr[i].getPriority();
                let id = i;
                return { name, description, dueDate, priority, id };
            }
        }
    };

    const toDoInfo = getToDoInfo();
    const form = createEditModal(toDoInfo.name, toDoInfo.description,
        toDoInfo.dueDate, toDoInfo.priority);

    _.body.appendChild(form.newModal);
    form.newModal.showModal();

    const submitEditBtn = document.querySelector('.submitEditBtn');
    const cancelEditBtn = document.querySelector('.cancelEditBtn');

    cancelEditBtn.addEventListener('click', function cancelEditModal(e) {
        e.preventDefault();
        form.newModal.close();
        _.body.removeChild(form.newModal);
        addEventListeners();
    });

    submitEditBtn.addEventListener('click', function submitEditModal(e) {
        e.preventDefault();

        // update Arr values

        shortHand.arr[toDoInfo.id].setTitle(form.taskName.value);
        shortHand.arr[toDoInfo.id].setDescription(form.taskDescription.value);
        shortHand.arr[toDoInfo.id].setDueDate(form.taskDueDate.value);
        shortHand.arr[toDoInfo.id].setPriority(form.taskPriority.value);

        // update table values
        todo.children[0].innerHTML = `<i class="fa-regular fa-square"></i> ${form.taskName.value}`;
        
        _.setPriorityColors(form.taskPriority.value, todo.children[0]);

        if (form.taskDueDate.value !== '') {
            let filteredDueDate = dateFilter(form.taskDueDate.value);
            todo.children[1].innerHTML = `${filteredDueDate} <i class="fa-regular fa-pen-to-square"></i><i class="fa-regular fa-trash-can"></i>`;
        }
        else {
            todo.children[1].innerHTML = `<i class="fa-regular fa-pen-to-square"></i><i class="fa-regular fa-trash-can"></i>`;
        }

        _.body.removeChild(form.newModal);
        addEventListeners();
    });
};

const instantiateCreationModal = (e) => {
    e.preventDefault();

    _.modal.showModal();

    // set default date value to now
    let dueDate = document.querySelector('#createTaskDueDate');
    dueDate.setAttribute("value", `${now()}`);

    _.modalCancelBtn.addEventListener('click', function cancelCreationModal() {
        _.modal.close();
    });

    _.modalSubmitBtn.addEventListener('click', addToDoToTable);
    addEventListeners();
};

const instantiateProjectModal = (e) => {

    e.preventDefault();

    const proj = createProjectModal();
    _.body.appendChild(proj.newModal);

    proj.newModal.showModal();

    const submitProjectBtn = document.querySelector('.submitProjectBtn');
    const cancelProjectBtn = document.querySelector('.cancelProjectBtn');

    cancelProjectBtn.addEventListener('click', function cancelProjectModal(e) {
        e.preventDefault();
        proj.newModal.close();
        _.body.removeChild(proj.newModal);
        addEventListeners();
    });

    submitProjectBtn.addEventListener('click', function submitProjectModal(e) {
        e.preventDefault();

        // create new project
        const newProj = Project(proj.projectName.value, defaults.projectCount);
        defaults.projectCount++;

        proj.newModal.close();
        _.body.removeChild(proj.newModal);

        // add new project to projects

        defaults.listOfProjects.push(newProj);

        // update html to show project

        const li = document.createElement('li');
        li.classList.add('project');
        li.classList.add('otherProjects');
        li.setAttribute('data-index', defaults.projectCount - 1);

        let name = proj.projectName.value.toLowerCase();
        name = name.charAt(0).toUpperCase() + name.slice(1);
        if (name.length > 12) {
            name = name.substring(0, 10) + '...';
        }
        li.innerHTML = `<i class="fa-solid fa-masks-theater"></i>${name} <i class="fa-solid fa-circle-minus"></i>`;
        _.projects.appendChild(li);

        // update misc
        defaults.save();
        addEventListeners();
    });
};


const removeProject = (e) => {
    let projects = e.target.parentElement.parentElement;
    let project = e.target.parentElement;
    for (let i = 0; i < defaults.listOfProjects.length; i++) {
        if (defaults.listOfProjects[i].getIndex() == project.getAttribute('data-index')) {
            
            // splice out project
            let removedList = defaults.listOfProjects[i].arr;
            let removedListIndexes = [];
            
            // update everythingProj to remove these toDos
            for(let j = 0; j < removedList.length; j++){
                removedListIndexes.push(removedList[j].getID());
            }
            
            const removeFromArray = () => {
                let list = defaults.listOfProjects;
                let length = removedListIndexes.length;
                for(let k = 0; k < length; k++){
                    list[i].removeFromList(removedListIndexes[k]);
                    list[1].removeFromList(removedListIndexes[k]);
                }
            };
            removeFromArray();

        }
    }
    projects.removeChild(project);
    _.table.textContent = 'Please select a project';
    if(_.toDoList.contains(_.addToDoBtn)){
        _.toDoList.removeChild(_.addToDoBtn);
    }
};