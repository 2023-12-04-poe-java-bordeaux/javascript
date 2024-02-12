// V1
function sumOfMultiplesOf3(arr) {
  let sum = 0;
  for (let num of arr) {
    if (num % 3 === 0) {
      sum += num;
    }
  }
  return sum;
}

console.log(sumOfMultiplesOf3([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// v2
function sumOfMultiplesOf(n, arr) {
  let sum = 0;
  for (let num of arr) {
    if (num % n === 0) {
      sum += num;
    }
  }
  return sum;
}

console.log(sumOfMultiplesOf(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(sumOfMultiplesOf(2, [1, 2, 3, 4, 5, 6, 7, 8, 9]));


