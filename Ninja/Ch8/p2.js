function alpha() {
  return console.log("Function A");
}
function beta() {
  return console.log("Function B");
}
function gamma() {
  return console.log("Function C");
}
var counter = 0;
function repeater() {
  if (counter%2==0 && counter!=0) alpha();
  if (counter%4==0 && counter!=0) beta();
  if (counter%5==0 && counter!=0) gamma();
  setTimeout(function() { counter++; repeater(); },15000); // repeat every 15 seconds with a counter for the # of cycles
}
repeater();
