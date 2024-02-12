const alphabet = [];
// const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
for (let i = 0; i < 26; i++) {
  alphabet.push(String.fromCharCode(97 + i));
}

let indice = parseInt(prompt("Entrez un nombre entre 1 et 26 :"));

if (!isNaN(nombre) && nombre >= 1 && nombre <= 26) {
  console.log(alphabet[indice - 1]);
} else {
  console.log("Saisie invalide");
}
