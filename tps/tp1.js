const nombre1 = Number(prompt("Nombre 1 : "));
const nombre2 = Number(prompt("Nombre 2 : "));

if (isNaN(nombre1) || isNaN(nombre2)) {
  alert("Vous n'avez pas saisie des valeurs valides.");
} else {
  const somme = nombre1 + nombre2;
  alert(`${nombre1} + ${nombre2} = ${somme}`);
}
