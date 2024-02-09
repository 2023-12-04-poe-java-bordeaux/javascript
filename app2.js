const countries = ["France", "Belgium", "Spain"];

// push() : Ajouter à la fin -> O(1)
countries.push("China");
countries.push("Japan");
countries.push("USA");

// pop() : O(1)
// 1. Copie la valeur du dernier element dans une variable
// 2. Supprime à la fin du tableau
// 3. Retourne la valeur supprimée
countries.pop(); // Cette instruction supprime "USA"
countries.pop(); // Cette instruction supprime "Japan"

// shift() : O(n)
// 1. Copie la valeur du premier element dans une variable
// 2. Supprime au début du tableau
// 3. Retourne la valeur supprimée
countries.shift(); // Supprimer "France"

// unshift : Ajouter au début-> O(n)
countries.unshift("Portugal");
