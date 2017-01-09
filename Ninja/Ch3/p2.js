function add() {
  var answer = 0;
  for (i=0;i<arguments.length;i++) {
    answer += arguments[i];
  }
  return answer;
}
var answer = add(1,2)+add(1,4,6,7,2);
console.log(answer);
