function sum(a, b) {
  return a + b;
}
// console.log(sum(3, 4));

// function sayHello(name) {
//   console.log("Hello %s", name);
//   console.log("Hello " + name);
//   console.log(`Hello ${name}`);
// }
let nombre1 = Number(prompt("Premier nombre : "));
let nombre2 = Number(prompt("Deuxième nombre : "));
let somme = sum(nombre1, nombre2);
alert(nombre1 + " + " + nombre2 + " = " + somme);
alert(`${nombre1} + ${nombre2} = ${somme}`);
