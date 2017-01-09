var lanes = [2,1,2,1,2,1]; // 0: no cars, 1: car in lane, 2: car in oncoming lane, 3: cars in both lanes
function crash(array) {
  var sum = 0, crashes = 0;
  for (i=1;i<array.length;i++) {
    if (array[i-1]>1) sum++;
    if (array[i]%2==1) crashes += sum;
  }
  console.log(crashes);
}
crash(lanes);
