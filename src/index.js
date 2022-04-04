import './style.scss';
import './js/addToDo';
import _ from './js/documentParts';
import './js/projectPageGeneration';
import { addEventListeners } from './js/addListeners';
import defaults from './js/defaultProjects';

if(!localStorage.getItem('projects')){
  populateStorage();
} else{
  retrieveStorage();
}

function retrieveStorage() {
  let listOfProjects_deserialized = JSON.parse(localStorage.getItem('projects'));
  console.log(listOfProjects_deserialized);
}

function populateStorage() {
  let listOfProjects_serialized = JSON.stringify(defaults.listOfProjects);
  localStorage.setItem('projects', listOfProjects_serialized);
  console.log(listOfProjects_serialized);
  
  retrieveStorage();
}

populateStorage();

console.log(localStorage);

defaults.listOfProjects.onchange = populateStorage;

// The following will permaclear the localStorage
// localStorage.clear(); 


addEventListeners();
