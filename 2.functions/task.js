
function getArrayParams(...arr) {
 var numbers = [...arr];
if(arr.length === 0)
        return false;
  var minValue = Math.min.apply(null, numbers);
  var maxValue = Math.max.apply(null, numbers);
  var getAverage = (numbers) => {
    var sum = numbers.reduce((acc, number) => acc + number, 0);
    return (sum / numbers.length).toFixed(2);
  };
return {min:minValue, max:maxValue, avg:parseFloat(getAverage(numbers))};
}



function summElementsWorker(...arr){
  const numbers = [...arr];
   if(numbers.length === 0)
      return 0;
  const getAverage = (numbers) => {
  const sum = numbers.reduce((acc, number) => acc + number, 0);
  return sum;
};
 return getAverage(numbers);
}




function differenceMaxMinWorker(...arr){
  const numbers = [...arr];
  if(numbers.length === 0)
    return 0;
  const differenceValue = Math.max.apply(null, numbers) - Math.min.apply(null, numbers);
  return differenceValue;
};



function differenceEvenOddWorker(...arr){
   if(arr.length === 0)
      return 0;
 let sumEvenElement = 0;
 let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        sumOddElement += arr[i];
    } else {
       sumEvenElement += arr[i];
    }
  }
 let differenceEvenOdd = sumEvenElement - sumOddElement;
   return differenceEvenOdd;
};




function averageEvenElementsWorker(...arr){
  if(arr.length === 0)
        return 0;
 let sumEvenElement = 0;
 let countEvenElement = 0;
 for (let i = 0; i < arr.length; i++) {
       if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
         countEvenElement ++;
       }
    }
  let averageEvenElements =  sumEvenElement / countEvenElement;
  return averageEvenElements;
};



function makeWork(arr,func){
  if(arr.length === 0)
        return false;
  arr = [...arr];
  let a;
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arr.length; i++) {
     a = func(...arr[i])
     if(a > maxWorkerResult){
        maxWorkerResult = a;
     }
    }
return maxWorkerResult;
};
