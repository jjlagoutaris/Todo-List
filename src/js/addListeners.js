import _ from './documentParts';
import defaults from './defaultProjects';
import addToDoToTable from './addToDo';
import createEditModal from './createEditModal';
import { dateFilter } from './dateFilter';
import { now } from './currentDate';
import createProjectModal from './createProjectModal';
import Project from './project';
// import pageGeneration from './projectPageGeneration';

// function viewContents () {
//     let list = defaults.listOfProjects;

//     for (let i = 0; i < list.length; i++){
//         console.log(list[i].getTitle());
//         for(let j = 0; j < list[i].arr.length; j++){
//             console.log(list[i].arr[j].getID());
//         }
//     }
//     console.log('stop');
// }

const addEventListeners = () => {
    // viewContents();
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
}

const deleteToDo = (e) => {
    const item = e.target;
    const todo = item.parentElement.parentElement;
    todo.remove();

    const removeFromArray = () => {
        let targetIndex = todo.getAttribute('data-index');
        for (let i = 0; i < defaults.listOfProjects[defaults.currentProjectIndex].arr.length; i++) {
            if (defaults.listOfProjects[defaults.currentProjectIndex].arr[i].getID() == targetIndex) {
                defaults.listOfProjects[defaults.currentProjectIndex].removeFromList(i);
            }
        }
    };

    removeFromArray();
}

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
}

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
                return {name, description, dueDate, priority};
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

    submitEditBtn.addEventListener('click', function submitEditModal(e){
        e.preventDefault();
        for (let i = 0; i < shortHand.arr.length; i++) {
            if (shortHand.arr[i].getID() == targetIndex) {

                // update arr
                shortHand.arr[i].setTitle(form.taskName.value);
                shortHand.arr[i].setDescription(form.taskDescription.value);
                shortHand.arr[i].setDueDate(form.taskDueDate.value);
                shortHand.arr[i].setPriority(form.taskPriority.value);

                // update today/this week projects
                // if(defaults.listOfProjects[2].arr[i].includes);

                // update table

                todo.children[0].innerHTML = `<i class="fa-regular fa-square"></i> ${form.taskName.value}`;
                if (form.taskDueDate.value !== '') {
                    let filteredDueDate = dateFilter(form.taskDueDate.value);
                    todo.children[1].innerHTML = `${filteredDueDate} <i class="fa-regular fa-pen-to-square"></i><i class="fa-regular fa-trash-can"></i>`;
                }
                else {
                    todo.children[1].innerHTML = `<i class="fa-regular fa-pen-to-square"></i><i class="fa-regular fa-trash-can"></i>`;
                }
            }
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

    _.modalCancelBtn.addEventListener('click', function cancelCreationModal () {
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
        const newProj = Project(proj.projectName.value, proj.projectDescription.value, defaults.projectCount);
        defaults.projectCount++;

        // add new project to projects
    
        defaults.listOfProjects.push(newProj);
        // for(let i = 0; i < defaults.listOfProjects.length; i++){
        //     console.log(defaults.listOfProjects[i].getTitle());
        //     console.log(defaults.listOfProjects[i].getIndex());
        // }

        // update html to show project

        const li = document.createElement('li');
        li.classList.add('project');
        li.setAttribute('data-index', --defaults.projectCount);

        let name = proj.projectName.value.toLowerCase();
        name = name.charAt(0).toUpperCase() +  name.slice(1);
        if (name.length > 12){
            name = name.substring(0, 10) + '...';
        }
        li.innerHTML = `<a><i class="fa-solid fa-basketball"></i>${name} <i class="fa-solid fa-circle-minus"></i></a>`;
        _.projects.appendChild(li);

        // create removal button for project

        const removeProjectBtn = document.querySelector('.fa-circle-minus');
        removeProjectBtn.addEventListener('click', (e) => {
            let projects = e.target.parentElement.parentElement.parentElement;
            let project = e.target.parentElement.parentElement;
            for(let i = 0; i < defaults.listOfProjects.length; i++){
                if(defaults.listOfProjects[i].getIndex() == project.getAttribute('data-index')){
                    defaults.listOfProjects.splice(i, 1);
                }
            }
            projects.removeChild(project);
        });

        // update misc
        _.body.removeChild(proj.newModal);
        addEventListeners();
    });
};

export default addEventListeners;