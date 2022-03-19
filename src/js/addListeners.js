import deleteToDo from "./deleteToDo";

const addEventListeners = () => {
    const trashBtns = document.querySelectorAll('.fa-trash-can');
    for(let i = 0; i < trashBtns.length; i++){
        trashBtns[i].addEventListener('click', deleteToDo);
    }
}

export default addEventListeners; 