var arr = [1,3,5,7];
function addRec(array,index) {
  if (!index) {var index=0;};
  if (array[index]) { return array[index]+addRec(array,index+1); }
  else return 0;
}
var sum = addRec(arr);
console.log(sum);
