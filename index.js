// Испытания. Javascript: Список диапазонов
const summaryRanges = (coll) => {
  const result = [];
  let temp = "";

  for (let i = 0; i < coll.length; i++) {
    if (!temp) {
      temp += coll[i];
      if (coll[i] + 1 !== coll[i + 1]) {
        temp = "";
      }
    } else {
      if (coll[i] + 1 !== coll[i + 1]) {
        temp += "->";
        temp += coll[i];
        result.push(temp);
        temp = "";
      }
    }
  }

  return result;
};

const first = [0, 1, 2, 4, 5, 7];
const second = [1];
const third = [1, 2, 3];
const fourth = [0, 1, 2, 4, 5, 7];
const fifth = [110, 111, 112, 111, -5, -4, -2, -3, -4, -5];
const sixth = [8, 3, 1, 12, 2, 5];
const seventh = [8, 3, 1, 2, 3];

console.log(summaryRanges(fourth));