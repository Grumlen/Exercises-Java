var numbers = [1,3,5,7];
function addRec(array) {
  if (array.length>0) {
    return array[0] + addRec(array.splice(1));
  }
  else return 0;
 }
console.log(addRec(numbers));
