let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let newNumbers = [...numbers.sort()];
console.log(newNumbers);

let orderedNewNumbers = newNumbers.sort((a, b) => a - b);

console.log(orderedNewNumbers);
