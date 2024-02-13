// Closures
function counter() {
  let x = 0;
  //   CLosed-in function
  return function () {
    x++;
    return x;
  };
}

// Currying
function getPriceOfTaxe(taxeRate) {
  return function (price) {
    return price * (1 + taxeRate);
  };
}

// const [state, setState] = useState(0);

// const tb = [2, 3];
// const [premier, deuxième] = tb;

// function useState() {
//   return [1, 2];
// }

// const [a, b] = useState();
