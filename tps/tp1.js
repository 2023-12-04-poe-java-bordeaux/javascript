const tab = [];
for (let i = 0; i < 10; i++) {
  tab.push(Math.floor(Math.random() * 100) + 1);
}

let min = tab[0];
let max = tab[0];
for (let i = 1; i < tab.length; i++) {
  if (tab[i] < min) {
    min = tab[i];
  }
  if (tab[i] > max) {
    max = tab[i];
  }
}
console.log("Tableaux : ", tab);
console.log("Min :", min);
console.log("Max :", max);
