import { Project } from './project';
import { Todo } from './todo';


localStorage.clear();
// const lists_key = 'lists';
// const current_list_id = 'listID';

const listOfProjects = JSON.parse(localStorage.getItem('lists')) || [];
let currentProjectIndex = localStorage.getItem('listID') || 0;

// save();

console.log(localStorage);

let a=Todo('hi', 'hi', '2022-03-22T03:45', 'High', 10);

// const listOfProjects = [];
// let currentProjectIndex = 0;
let projectCount = 0;

const defaultProj = Project("General", projectCount);
projectCount++;
listOfProjects.push(defaultProj);

const everythingProj = Project("Everything", projectCount);
projectCount++;
everythingProj.addToList(a);
listOfProjects.push(everythingProj);

const todaysToDos = Project("Today's 2Dos", projectCount);
projectCount++;
listOfProjects.push(todaysToDos);

const thisWeeksToDos = Project("Week's 2Dos", projectCount);
projectCount++;
listOfProjects.push(thisWeeksToDos);


export default { listOfProjects, currentProjectIndex, projectCount,
    defaultProj, todaysToDos, thisWeeksToDos };