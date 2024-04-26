// Quick Question #1
// What does the following code return?

const outPut = new Set([1,1,2,2,3,4]);
console.log(outPut);// Set(4) {1, 2, 3, 4}

// Quick Question #2
// What does the following code return?
const result = [...new Set("referee")].join("");
console.log(result);// ref

// Quick Questions #3
// What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
console.log(m);
m.set([1,2,3], false);
console.log(m);
// 0:{Array(3) => true}
// 1:{Array(3) => false}

// hasDuplicate
// Write a function called hasDuplicate 
// which accepts an array and returns true or false 
// if that array contains a duplicate
const hasDuplicate = array => new Set(array).size !== array.length;hasDuplicate([1,3,2,1]) // true
console.log("This value contain Duplicate: ", hasDuplicate([1,3,2,1])); // true
console.log("This value doesn't contain Duplicate: ", hasDuplicate([1,5,-1,4])) // false

// vowelCount
// Write a function called vowelCount which accepts a string and
// returns a map where the keys are numbers and the values are the count of the vowels in the string.

function myVowel(char){
  return "aeiou".includes(char);
}

function vowelCount(str){
  const vowelMap = new Map();
  for(let char of str){
    let lowerCaseChar = char.toLowerCase()
    if(myVowel(lowerCaseChar)){
      if(vowelMap.has(lowerCaseChar)){
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
      } else {
        vowelMap.set(lowerCaseChar, 1);
      }
    }
  }
  return vowelMap;
}
console.log(vowelCount('Adefaye')) // Map { 'a' => 2, 'e' => 2}
console.log(vowelCount('Babalola')) // Map { 'a' => 3, 'o' => 1}
