const Project = (title, description) => {

    let arr = [];

    const getTitle = () => title;
    const getDescription = () => description;
    
    const setTitle = (newTitle) => title = newTitle; 
    const setDescription = (newDescription) => description = newDescription;

    const addToList = (list) => arr.push(list);

    return {getTitle, getDescription, setTitle, setDescription, arr, addToList};
};

export default Project;