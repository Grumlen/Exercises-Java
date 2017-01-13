define([],function(){
  var region = document.getElementById("addNotes");
  var title = document.getElementById("title");
  var contents = document.getElementById("contents");
  return {
    createNew: function(){
      region.className = "show";
    }
  }
})
