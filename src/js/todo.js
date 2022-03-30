import { Temporal } from "@js-temporal/polyfill";
import { today, thisWeek } from "./time";

export const Todo = (title, description, dueDate, priority, id) => {

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

    // pass in getDueDate() to get Temporal-friendly date format
    const convertedDate = (calendarDate) => {
        let dd_date = calendarDate.substring(0, 10);
        return { dd_date };
    };

    const isTodayCheck = (convertedDate) => {
        let dateHolder = convertedDate.dd_date;
        let date = dateHolder.substring(0, 10);
        let yr = date.substring(0, 4);
        let month = date.substring(5, 7);
        let day = date.substring(8, 10);
        return Temporal.PlainDate.from({year: yr, month: month, day: day}).equals(today());
    };

    const isThisWeekCheck = (convertedDate) => {
        let dateHolder = convertedDate.dd_date;
        let date = dateHolder.substring(0, 10);
        let yr = date.substring(0, 4);
        let month = date.substring(5, 7);
        let day = date.substring(8, 10);

        let temporalDateFormat = Temporal.PlainDate.from({year: yr, month: month, day: day});
        let difference = temporalDateFormat.until(thisWeek()).days;

        if (+difference <= 7 && +difference >= 0){
            return true;
        }
        else{
            return false;
        }
    };

    return { getTitle, getDescription, getDueDate, getPriority, getID, setTitle, setDescription, 
        setDueDate, setPriority, setID, convertedDate, isTodayCheck, isThisWeekCheck, 
    };
};