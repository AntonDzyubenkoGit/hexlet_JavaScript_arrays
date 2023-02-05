// Функция flatten(), которая принимает на вход массив и выпрямляет его: если элементами массива являются массивы, то flatten сводит всё к одному массиву, раскрывая один уровень вложенности

const one = []; // []
const two = [1, [3, 2], 9]; // [1, 3, 2, 9]
const three = [1, [[2], [3]], [9]]; //[1, [2], [3], 9]

const flatten = (coll) => {
  let result = [];
  for (const elem of coll) {
    if (Array.isArray(elem)) {
      result = [...result, ...elem];
    } else {
      result = [...result, elem];
    }
  }

  return result;
};

const flattenTwo = (coll) => {
  const result = [];
  for (const elem of coll) {
    if (Array.isArray(elem)) {
      for (const elemArr of elem) {
        result.push(elemArr);
      }
    } else {
      result.push(elem);
    }
  }

  return result;
};

console.log(flatten(two));
