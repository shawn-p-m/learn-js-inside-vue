// Challenge 1 -> arrow function that returns the number 3
export const arrowFunction = () => {
  return 3;
};

// Challenge 2 -> given the array of numbers, map the string "odd" or "even" to them based on being odd or even.
//expected result example: "12: is even" or "17: is odd"
//results must have this exact output ^^
const myNums = [12, 13, 16, 17, 8, 32, 33];
export const numsWithOddOrEven = myNums.map((num) => {
  if (num % 2 === 0) return num + ": is even";
  else return num + ": is odd";
});


