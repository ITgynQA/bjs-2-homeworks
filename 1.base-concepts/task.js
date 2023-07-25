"use strict"

function solveEquation(a,b,c){
    if(a === 0)
        return false;
    let D = Math.pow (b, 2) - 4 * a * c;
    let result = [];

    if(D < 0){
    result = [];
    }
    else if(D === 0){
        result = [(-b + Math.sqrt(D)) / (2 * a)];
    }
    else if(D > 0){
        result = [];
        result.push((-b + Math.sqrt(D)) / (2 * a));
        result.push((-b - Math.sqrt(D)) / (2 * a));
    }
    return result;
}





function calculateTotalMortgage(percent,contribution,amount,countMonths){

 let P = percent/ 100 / 12;

 let S = amount - contribution;

 let n = countMonths ;

 let totalAmount = n * (S * (P + (P / (Math.pow ((1 + P),n) - 1))));

return totalAmount.toFixed(2);
}


