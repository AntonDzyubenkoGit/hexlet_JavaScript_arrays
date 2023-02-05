// Функция getMax(),  которая ищет в массиве максимальное значение и возвращает его
const getMax = (coll) => {
  if (coll.length === 0) {
    return null;
  }

  let [max, ...rest] = coll;

  for (const integer of rest) {
    if (integer > max) {
      max = integer;
    }
  }
  return max;
};

console.log(getMax([]));
