define([],function(){
  return function(id, noteObject) {
    var note = document.createElement("div");
    var title = document.createElement("h2");
    var contents = document.createElement("p");
    var created = document.createElement("p");
    var lastEdit = document.createElement("p");
    var deleteButton = document.createElement("button");
    var editButton = document.createElement("button");
    var hideButton = document.createElement("button");
    note.id = id;
    note.className = "note";
    title.innerText = noteObject.title;
    contents.innerText = noteObject.contents;
    created.innerText = "Created: "+noteObject.created;
    lastEdit.innerText = "Last Edit: "+noteObject.lastEdit;
    created.className = "date";
    lastEdit.className = "date";
    deleteButton.className = "delete";
    editButton.className = "edit";
    hideButton.className = "hide";
    deleteButton.innerText = "Delete";
    editButton.innerText = "Edit";
    hideButton.innerText = "Hide";
    note.appendChild(title);
    note.appendChild(contents);
    note.appendChild(created);
    note.appendChild(lastEdit);
    note.appendChild(deleteButton);
    note.appendChild(editButton);
    note.appendChild(hideButton);
    notes.appendChild(note);
  }
});
