const examples = [
  { type: 'code', content: `ifThisISTrue ? doThis : elseDothisone` },
  { type: 'snippet', content `let ifThisIsTrue = true;
ifThisIsTrue ? console.log('do this') : console.log('else do this one');`
},
  { type: 'snippet', content `let ifThisIsTrue = true;
let ourAnswer = ifThisIsTrue ? 'answer when true' : 'answer when false';
console.log('we got back', ourAnswer);`
},
];

const synonyms = [];

export { examples, synonyms }
