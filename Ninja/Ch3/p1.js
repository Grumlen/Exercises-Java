function mul(x,y) {
  var z = [x*y];
  var i=0;
  while (z[i]>9) {
    if (z[i]>12) z.push(Math.floor(z[i]/13));
    z[i]=z[i]%13;
    if (z[i]==10) z[i]="A";
    else if (z[i]==11) z[i]="B";
    else if (z[i]==12) z[i]="C";
    i++;
  }
  var answer = "";
  for (var j=z.length-1;j>=0;j--) {
    answer = answer + z[j];
  }
  return answer;
}
console.log(mul(9,6));
