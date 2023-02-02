var _ = require("lodash");

// Функция getSameCount(), которая принимает на вход два массива и возвращающую количество общих уникальных значений в обоих массивах.
const getSameCount = (collOne, collTwo) => {
  const result = [];
  const uniqOne = _.uniq(collOne);
  const uniqTwo = _.uniq(collTwo);

  for (const uniqSymbol of uniqOne) {
    if (uniqTwo.includes(uniqSymbol)) {
      result.push(uniqSymbol);
    }
  }

  return result.length;
};

// Функция getSameCount(). Вариант с циклами

const getSameCount_ = (collOne, collTwo) => {
  let count = 0;
  const uniqCollOne = _.uniq(collOne);
  const uniqCollTwo = _.uniq(collTwo);

  for (const itemOne of uniqCollOne) {
    for (const itemTwo of uniqCollTwo) {
      if (itemOne === itemTwo) {
        count += 1;
        break;
      }
    }
  }
  return count;
};

console.log(getSameCount_([1, 3, 2, 2, 3, 1, 2, 3, 2, 1, 3], [3, 1, 1, 2, 5])); // 1, 2, 3 = 3
