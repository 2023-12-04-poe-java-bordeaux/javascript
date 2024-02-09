// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

let fullName = "Christian Lisangola";

let size = fullName.length;

for (let i = 0; i < size; i++) {
  console.log(fullName[i]);
}

// Table multiplication
let nombre = parseInt(prompt("Un nombre : "));

let premierMultiplicateur = parseInt(prompt("Premier multiplicateur :"));
let dernierMultiplicateur = parseInt(prompt("Dernier multiplicateur : "));

for (let i = premierMultiplicateur; i <= dernierMultiplicateur; i++) {
  console.log("%d x %d = %d", nombre, i, nombre * i);
}
