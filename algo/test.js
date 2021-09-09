//number of words:

let countWords = function(sentence){
    return sentence.split(' ').length;
}
console.log(countWords('essai phrase'));



//number of vowels :

const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function countVowels(sentence) {
  let counts = 0;
  for(let i = 0; i < vowels.length; i++) {
    if(vowels.includes(sentence[i])) {
      counts++;
    }
  }
  return console.log(counts);
}

countVowels('test vowels');



//number of caracters:

const str = 'essai phrase';

console.log(`${str.length}`);

