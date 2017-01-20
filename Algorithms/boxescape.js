var startLocation = [0,0];
var endLocation = [3,3];
function maze(start,end) {
  var counter = 0;
  function mazeEscape(start,end,path) {
    path = path.concat([start]); // Add current location to array representing the current path taken
    if (start[0]==end[0] && start[1]==end[1]) {
      console.log(path); // Log successful path
      counter++; // Found another successful path
    }
    if (start[0]<end[0]) {
      mazeEscape([start[0]+1,start[1]],end,path); // Move along x-axis
    }
    if (start[1]<end[1]) {
      mazeEscape([start[0],start[1]+1],end,path); // Move along y-axis
    }
    return counter; // Return the counter for the # of successful paths
  }
  return console.log("There are "+mazeEscape(start,end,[])+" paths.");
}
maze(startLocation,endLocation);
