const Project = (title, description, index) => {

    let arr = [];

    const getTitle = () => title;
    const getDescription = () => description;
    const getIndex = () => index;
    
    const setTitle = (newTitle) => title = newTitle; 
    const setDescription = (newDescription) => description = newDescription;
    const setIndex = (newIndex) => index = newIndex;

    const addToList = (obj) => arr.push(obj);
    const removeFromList = (index) => {
        if(index > -1){
            arr.splice(index, 1);
        }
    }

    return {getTitle, getDescription, getIndex, setTitle, 
        setDescription, setIndex, arr, addToList, removeFromList};
};

export default Project;