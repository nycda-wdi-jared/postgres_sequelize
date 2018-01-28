var monthConvertor = require('./month_convertor.js')

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

module.exports = (startDate, stopDate) => {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
        var arrDate = new Date(currentDate)
        dateArray.push(monthConvertor(arrDate.toString().split(" ")[1], arrDate.toString().split(" ")[2]));
        currentDate = currentDate.addDays(1);
    }
    return dateArray;
}