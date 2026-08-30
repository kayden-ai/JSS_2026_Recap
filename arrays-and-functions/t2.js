const numbers = [];
numbers.push(Number(prompt('Enter Number 1:')));
numbers.push(Number(prompt('Enter Number 2:')));
numbers.push(Number(prompt('Enter Number 3:')));
numbers.push(Number(prompt('Enter Number 4:')));
numbers.push(Number(prompt('Enter Number 5:')));
console.log('Numbers:', numbers);

const search = Number(prompt('Enter a Number to Search:'));
if (numbers.includes(search)) {
  console.log(`Number ${search} is found in the array.`);
} else {
  console.log(`Number ${search} is not found.`);
}

numbers.pop();
console.log('Updated Numbers:', numbers);

numbers.sort((a, b) => a - b);
console.log('Sorted Numbers:', numbers);
