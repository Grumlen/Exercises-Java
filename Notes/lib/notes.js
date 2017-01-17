require(["modules/add","modules/edit","modules/del","modules/save","modules/store"],
        function(add,edit,del,save,storage) {
          var list = document.getElementById("list");
          var addNotes = document.getElementById("addNotes");
          var notes = document.getElementById("notes");
          for (var id in localStorage) {
            var noteButton = document.createElement("button");
            var noteObject = JSON.parse(localStorage.getItem(id));
            noteButton.className = id;
            noteButton.innerText = noteObject.title;
            list.appendChild(noteButton);
          }
          list.addEventListener("click", function(e) {
            if (e.target.className=="create") { // Reveal and clear note creation area
              add("","");
            }
            else if (e.target.className=="all") { // Display all notes
              storage.every();
            }// Show all notes
            else {
              storage.retrieve(e.target.className); // Show note matching e.target.value
            }
          });
          addNotes.addEventListener("click", function(e) {
            if (e.target.className=="save") { // Save Note
              save.store(); // Save the note
              save.wipe(); // Wipe the area
            }
            else if (e.target.className=="discard") { // Delete Note
              save.wipe();
            }
          });
          notes.addEventListener("click", function (e) {
            if (e.target.className=="edit") {
              edit(e.target.parentNode.id);
            }
            else if (e.target.className=="delete") {
              del(e.target.parentNode.id);
            }
            else if (e.target.className=="hide") {
              e.target.parentNode.parentNode.removeChild(e.target.parentNode);
            }
          });
});
