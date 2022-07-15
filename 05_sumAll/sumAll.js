const sumAll = function(num1, num2) {

    if(num1 < 0 || num2 < 0){
        return "ERROR";
    } else if (!Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR";
    }

    let num3 = num1 + num2;
    console.log(num3);
    let newNum = 0;


    for(let i = 0; i < num3; i++){
        newNum += i;
    }

    return newNum;
};

// Do not edit below this line
module.exports = sumAll;
