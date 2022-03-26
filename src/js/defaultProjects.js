import Project from './project';
import Todo from './todo';

const listOfProjects = [];
let currentProjectIndex = 0;
let projectCount = 0;

const defaultProj = Project("Default", "The default grouping for toDos", projectCount);
listOfProjects.push(defaultProj);
projectCount++;
let sampleObj = Todo('Default Task', 'Default Description', "2022-03-16T03:52", "High", 50);
defaultProj.addToList(sampleObj);

const everythingProj = Project("Everything", "Every toDo", projectCount);
projectCount++;
listOfProjects.push(everythingProj);

const todaysToDos = Project("Today", "Today's Tasks", projectCount);
projectCount++;
listOfProjects.push(todaysToDos);
let sampleObj2 = Todo('Today Task', 'Default Description', "2022-03-16T03:52", "High", 50);
todaysToDos.addToList(sampleObj2);

const thisWeeksToDos = Project("This Week", "This week's projects", projectCount);
projectCount++;
listOfProjects.push(thisWeeksToDos);
let sampleObj3 = Todo('Week Task', 'Default Description', "2022-03-16T03:52", "High", 50);
thisWeeksToDos.addToList(sampleObj3);

export default { listOfProjects, currentProjectIndex, defaultProj, todaysToDos, thisWeeksToDos };