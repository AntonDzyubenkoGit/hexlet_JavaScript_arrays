// Испытания. Javascript: Треугольник Паскаля. Решение с определением элемента по формуле
const pascal = (row) => {
  const line = [1];

  for (let i = 0; i < row; i += 1) {
    const element = line[i] * ((row - i) / (i + 1));
    line.push(element);
  }

  return line;
};

console.log(pascal(5));
