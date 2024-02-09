let firstName = "Christian"; // -> firstName=undefined : Hoisting/Hissage
console.log("Your firstname :  %s", firstName);
firstName = "Jean";
console.log("Your firstname :  %s", firstName);

const PI = 3.14; // final
console.log("PI : %f", PI);

for (let i = 0; i <= 10; i++) {
  console.log("Dans la boucle : %d", i);
}
console.log("En dehors de la boucle : %d", i);
