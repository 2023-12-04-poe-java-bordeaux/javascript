function sumOfMultiplesOf(n, arr) {
  let sum = 0;
  for (let num of arr) {
    if (num % n === 0) {
      sum += num;
    }
  }
  return sum;
}

const tab1 = [1, 2, 3, 4, 5];
const tab2 = [5, 7, 8, 9, 12, 15];
const tab3 = [23, 24, 25, 27, 49, 81];

let sum =
  sumOfMultiplesOf3(3, tab1) +
  sumOfMultiplesOf3(3, tab2) +
  sumOfMultiplesOf3(3, tab3);

console.log(`Sum : ${sum}`);
