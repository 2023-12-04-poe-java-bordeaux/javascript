const nombres = [1, 2, 3, 4, 5, 6, 7];

nombres.forEach((n) => {
  console.log(n);
});

const nombresAuCarre = nombres.map((n) => Math.pow(n, 2));
console.log(nombresAuCarre);
