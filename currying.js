function sumOfMultiplesOf(n) {
  //3
  return function (arr) {
    let sum = 0;
    for (let num of arr) {
      if (num % n === 0) {
        sum += num;
      }
    }
    return sum;
  };
}

const sumOfMultiplesOf3 = sumOfMultiplesOf(3);

const tab1 = [1, 2, 3, 4, 5];
const tab2 = [5, 7, 8, 9, 12, 15];
const tab3 = [23, 24, 25, 27, 49, 81];

let sum =
  sumOfMultiplesOf3(tab1) + sumOfMultiplesOf3(tab2) + sumOfMultiplesOf3(tab3);

console.log(`Sum : ${sum}`);
