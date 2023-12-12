// HOMEWORK #1
console.log("========= HOMEWORK #1 =========");

let storyData=["Filip", "happy", "writing homework"];

function tellStory([name, mood, activity]){
    let story = (`This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end.`);
    console.log(story)
}
tellStory(storyData)



// HOMEWORK #2

console.log("========= HOMEWORK #2 =========");

function sumArray(array) {
    let sum = 0; 
    for (let item of array) {
      sum += item;
    }
    console.log(sum); 
    return sum;
  }
  sumArray([2, 4, 8, 12, 3]);



// HOMEWORK #3

console.log("========= HOMEWORK #3 =========");

let stringArray = ["Hello", "there", "students", "of", "SEDC", "!"];

function givenStrings(array) {
    return array.join(' ');
  }
  let result = givenStrings(stringArray);
  console.log(result);



  //   HOMEWORK #4

  console.log("========= HOMEWORK #4 =========");
  
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i + "\n"); 
    } else {
      console.log(i + " ");
    }
  }


//   HOMEWORK #5

console.log("========= HOMEWORK #5 =========");

let array = [3, 5, 6, 8, 11];

function findMaxMinSum(array) {
    let max = Math.max(...array);
    let min = Math.min(...array);
    let sum = max + min;
    return (`Max: ${max}, Min: ${min}, Sum: ${sum}`);
}
let output = findMaxMinSum(array);
console.log(output);



//   HOMEWORK #6

console.log("========= HOMEWORK #6 =========");

let first = ["Bob", "Jill"];
let last = ["Gregory", "Wurtz"];

function combineNamesWithNumbers(firstNames, lastNames) {
    let fullNames = [];
    for (let i = 0; i < firstNames.length; i++) {
        let fullName = (`${i + 1}. ${firstNames[i]} ${lastNames[i]}`);
        fullNames.push(fullName);
    }
    return fullNames;
}
let resultFull = combineNamesWithNumbers(first, last);
console.log(resultFull);