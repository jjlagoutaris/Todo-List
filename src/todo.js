const Todo = (title, description, dueDate, priority, id) => {
    
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const getID = () => id;

    const setTitle = (newTitle) => title = newTitle; 
    const setDescription = (newDescription) => description = newDescription;
    const setDueDate = (newDueDate) => dueDate = newDueDate;
    const setPriority = (newPriority) => priority = newPriority;
    const setID = (newID) => id = newID;

    return {getTitle, getDescription, getDueDate, getPriority, getID, setTitle, setDescription, setDueDate, setPriority, setID};
};

export default Todo;