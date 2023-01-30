const maxMass = [0, 1, 8, 7, 6, 5, 9, 11, 2, 12];
const minusMass = [-50, -10, -5, -6, -1, -3, -4, -11];
const sumMass = [3, 2, 10, -38, 45, 16, 0, -7];
const comparisonMass = ["cat", "dog", "horse", "cat", "dog", "horse"];

const coll1 = [8, 9, 21, 19, 18, 22, 7];
const coll2 = [2, 0, 17, 3, 9, 15, 4];
const coll3 = [2, 17, 4, 10, 16, 14, 1];

// Поиск максимального числа в массиве
const calculateMax = (coll) => {
  if (coll.length === 0) {
    return null;
  }
  let max = coll[0];
  for (let i = 1; i < coll.length; i++) {
    const currentElement = coll[i];
    if (currentElement > max) {
      max = currentElement;
    }
  }
  return max;
};

// Поиск суммы массива
const calculateSum = (coll) => {
  let sum = 0;
  for (let i = 0; i < coll.length; i++) {
    sum += coll[i];
  }
  return sum;
};

// Поиск уникальных значений
const uniq = (coll) => {
  if (coll.length === 0) {
    return coll;
  }
  const result = [];
  for (let i = 0; i < coll.length; i++) {
    if (result.indexOf(coll[i]) === -1) {
      result.push(coll[i]);
    }
  }
  return result;
};

// Функция для расчета суммы элементов массива, которые деляться на три без остатка
const calculateSumMultiple = (coll) => {
  if (coll.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < coll.length; i += 1) {
    if (coll[i] % 3 === 0) {
      sum += coll[i];
    }
  }
  return sum;
};

console.log(calculateSumMultiple(coll3));
