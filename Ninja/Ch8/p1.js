var sentences = [
  "The quick red fox jumps over the lazy brown dog.",
  "Life? Don't talk to me about life . . .",
  "There are 2 infinite things: the universe and human stupidity . . . and I'm not sure about the former.",
  "So a neutrino walks through a bar . . .",
  "In life you have 3 choices: Career, entertainment, and sleep. The problem is you only get to pick 2.",
  "No man has a good enough memory to be a successful liar.",
  "A day without sunshine is like, you know, night.",
  "People who think they know everything are a great annoyance to those of us who do.",
  "I always wanted to be somebody, but now I realize I should have been more specific.",
  "My fake plants died because I did not pretend to water them.",
  "Instant gratification takes too long.",
  "A nickel ain't worth a dime anymore.",
  "I can resist everything except temptation.",
  "There are lots of people who mistake their imagination for memory.",
  "Why do they call it rush hour when nothing moves?",
  "May the forces of evil become confused on the way to your house.",
  "All generalizations are false, including this one."
];
function randomSentence(array) {
  var index = Math.floor(Math.random()*array.length);
  return console.log(array[index]);
}
function repeater() {
  setTimeout(function() {
    randomSentence(sentences);
    repeater();
  },60000);
}
repeater();
