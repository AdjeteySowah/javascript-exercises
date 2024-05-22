const leapYears = function(year) {
    let startSliceAt = (year).toString().length-2;
    let endSliceAt = (year).toString().length;

    if (year % 4 === 0 && !((year).toString().slice(startSliceAt, endSliceAt) === "00") ||
    ((year).toString().slice(startSliceAt, endSliceAt) === "00") && year % 400 === 0 ){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
