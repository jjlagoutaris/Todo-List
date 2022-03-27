import { Temporal } from "@js-temporal/polyfill";

export const now = () => {
    return Temporal.Now.zonedDateTimeISO().toPlainDateTime().round({smallestUnit: "minute", roundingMode: "floor"}).toString();
};

export const today = () => {
    return Temporal.Now.zonedDateTimeISO().toPlainDate().toString();
};

export const thisWeek = () => {
    let today = Temporal.Now.zonedDateTimeISO()
    let oneWeekFromToday = today.add({ days: 7});
    return oneWeekFromToday.toPlainDate();
};

export const todayCheck = (yearCheck, monthCheck, dayCheck) => {
    return Temporal.PlainDate.from({year: yearCheck, month: monthCheck, day: dayCheck}).equals(today());
};

export const thisWeekCheck = (yearCheck, monthCheck, dayCheck) => {

    let convertedDate = Temporal.PlainDate.from({year: yearCheck, month: monthCheck, day: dayCheck});
    let difference = convertedDate.until(thisWeek()).days;

    if (+difference <= 7 && +difference >= 0){
        return true;
    }
    else{
        return false;
    }
};

// export default { now, today, thisWeek };