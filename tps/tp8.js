function rotateArray(array, n) {
  const newArr = [...array];

  for (let i = 1; i <= n; i++) {
    const popedElement = newArr.pop();
    newArr.unshift(popedElement);
  }
  return newArr;
}
