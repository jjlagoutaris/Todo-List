import { Project } from './project';
import { Todo } from './todo';

const listOfProjects = [];
let currentProjectIndex = 0;
let projectCount = 0;

// const sampleObj = Todo('Play Clank', 'Boardgames rule', '2022-03-09T15:32', 'High', 10);

const defaultProj = Project("General", projectCount);
projectCount++;
// defaultProj.addToList(sampleObj);
listOfProjects.push(defaultProj);

const everythingProj = Project("Everything", projectCount);
projectCount++;
// everythingProj.addToList(sampleObj);
listOfProjects.push(everythingProj);

const todaysToDos = Project("Today's 2Dos", projectCount);
projectCount++;
listOfProjects.push(todaysToDos);

const thisWeeksToDos = Project("Week's 2Dos", projectCount);
projectCount++;
listOfProjects.push(thisWeeksToDos);

export default { listOfProjects, currentProjectIndex, projectCount,
    defaultProj, todaysToDos, thisWeeksToDos };