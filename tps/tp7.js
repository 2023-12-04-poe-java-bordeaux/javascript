const tab = [];
for (let i = 0; i < 10; i++) {
  tab.push(Math.floor(Math.random() * 10) - 5);
}

let produit = 1;
for (let i = 0; i < tab.length; i++) {
  if (tab[i] > 0) {
    produit *= tab[i];
  }
}

console.log("Tableau : ", tab);
console.log("Produit des positifs :", produit);
