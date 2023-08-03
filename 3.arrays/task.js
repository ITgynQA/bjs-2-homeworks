

function compareArrays(array1, array2){

 arr1 = [...array1];
 arr2 = [...array2];

  let isEqual = arr1.length === arr2.length &&
            arr1.every((value, index) => value === arr2[index])
 return isEqual;

}


 function getUsersNamesInAgeRange(users, gender){
  if(users.length === 0)
      return 0;
  if (gender !== "мужской" && gender !== "женский")
     return 0;
 users = [...users];

 //const sum = users.filter(user => user.gender === gender).map(user => user.age);
  // const result = sum.reduce((acc, number) => acc + number, 0);
  // const length = sum.length;
  // return result/length;

return users.filter(user => user.gender === gender)
    .map(user => user.age)
    .reduce((acc, age, index, arr) => acc + age / arr.length, 0);

}


