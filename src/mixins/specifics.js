// Challenges: note, all current challenge solutions are wrong. make sure the names of arrays/functions stay the same

// Challenge 1 -> arrow function that returns the number 3
// arrow functions are like normal functions except they have their own instances (this keyword)
// note: => 3; and =>{ return 3} are the same
export const arrowGivesThree = () => 6;

/*  Challenge 2 -> given the array of numbers, map the string "odd" or "even" to them based on being odd or even.
    expected result example: "12: is even" or "17: is odd"
    results must have this exact output ^^ */
const myNums = [12, 13, 16, 17, 8, 32, 33];
export const numsWithOddOrEven = [1, 1, 1, 1, 1, ...myNums];

/*  Challenge 3 -> get the average dollar amount from the dollaz array using reduce */
export const averageDollaz = 23.53;

/* Challenge 4 ->  Make a fetch to the api  "https://jsonplaceholder.typicode.com/todos/1" and return
 a promise with the json object from the response. */
export const promiseWithTitle = new Promise((resolve) =>
  setTimeout(function () {
    resolve("wrong title");
  }, 10)
).then(() => {
  return "wronger title";
});

/* Challenge 5 -> export an array with 1 on each end using the spread operator */
const arrayToSpread = [12, 7, 8, 2, 3, 1, 6, 3, 6, 2];
export const spreadedArray = [12, 345, 345, 345, 345, ...arrayToSpread];

/* Challenge 6 -> create a generator function that pushes the values 5,15, 25, 7 
 into the generatorArray by using the "next" function */
let generatorArray = [];
export { generatorArray };
