import { Project } from './project';
import { Todo } from './todo';

const listOfProjects = [];
let currentProjectIndex = 0;
let projectCount = 0;

let sampleObj = Todo('Sample Task', 'Default Description', "2022-03-29T03:52", "High", 0, "Everything");

const defaultProj = Project("General", projectCount);
listOfProjects.push(defaultProj);
projectCount++;
// defaultProj.addToList(sampleObj);

const everythingProj = Project("Everything", projectCount);
projectCount++;
listOfProjects.push(everythingProj);
// everythingProj.addToList(sampleObj);

const todaysToDos = Project("Today's 2Dos", projectCount);
projectCount++;
listOfProjects.push(todaysToDos);

const thisWeeksToDos = Project("Week's 2Dos", projectCount);
projectCount++;
listOfProjects.push(thisWeeksToDos);

export default { listOfProjects, currentProjectIndex, projectCount,
    defaultProj, todaysToDos, thisWeeksToDos };