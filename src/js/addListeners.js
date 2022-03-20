import _ from './documentParts';
import { listOfProjects, currentProjectIndex } from './defaultProj';
import addToDoToTable from './addToDo';

const addEventListeners = () => {
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
        editModalBtns[i].addEventListener('click', initiateEditModal);
    }
    // create toDo modal
    _.addToDoBtn.addEventListener('click', initiateCreationModal);
}

const deleteToDo = (e) => {
    const item = e.target;
    const todo = item.parentElement.parentElement;
    todo.remove();

    const removeFromArray = () => {
        let targetIndex = todo.getAttribute('data-index');
        for (let i = 0; i < listOfProjects[currentProjectIndex].arr.length; i++) {
            if (listOfProjects[currentProjectIndex].arr[i].getID() == targetIndex) {
                listOfProjects[currentProjectIndex].removeFromList(i);
            }
        }
    };

    removeFromArray();
}

const completeToDo = (e) => {
    const item = e.target;
    const todo = item.parentElement.parentElement;
    todo.classList.add('completed');
    const innerHTML = todo.innerHTML;
    todo.innerHTML = innerHTML.replace('<i class="fa-regular fa-square"></i>', '<i class="fa-regular fa-square-check"></i>');
    addEventListeners();
};

const undoToDoCompletion = (e) => {
    const item = e.target;
    const todo = item.parentElement.parentElement;
    todo.classList.remove('completed');
    const innerHTML = todo.innerHTML;
    todo.innerHTML = innerHTML.replace('<i class="fa-regular fa-square-check"></i>', '<i class="fa-regular fa-square"></i>');
    addEventListeners();
}

const initiateEditModal = (e) => {
    const item = e.target;
    const todo = item.parentElement.parentElement;
    _.modal.showModal();
};

// const cancelEditModal = () => {

// };

const initiateCreationModal = () => {
    _.modal.showModal();
    _.modalCancelBtn.addEventListener('click', cancelCreationModal);
    _.modalSubmitBtn.addEventListener('click', addToDoToTable);
};

const cancelCreationModal = () => {
    _.modal.close();
}

export default addEventListeners; 