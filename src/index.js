import './style.scss';
// import { mdiCheckboxBlankOutline, mdiCheckboxMarkedOutline } from '@mdi/js';
// // import { mdiCheckboxMarkedOutline } from '@mdi/js';
import logo from './img/todoList.png';
import Todo from './todo.js';
import Project from './project.js';

let todoOne = Todo("Take out trash", "self-explanatory", "11/12/13", "top");

let projOne = Project("Chores", "Responsibilities within and outside the household");
projOne.addToList(todoOne);

// let td = document.querySelectorAll('td');
// td.forEach(() => {

// });