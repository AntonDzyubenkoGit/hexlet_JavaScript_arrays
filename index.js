// Функция reverse()

const names1 = ["john", "smith", "karl"];
const names2 = [];
const names3 = ["one", "two"];
const names4 = ["john", "smith", "karl", "alan", "joe"];

/*
// Вариант реверса без изменения исходного массива
const reverse = (arr) => {
  const result = [];
  let j = 0;
  for(let i = arr.length - 1; i >= 0; i--) {
    result[j] = arr[i];
    j++;
  }
  arr = result;
  return arr;
};
*/

const reverse = (arr) => {
  let j = 0;

  for (let i = arr.length - 1; i >= arr.length / 2; i--) {
    const first = arr[j];
    arr[j] = arr[i];
    arr[i] = first;
    j++;
  }
  return arr;
};

console.log(reverse(names4));
