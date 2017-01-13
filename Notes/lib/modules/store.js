define(["lib/modules/notebuilder"],function(noteBuilder){
  var noteObject = {};
  var notes = document.getElementById("notes");
  var title = document.getElementById("title");
  var contents = document.getElementById("contents");
  function noteChecker(id) {
    for(var i=0;i<notes.childNodes.length;i++) {
      if (notes.childNodes[i].id==id) return false;
    }
    return true;
  }
  return {
    store: function (time) {
      if (!noteObject[time]) {
        noteObject[time] = {};
        noteObject[time].created = time;
      }
      noteObject[time].title = title.value;
      noteObject[time].contents = contents.value;
      noteObject[time].lastEdit = Date.now();
    },
    retrieve: function(id) {
      if (noteChecker(id)) noteBuilder(id,noteObject[id]);
    },
    every: function() {
      for (var id in noteObject) {
        if (noteChecker(id)) noteBuilder(id,noteObject[id]);
      }
    },
    remove: function(id) {
      delete noteObject[id];
    }
  }
});
