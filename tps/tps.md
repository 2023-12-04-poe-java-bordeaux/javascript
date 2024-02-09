# TPs

## TP1

Votre fichier JS doit permettre :
Déclarer 2 variables, implémenter avec des valeurs de type number
Déclarer une constante qui est égal à la somme des 2 variables
Afficher un message d’alerte « Bienvenue sur la page de formulaire »
La console du navigateur affiche le contenu des variables.
La console affiche « Le résultat est » + le résultat du calcul.

```js
const nombre1 = Number(prompt("Nombre 1 : "));
const nombre2 = Number(prompt("Nombre 2 : "));

if (isNaN(nombre1) || isNaN(nombre2)) {
  alert("Vous n'avez pas saisie des valeurs valides.");
} else {
  const somme = nombre1 + nombre2;
  alert(`${nombre1} + ${nombre2} = ${somme}`);
}
```

## TP2

Ecrire un programme Javascript qui demande à l’utilisateur d’entrer à partir du clavier:
La distance parcours(m)
Le temps(sec)

Puis calculer la vitesse selon la formule: vitesse=distance parcourue/temps

Puis afficher le résultat dans le format suivant : 345 m/s(utiliser alert et console.log)

```js
const distance = Number(prompt("Distance : "));
const temps = Number(prompt("Temps"));

if (isNaN(distance) || isNaN(temps)) {
  alert("Vous n'avez pas saisie des valeurs valides.");
} else {
  const vitesse = distance / temps;
  alert(`${vitesse}m/s`);
}
```
