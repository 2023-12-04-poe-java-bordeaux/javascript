const technos = document.querySelectorAll("li");

// console.log(technos[0].innerText);

// for (let i = 0; i < technos.length; i++) {
//   console.log(technos[i].innerText);
// }

for (const techno of technos) {
  console.log(techno.innerText);
  // techno.innerText = "J'ai faim";
}

const framworks = [
  "Nest.js",
  "Spring",
  "Asp Dotnet Core",
  "Ruby On Rails",
  "Angular",
  "Symfony",
  "Laravel",
  "Dynamo",
];

// TP1
// Remplacer tous les elements du DOM avec le tableaux ci-dessus

// TP2
// Dans l'affichage, vous devez avoir "nom_de_classe - technologie"
// Exemple :
//   Frontend - HTML
//   Server side - Nest.js
//   Database - Mongo DB
