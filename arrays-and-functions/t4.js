function sortArray(arr) {
  return [...arr].sort((a, b) => a - b);
}
const nums = [8, 3, 9, 1, 5];
console.log('Original array:', nums);
console.log('Sorted array:', sortArray(nums));
