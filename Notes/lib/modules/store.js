define([],function(){
  var noteObject = {};
  var notes = document.getElementById("notes");
  function get(id) {
    var note = document.createElement("div");
    var title = document.createElement("h2");
    var contents = document.createElement("p");
    note.className = id;
    title.innerText = noteObject[id].title;
    contents.innerText = noteObject[id].contents;
    note.appendChild(title);
    note.appendChild(contents);
    notes.appendChild(note);
  }
  return {
    store: function (time) {
      var title = document.getElementById("title");
      var contents = document.getElementById("contents");
      if (!noteObject[time]) {
        noteObject[time] = {};
        noteObject[time].created = time;
      }
      noteObject[time].title = title.value;
      noteObject[time].contents = contents.value;
      noteObject[time].lastEdit = time;
    },
    retrieve: function(id) {
      get(id);
    },
    every: function() {
      for (var id in noteObject) {
        get(id);
      }
    }
  }
});
