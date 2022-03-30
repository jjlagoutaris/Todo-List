import { Project } from './project';
import { Todo } from './todo';

const listOfProjects = [];
let currentProjectIndex = 0;
let projectCount = 0;

let sampleObj = Todo('Default Task', 'Default Description', "2022-03-29T03:52", "High", 20, "Everything");
let sampleObj2 = Todo('Today Task', 'Default Description', "2022-03-29T03:52", "High", 30, "Everything");
let sampleObj3 = Todo('Week Task', 'Default Description', "2022-03-29T03:52", "High", 40, "Everything");

const defaultProj = Project("Default", "The default grouping for toDos", projectCount);
listOfProjects.push(defaultProj);
projectCount++;
defaultProj.addToList(sampleObj);

const everythingProj = Project("Everything", "Every toDo", projectCount);
projectCount++;
listOfProjects.push(everythingProj);
everythingProj.addToList(sampleObj);
everythingProj.addToList(sampleObj2);
everythingProj.addToList(sampleObj3);

const todaysToDos = Project("Today's 2Dos", "Today's Tasks", projectCount);
projectCount++;
listOfProjects.push(todaysToDos);


const thisWeeksToDos = Project("This Week's 2Dos", "This week's projects", projectCount);
projectCount++;
listOfProjects.push(thisWeeksToDos);

export default { listOfProjects, currentProjectIndex, projectCount,
    defaultProj, todaysToDos, thisWeeksToDos };