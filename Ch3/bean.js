function countBs(string) {
  var count=0;
  for (i=0;i<string.length;i++) {
    if (string.charAt(i)=="B") count++;
  }
  return count;
}
function countChar(string,character) {
  var count=0;
  for (i=0;i<string.length;i++) {
    if (string.charAt(i)==character) count++;
  }
  return count;
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
