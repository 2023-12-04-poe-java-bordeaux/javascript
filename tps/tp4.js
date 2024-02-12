const tab = [];
for (let i = 0; i < 10; i++) {
  tab.push(Math.random() * 10);
}

let sommePairs = 0;
let sommeImpairs = 0;
for (let i = 0; i < tab.length; i++) {
  if (i % 2 === 0) {
    sommePairs += tab[i];
  } else {
    sommeImpairs += tab[i];
  }
}

console.log("Somme pairs :", sommePairs);
console.log("Somme impairs :", sommeImpairs);
