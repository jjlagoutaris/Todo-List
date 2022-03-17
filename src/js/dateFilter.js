// 2022-03-16 03:52 => 03/16/2022 @ 03:52 AM
const dateFilter = (date) => {
    let splitTimeAndDate = date.split(' ');
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

export default dateFilter;