define(["lib/modules/store"],function(storage){
  var addNotes = document.getElementById("addNotes");
  var title = document.getElementById("title");
  var contents = document.getElementById("contents");
  var list = document.getElementById("list");
  function buttonCheck(id) {
    for(var i=0; i<list.childNodes.length; i++) {
      if (list.childNodes[i].className==id) return false;
    }
    return true;
  }
  return {
    store: function() {
      var time;
      if (title.className!="") {
        time = title.className;
      }
      else time = Date.now();
      title.className = "";
      storage.store(time);
      if (buttonCheck(time)){
        var noteButton = document.createElement("button");
        noteButton.innerText = title.value;
        noteButton.className = time;
        list.appendChild(noteButton);
      }
    },
    wipe: function() {
      title.value = "";
      contents.value = "";
      addNotes.className = "hidden";
    }
  }
});
