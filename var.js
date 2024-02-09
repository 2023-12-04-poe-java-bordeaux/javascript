// 1. Creation of execution context(syntax parser, etc.)
// 2. Execution phase
console.log("Your firstname :  %s", firstName);
var firstName = "Christian"; // -> firstName=undefined : Hoisting/Hissage
console.log("Your firstname :  %s", firstName);

for (var i = 0; i <= 10; i++) {
  console.log("Dans la boucle : %d", i);
}
console.log("En dehors de la boucle : %d", i);
