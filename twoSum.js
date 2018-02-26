const twoSum = (num, target) => {
  if (num.length < 2) return [];
  let result = [];
  var i = 0;
  var j = num.length - 1;
  while (i !== j) {
    if (num[i] + num[j] === target) return [i, j];
    else if (num[i] + num[j] < target) i++;
    else j--;
  }
  return result;
};

// const twoSum = (numbers, target) => {
//   if (numbers.length < 2) return [];
//   const seen = {};
//   for (let i = 0; i < numbers.length; i++) {
//     const currentNum = numbers[i];
//     const numToFind = target - currentNum;
//     if (seen[numToFind] !== undefined) return [seen[numToFind], i];
//     seen[currentNum] = i;
//   }
//   return [];
// };

/* 
Given an array of numbers,
XXX find two distinct elements that sum up to a specified target and XXX return their indices as an array.
You may not use the same element twice (two indices must be distinct).
XXX If no two indices add up to the target, return an empty array.
*/


module.exports = twoSum;
