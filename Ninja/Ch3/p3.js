var myMath = {
  add: function() {
    var answer = 0;
    for (i=0;i<arguments.length;i++) {
      answer += arguments[i];
    }
    return answer;
  },
  mul: function() {
    var answer = 1;
    for (i=0;i<arguments.length;i++) {
      answer *= arguments[i];
    }
    return answer;
  },
  fact: function(x) {
    var answer = 1;
    for (i=1;i<=x;i++) {answer*=i;}
    return answer;
  }
}
console.log(myMath.add(1,2,3));
console.log(myMath.mul(3,5,2));
console.log(myMath.fact(4));
