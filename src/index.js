import './style.scss';
import Todo from './todo.js';
import Project from './project.js';

let todoOne = Todo("Take out trash", "self-explanatory", "11/12/13", "top");

let projOne = Project("Chores", "Responsibilities within and outside the household");
projOne.addToList(todoOne);
projOne.arr[0].setTitle("Fuck bitches");

console.log(projOne.arr[0].getTitle());
