const leapYears = function(year) {
    // const divisbleByFour = year % 4 === 0;
    // const divByHun = year % 100 === 0;
    // const divByFour = year % 400 === 0;
    
    // if(
    //     divisbleByFour && 
    //     (!divByHun || divByFour)
    // ) {
    //     return true;
    // } else {
    //     return false;
    // }
    
    if(year % 4 === 0 || (year % 100 !== 0 || year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
};


// Do not edit below this line
module.exports = leapYears;
