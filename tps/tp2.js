const distance = Number(prompt("Distance : "));
const temps = Number(prompt("Temps"));

if (isNaN(distance) || isNaN(temps)) {
  alert("Vous n'avez pas saisie des valeurs valides.");
} else {
  const vitesse = distance / temps;
  alert(`${vitesse}m/s`);
}
