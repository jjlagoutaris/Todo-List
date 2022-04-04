export const Project = (title, index) => {

    let arr = [];

    const getTitle = () => title;
    const getIndex = () => index;
    
    const setTitle = (newTitle) => title = newTitle; 
    const setIndex = (newIndex) => index = newIndex;

    const addToList = (obj) => arr.push(obj);
    const removeFromList = (targetID) => {
        let index;
        for(let i = 0; i < arr.length; i++){
            if (arr[i].getID() == targetID){
                index = i;
            }
            if(index > -1){
                arr.splice(index, 1);
            }
        }
    };

    const filterTodaysToDos = () => {
        const todaysToDos = arr.filter(toDo => toDo.isTodayCheck(toDo.convertedDate(toDo.getDueDate())));
        return todaysToDos;
    };
    const filterThisWeeksToDos = () => {
        const thisWeeksToDos = arr.filter(toDo => toDo.isThisWeekCheck(toDo.convertedDate(toDo.getDueDate())));
        return thisWeeksToDos;
    }

    return {getTitle, getIndex, setTitle, 
        setIndex, arr, addToList, removeFromList,
        filterTodaysToDos, filterThisWeeksToDos,
    };
};