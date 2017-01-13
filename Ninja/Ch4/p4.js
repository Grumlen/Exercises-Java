function dataType() {
  for (var i=0;i<arguments.length;i++) {
    if (Array.isArray(arguments[i])) console.log("array");
    else if (typeof arguments[i] == "number" && !(Number.isInteger(arguments[i]))) console.log("float");
    else console.log(typeof arguments[i]);
  }
}
dataType(1, 6.2831, "pi*2", [function(){},1], {}, function () {});
