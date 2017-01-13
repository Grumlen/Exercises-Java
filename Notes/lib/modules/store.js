define(["lib/modules/notebuilder"],function(noteBuilder){
  var noteObject = {};
  var notes = document.getElementById("notes");
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
      noteObject[time].lastEdit = Date.now();
    },
    retrieve: function(id) {
      noteBuilder(id,noteObject[id]);
    },
    every: function() {
      for (var id in noteObject) {
        noteBuilder(id,noteObject[id]);
      }
    }
  }
});
