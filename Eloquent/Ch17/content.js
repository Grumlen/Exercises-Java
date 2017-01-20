function httpCallerAccept(url,type) {
  var req = new XMLHttpRequest();
  req.open("GET", url, false);
  req.setRequestHeader("Accept",type)
  req.send(null);
  return req.responseText;
}
console.log(httpCallerAccept("http://eloquentjavascript.net/author","text/plain"));
console.log(httpCallerAccept("http://eloquentjavascript.net/author","text/html"));
console.log(httpCallerAccept("http://eloquentjavascript.net/author","application/json"));
console.log(httpCallerAccept("http://eloquentjavascript.net/author","application/rainbows+unicorns"));
