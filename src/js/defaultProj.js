import Project from './project';

const listOfProjects = [];
let currentProjectIndex = 0;
const defaultProj = Project("Default", "The default grouping for To Dos", 0);
listOfProjects.push(defaultProj);

export { listOfProjects, currentProjectIndex, defaultProj };