const tab1 = [];
const tab2 = [];

for (let i = 0; i < 5; i++) {
  tab1.push(Math.random());
  tab2.push(Math.random());
}

let identiques = true;
if (tab1.length === tab2.length) {
  for (let i = 0; i < tab1.length; i++) {
    if (tab1[i] !== tab2[i]) {
      identiques = false;
      break;
    }
  }
} else {
  identiques = false;
}
console.log(identiques);
