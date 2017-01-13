define(["lib/modules/store"],function(storage){
  var region = document.getElementById("addNotes");
  var title = document.getElementById("title");
  var contents = document.getElementById("contents");
  var list = document.getElementById("list");
  return {
    store: function() {
      var time = Date.now();
      storage.store(time);
      var noteButton = document.createElement("button");
      noteButton.innerText = title.value;
      noteButton.id = time;
      list.appendChild(noteButton);
    },
    wipe: function() {
      title.value = "";
      contents.value = "";
    }
  }
});
