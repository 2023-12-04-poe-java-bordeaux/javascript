// const alphabet = [];
// // const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
// for (let i = 0; i < 26; i++) {
//   alphabet.push(String.fromCharCode(97 + i));
// }

// let indice = parseInt(prompt("Entrez un nombre entre 1 et 6 :"));
// console.log(alphabet[indice - 1]);

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

//Saisie du nombre entre 1 & 25
let nombre = parseInt(prompt("Veuillez saisir un nombre entre 1 et 26 :"));

// Vérifie si c'est entre 1 & 25
if (!isNaN(nombre) && nombre >= 1 && nombre <= 26) {
  console.log("La lettre correspondante est :", alphabet[nombre - 1]);
} else {
  console.log("Le nombre saisi est hors de la plage spécifiée.");
}
