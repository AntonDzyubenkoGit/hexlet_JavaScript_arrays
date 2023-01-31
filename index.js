const first = [];
const second = [1, 2, 3];
const third = [1, 2, 8];
const fourth = [2, 2, 8];
const fifth = [1, 2, -3];
const sixth = [-3, 2, 1];

// Функция getSameParity(),
const getSameParity = (coll) => {
  const result = [];

  for (const item of coll) {
    if (Math.abs(coll[0]) % 2 === 0) {
      if (item % 2 === 0) {
        result.push(item);
      }
    } else {
      if (item % 2 !== 0) {
        result.push(item);
      }
    }
  }
  return result;
};

console.log(getSameParity(sixth));
