const body = document.querySelector('body');

const sidebar = document.querySelector('.sidebar');
const todaysToDos = document.querySelector('.today');
const thisWeeksToDos = document.querySelector('.week');
const defaultProject = document.querySelector('.defaultProject');
const projects = document.querySelector('#projectsContainer');

const addProjectBtn = document.querySelector('.addProjectBtn');
const addToDoBtn = document.querySelector('.addToDoBtn');

const toDoList = document.querySelector('.todoList');
const table = document.querySelector('table');
const tableTitle = document.querySelector('.titles.projName');
const tableDueDate = document.querySelector('.titles.dueDate');


const modal = document.querySelector('#modal');
const editModal = document.querySelector('#editModal');
const creationModalTaskName = document.querySelector('.createTaskName');
const creationModalTaskDescription = document.querySelector('.createTaskDescription');
const creationModalTaskDueDate = document.querySelector('.createTaskDueDate');
const creationModalTaskPriority = document.querySelector('.createTaskPriority');
const modalCancelBtn = document.querySelector('.createModalCancelBtn');
const modalSubmitBtn = document.querySelector('.createModalSubmitBtn');

const toDoCounter = 0;

const setPriorityColors = (value, el) => {
  if(value === 'High'){
    el.style = 'border-left: 10px solid red; border-radius: 5px;';
  }
  else if(value === 'Normal'){
    el.style = 'border-left: 10px solid yellow; border-radius: 5px;';
  }
  else if(value === 'Low'){
      el.style = 'border-left: 10px solid green; border-radius: 5px;';
  }
};

const plusCircleDiv = document.getElementById('plusCircleDiv');

export default {

  sidebar, body, todaysToDos, thisWeeksToDos, projects, defaultProject,
  toDoList, table, tableTitle, tableDueDate, addToDoBtn, toDoCounter, modal,
  creationModalTaskName, creationModalTaskDescription, creationModalTaskDueDate,
  creationModalTaskPriority, editModal, modalCancelBtn, modalSubmitBtn, addProjectBtn, setPriorityColors, plusCircleDiv

};