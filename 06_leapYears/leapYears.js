const leapYears = function(year) {

    // delt på 4 = true,
    //delt på 100 = false, 
    // hvis de ikke kan deles på 400 = true

    return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0);
};

// Do not edit below this line
module.exports = leapYears;
