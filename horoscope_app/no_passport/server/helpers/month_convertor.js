module.exports = (month, day) => {
    var monthNum;
    switch(month){
        case 'Jan':
            monthNum = '01';
            break;
        case 'Feb':
            monthNum = '02';
            break;
        case 'Mar':
            monthNum = '03';
            break;
        case 'Apr':
            monthNum = '04';
            break;
       case 'May':
            monthNum = '05';
            break;
       case 'Jun':
            monthNum = '06';
            break;
       case 'Jul':
            monthNum = '07';
            break;
       case 'Aug':
            monthNum = '08';
            break;
       case 'Sep':
            monthNum = '09';
            break;
       case 'Oct':
            monthNum = '10';
            break;
       case 'Nov':
            monthNum = '11';
            break;
       case 'Dec':
            monthNum = '12';
            break;
    }
    return monthNum + "/" + day
}