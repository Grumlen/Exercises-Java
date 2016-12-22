var chess = ""; var size=8;
for (row=1;row<=size;row++) {
  for (i=0;i<size;i++) {
    if ((i+row)%2==0) {chess+="#";}
    else {chess+=" ";}
  }
  chess+="\n";
}
console.log(chess);
