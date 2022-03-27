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

// 03/16/2022 @ 03:52 AM => 2022-03-26T11:46
// export const undoDateFilter = (date) => {
//     let splitDateAndTime = date.split(' @ ');
//     let splitDate = splitDateAndTime[0].split('/');
//     let splitTimeAndPeriod = splitDateAndTime[1].split(' ');
//     let splitTime = splitTimeAndPeriod[0].split(':');
//     let period = splitTimeAndPeriod[1];
//     let fixedTime;
//     if (period === 'PM'){
//         fixedTime = ((+splitTime[0] + 12)+':'+splitTime[1]).toString();
//     }
//     else{
//         fixedTime = splitTime[0]+':'+splitTime[1];
//     }
//     let fixedDateAndTime = splitDate[2] + '-' + splitDate[0] + '-' + splitDate[1] + 'T' + fixedTime;
//     return fixedDateAndTime;
// }