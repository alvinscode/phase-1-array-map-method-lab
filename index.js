const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  return tutorials.map(function(tutorial) {
    let words = tutorial.split(' ');
    let capitalizedWords = words.map(function(word) {
      let firstLetter = word[0];
      let capitalizedFirstLetter = firstLetter.toUpperCase();
      let restOfWord = word.slice(1);
      return capitalizedFirstLetter + restOfWord;
    });
    return capitalizedWords.join(' ');
  });
}