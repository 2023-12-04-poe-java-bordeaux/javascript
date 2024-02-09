## TP 1

**Objectif:** Écrire un programme JavaScript qui demande à l'utilisateur d'entrer un nombre positif, puis une paire de valeurs définissant un intervalle. Le programme affichera ensuite la table de multiplication de ce nombre pour chaque entier compris dans l'intervalle spécifié, y compris les bornes.

**Instructions:**

1. **Saisie du nombre:**

   - Le programme doit commencer par demander à l'utilisateur d'entrer un nombre.
   - Si l'utilisateur entre une valeur qui n'est pas un nombre ou un nombre négatif ou zéro, affichez un message d'erreur et redemandez-lui de saisir une valeur jusqu'à ce qu'il entre un nombre positif valide.

2. **Définition de l'intervalle:**

   - Ensuite, demandez à l'utilisateur d'entrer deux nombres qui définiront les bornes de l'intervalle pour lequel la table de multiplication sera affichée. Ces deux nombres représentent le début et la fin de l'intervalle.
   - Si l'utilisateur saisit des valeurs non numériques, des nombres négatifs, zéro, ou deux nombres égaux, affichez un message d'erreur approprié et redemandez-lui de saisir les deux bornes.
   - Si la première borne est supérieure à la deuxième, inversez-les.

3. **Affichage de la table de multiplication:**
   - Après avoir validé toutes les entrées, affichez la table de multiplication du nombre saisi pour chaque entier compris dans l'intervalle, y compris les bornes.
   - Chaque ligne de la table de multiplication doit être formatée comme suit: `{nombre} x {i} = {résultat}`, où `{nombre}` est le nombre pour lequel la table est calculée, `{i}` est l'entier courant de l'intervalle, et `{résultat}` est le produit de `{nombre}` par `{i}`.

**Exemple de sortie:**

Si l'utilisateur entre `5` pour le nombre, `2` pour la première valeur de l'intervalle, et `4` pour la dernière valeur, le programme affichera:

```
Table de multiplication de 5
===================================

5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
```

**Consignes supplémentaires:**

- Utilisez `prompt()` pour lire les entrées de l'utilisateur et `alert()` pour afficher les messages d'erreur.
- Utilisez `console.log()` pour afficher la table de multiplication.
- Assurez-vous de traiter correctement les entrées invalides pour améliorer l'expérience utilisateur.
