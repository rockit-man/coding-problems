
/* Create a function that takes in an array of words 
as the parameter and pluralizes those words. In the array 
of words will also be your first name. The function should 
take in your first name, capitalize the first letter 
and add "'s" to it. As a bonus, create a '.spec.js' file 
with unit tests. */

/* Function should look something like this:

function pluralizeWords(words) {
  if word in words == Jereme (ignore case, ignore spaces)
    capitilize J
    add "'s" to word
  otherwise
    for each word in words,
      add a "s"
  return words
 }
 
 */

export const pluralizeWords = (words) => {
  let arr = [];
  console.log('This is the array being passed in: ' + words);
  for (let word of words) {
    if (word.toLowerCase() == "jereme") {
      word += "'s";
      word = word[0].toUpperCase() + word.substring(1);
      arr.push(word);
    } else {
      word += "s";
      arr.push(word);
    }
  }
  return arr;
}

// let arr = ["apple", "orange", "jereme"];

// console.log(pluralizeWords(arr));