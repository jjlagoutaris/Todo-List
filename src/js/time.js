import { Temporal } from "@js-temporal/polyfill";

// 2022-03-16T03:52 => 03/16/2022 @ 03:52 AM
export const dateFilter = (date) => {
    let splitTimeAndDate = date.split('T');
    let splitDate = splitTimeAndDate[0].split('-');
    let splitTime = splitTimeAndDate[1].split(':');
    let fixedHour = 0;
    if(splitTime[0] >= 0 && splitTime[0] < 12){
        fixedHour = splitTime[0]+ ':' + splitTime[1]+'AM';
    }
    else{
        fixedHour = splitTime[0]+ ':' + splitTime[1]+'PM';  
    }
    let fixedDate = splitDate[1] + '/' + splitDate[2] + '/' + splitDate[0];
    let fixedTimeAndDate =  fixedDate + ' @ ' + fixedHour;
    return fixedTimeAndDate;
}
export const convertDate = (date) => {
    let dd_date = date.value.substring(0, 10);

    let dd_year = dd_date.substring(0, 4);
    let dd_month = dd_date.substring(5, 7);
    let dd_day = dd_date.substring(8, 10);
    
    return { dd_date, dd_year, dd_month, dd_day };
};

// Temporal

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