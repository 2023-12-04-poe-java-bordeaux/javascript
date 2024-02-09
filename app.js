// Tableaux vides
const tb = new Array();
const tb2 = []; //

tb2[0] = 12;
tb2[1] = 35;
tb2[2] = 45;
tb2.push(78);
tb2.push(12);

// Création + Initialisation
const countries = ["France", "Belgium", "Spain"];
countries.push("China");
countries.push("Japan");
countries.push("USA");

// for (let i = 0; i < countries.length; i++) {
//   console.log(countries[i]);
// }

for (let country of countries) {
  console.log(country);
}

const brazil = ["Ronaldo", "R.Carlos", "Dunga", "Rivaldo", "Ze Roberto"];
const brazil2 = brazil; // Copie de la reference
const brazil3 = [...brazil]; // Utilisation du spread operator pour copier les valeurs(non la reference)

// Merge des tableaux
const fcBarcelona2006Brazilians = [
  "Ronaldinho",
  "Silvinho",
  "Belleti",
  "Edmilson",
];

const realMadrid2006Brazilians = [
  "Ronaldo",
  "Robinho",
  "Julio Baptista",
  "Cicinho",
  "R. Carlos",
];

const brazilWC2006 = [
  ...fcBarcelona2006Brazilians,
  ...realMadrid2006Brazilians,
];
