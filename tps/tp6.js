const taille1 = Math.floor(Math.random() * 5) + 1;
const taille2 = Math.floor(Math.random() * 5) + 1;

const tab1 = [];
const tab2 = [];

for (let i = 0; i < taille1; i++) {
  tab1.push(i + 1);
}

for (let i = 0; i < taille2; i++) {
  tab2.push(String.fromCharCode(97 + i));
}

let tabFusion = [];
for (let i = 0; i < taille1 || i < taille2; i++) {
  if (i < taille1) {
    tabFusion.push(tab1[i]);
  }
  if (i < taille2) {
    tabFusion.push(tab2[i]);
  }
}
console.log("Tableau 1: ", tab1);
console.log("Tableau 2: ", tab2);
console.log("Résultat : ", tabFusion);
