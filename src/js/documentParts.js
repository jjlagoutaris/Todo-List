const body = document.querySelector('body');
const todaysToDos = document.querySelector('.today');
const thisWeeksToDos = document.querySelector('.week');
const categories = document.querySelector('.categories');
const toDoList = document.querySelector('.todoList');
const table = document.querySelector('table');
const tableTitle = document.querySelector('.titles.projName');
const tableDueDate = document.querySelector('.titles.dueDate');
const addToDoBtn = document.querySelector('.addToDoBtn');
const modal = document.querySelector('#modal');
const editModal = document.querySelector('#editModal');
const creationModalTaskName = document.querySelector('.createTaskName');
const creationModalTaskDescription = document.querySelector('.createTaskDescription');
const creationModalTaskDueDate = document.querySelector('.createTaskDueDate');
const creationModalTaskPriority = document.querySelector('.createTaskPriority');
const modalCancelBtn = document.querySelector('.createModalCancelBtn');
const modalSubmitBtn = document.querySelector('.createModalSubmitBtn');
const toDoCounter = 0;

export default { body, todaysToDos, thisWeeksToDos, categories, 
toDoList, table, tableTitle, tableDueDate, addToDoBtn, toDoCounter, modal, 
creationModalTaskName, creationModalTaskDescription, creationModalTaskDueDate,
creationModalTaskPriority, editModal, modalCancelBtn, modalSubmitBtn };