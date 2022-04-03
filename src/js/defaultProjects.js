import { Project } from './project';

const listOfProjects = [];
let currentProjectIndex = 0;
let projectCount = 0;

const defaultProj = Project("General", projectCount);
listOfProjects.push(defaultProj);
projectCount++;

const everythingProj = Project("Everything", projectCount);
projectCount++;
listOfProjects.push(everythingProj);

const todaysToDos = Project("Today's 2Dos", projectCount);
projectCount++;
listOfProjects.push(todaysToDos);

const thisWeeksToDos = Project("Week's 2Dos", projectCount);
projectCount++;
listOfProjects.push(thisWeeksToDos);

export default { listOfProjects, currentProjectIndex, projectCount,
    defaultProj, todaysToDos, thisWeeksToDos };