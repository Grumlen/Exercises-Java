function isEven(value) {
  if (value==0) return "True";
  else if (value==1) return "False";
  else if (value<0) return isEven(value*=-1);
  return isEven(value-=2);
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
