import './style.scss';
import './js/addToDo';
import _ from './js/documentParts';
import './js/projectPageGeneration';
import { addEventListeners } from './js/addListeners';
import defaults from './js/defaultProjects';

export function save() {
  localStorage.setItem(defaults.lists_key, JSON.stringify(defaults.listOfProjects));
  localStorage.setItem(defaults.current_list_id, defaults.currentProjectIndex);
  console.log(localStorage);
  console.log(defaults.listOfProjects.length);
}

// export function render() {
//     if(currentProjectIndex == 0){
//         generateDefaultToDos();
//     }
// }

// isolate the elements into which the changes go
// 

// if(!localStorage.getItem('projects')){
//   populateStorage();
// } else{
//   retrieveStorage();
// }

// function retrieveStorage() {
//   let listOfProjects_deserialized = JSON.parse(localStorage.getItem('projects'));
//   console.log(listOfProjects_deserialized);
// }

// function populateStorage() {
//   let listOfProjects_serialized = JSON.stringify(defaults.listOfProjects);
//   localStorage.setItem('projects', listOfProjects_serialized);
//   console.log(listOfProjects_serialized);
  
//   retrieveStorage();
// }

// populateStorage();

// defaults.listOfProjects.onchange = populateStorage;

// The following will permaclear the localStorage
// localStorage.clear(); 


addEventListeners();
