function CreateBuilding() {
  this.addPerson = function (name, room, floor) {
    this[name] = {};
    this[name].floor = floor;
    this[name].room = room;
    if (arguments.length>3) {
      this[name].equipment = [];
      for (var i=3;i<arguments.length;i++) {
        this[name].equipment.push(arguments[i]);
      }
    }
  };
  this.movePerson = function (name, room, floor) {
    this[name].room = room;
    this[name].floor = floor;
  };
  this.addEquipment = function (name) {
    if (arguments.length>1) {
      for (var i=1;i<arguments.length;i++) {
        this[name].equipment.push(arguments[i]);
      }
    }
  };
  this.removeRequipment = function (name) {
    if (arguments.length>1) {
      for (var i=1;i<arguments.length;i++) {
        let index = this[name].equipment.indexOf(arguments[i]);
        if (index != -1) {
          this[name].equipment.splice(index,1);
        }
      }
    }
  };
  this.findPerson = function (name) {
    if (this[name]) {
      console.log(name+" is in room: "+this[name].room+" on floor "+this[name].floor+".");
    }
    else console.log(name+" is not in this building.");
  };
  this.findEquipment = function (equip) {
    for (var name in this) {
      if (this[name].equipment) {
        if (this[name].equipment.indexOf(equip) != -1) {
          return console.log(equip+" is in room: "+this[name].room+" on floor "+this[name].floor+".");
        }
      }
    }
    return console.log(equip+" not found.");
  };
}
var building= new CreateBuilding();
building.addPerson("Joe","Accounting",13,"Computer","Printer","Fax");
building.addPerson("Nancy","Human Resources",6,"Laptop")
building.findPerson("Joe");
building.findPerson("Nancy");
building.findEquipment("Printer");
building.findEquipment("Laptop")
