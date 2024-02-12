const mots = prompt("Entrez une phrase :").split(" ");
const phraseInverse = [];

for (let i = mots.length - 1; i >= 0; i--) {
  phraseInverse.push(mots[i]);
}

console.log(phraseInverse.join(" "));
