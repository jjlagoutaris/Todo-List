const body = document.querySelector('body');
const todaysProjects = document.querySelector('.today');
const thisWeeksProjects = document.querySelector('.week');
const categories = document.querySelector('.categories');
const toDoList = document.querySelector('.todoList');
const table = document.querySelector('table');
const tableTitle = document.querySelector('.titles.projName');
const tableDueDate = document.querySelector('.titles.dueDate');
const addToDoBtn = document.querySelector('.addToDoBtn');
const toDoCounter = 0;

export default {body, todaysProjects, thisWeeksProjects, categories, 
toDoList, table, tableTitle, tableDueDate, addToDoBtn, toDoCounter};