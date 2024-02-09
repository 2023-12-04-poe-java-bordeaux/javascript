// AGE
// V1

// let age = prompt("Votre age");

// if (age >= 18) {
//   alert("Vous êtes majeur.");
// } else {
//   alert("Vous êtes mineur");
// }

// V1

// let age = prompt("Votre age");
// let isMajeur = age >= 18;

// if (isMajeur) {
//   alert("Vous êtes majeur.");
// } else {
//   alert("Vous êtes mineur");
// }

// LANGUE
let language = prompt(
  "Saisir une langue entre [french,german,spanish,english] : "
);

language = language.toLowerCase();

// if (language == "french") {
//   alert("Salut!");
// } else if (language == "english") {
//   alert("Hi!");
// } else if (language == "spanish") {
//   alert("Hola!");
// } else if (language == "german") {
//   alert("Guten tag");
// } else {
//   alert("Language not supported");
// }

switch (language) {
  case "french":
    alert("Salut!");
    break;
  case "english":
    alert("Hi!");
    break;
  case "spanish":
    alert("Hola!");
    break;
  case "german":
    alert("Guten tag");
    break;
  default:
    alert("Language not supported");
}
