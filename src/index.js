import './style.scss';
import logo from './todoList.png';
import Todo from './todo.js';
import Project from './project.js';

let todoOne = Todo("Take out trash", "self-explanatory", "11/12/13", "top");

let projOne = Project("Chores", "Responsibilities within and outside the household");
projOne.addToList(todoOne);