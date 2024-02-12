function produitDesElementsPositifs(arr) {
  const elementsPositifs = arr.filter((element) => element > 0);

  if (elementsPositifs.length === 0) {
    return 0;
  }

  const produit = elementsPositifs.reduce((acc, val) => acc * val, 1);

  return produit;
}

console.log(produitDesElementsPositifs([1, -2, 3, 4, -5, 0, 6])); // Devrait afficher 72 (1 * 3 * 4 * 6)
console.log(produitDesElementsPositifs([-1, -2, -3, 0])); // Devrait afficher 0 car aucun élément positif
console.log(produitDesElementsPositifs([2, 5])); // Devrait afficher 10 (2 * 5)
