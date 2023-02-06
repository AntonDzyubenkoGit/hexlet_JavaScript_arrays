// Испытания. Javascript: Возрастающая последовательность
const isContinuousSequence = (coll) => {
  if (coll.length <= 1) {
    return false;
  }
  const result = [];

  for (let i = 0; i < coll.length; i++) {
    let current = coll[i];
    let next = coll[i + 1];
    let last = coll[coll.length - 1];

    if (current + 1 === next || current === last) {
      result.push(current);
    }
  }
  return result.length === coll.length;
};

// Испытания. Javascript: Возрастающая последовательность. Вариант со сравнением стартового элемента суммированного с индексом, который начинается от 1, со следующим элементом
const isContinuousSequence2 = (coll) => {
  const size = coll.length;
  if (size <= 1) {
    return false;
  }

  const start = coll[0];
  for (let index = 1; index < size; index += 1) {
    if (start + index !== coll[index]) {
      return false;
    }
  }
  return true;
};

console.log(isContinuousSequence2([10, 11, 12, 13]));
console.log(isContinuousSequence2([10, 11, 12, 14, 15]));
