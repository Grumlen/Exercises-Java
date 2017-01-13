require(["lib/modules/add","lib/modules/edit","lib/modules/del","lib/modules/save","lib/modules/store"],
        function(add,edit,del,save,storage) {
          var list = document.getElementById("list");
          var addNotes = document.getElementById("addNotes");
          // var addNote = add(), editNote = edit(), deleteNote = del(), saveNote = save();
          list.addEventListener("click", function(e) {
            if (e.target.className=="create") {
              add.createNew();
            }
            else if (e.target.className=="all") {
              storage.every();
            }// Show all notes
            else {
              storage.retrieve(e.target.id); // Show note matching e.target.value
            }
          });
          addNotes.addEventListener("click", function(e) {
            if (e.target.className=="save") { // Save Note
              save.store(); // Save the note
              save.wipe(); // Wipe the area
            }
            else if (e.target.className=="delete") { // Delete Note

            }
          });

});
