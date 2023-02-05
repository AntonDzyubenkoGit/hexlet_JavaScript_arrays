// Испытания. Javascript: Треугольник Паскаля
const pascal = (num) => {
  let result = [];

  for (let i = 0; i <= num + 1; i++) {
    result[i] = [];

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        result[i][j] = 1;
      } else {
        result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
      }
    }
  }
  return result[num];
};

console.log(pascal(4));



