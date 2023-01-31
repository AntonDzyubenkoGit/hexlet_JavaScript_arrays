const temperatures = [];
const temperatures1 = [37.5, 34, 39.3, 40, 38.7, 41.5];
const temperatures2 = [36, 37.4, 39, 41, 36.6];

// Функция calculateAverage(), которая высчитывает среднее арифметическое элементов переданного массива.

const calculateAverage = (coll) => {
  if (coll.length === 0) {
    return null;
  }
  sumMiddle = 0;
  for (const value of coll) {
    sumMiddle += value;
  }
  return sumMiddle / coll.length;
};

console.log(calculateAverage(sumMass));
