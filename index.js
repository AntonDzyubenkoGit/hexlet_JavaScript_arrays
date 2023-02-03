// Функция getIntersectionOfSortedArrays(), вариант с _.intersection()
const _ = require("lodash");
const getIntersectionOfSortedArraysByLodash = (arr1, arr2) => {
  return _.intersection(arr1, arr2);
};

// Функция getIntersectionOfSortedArrays(), вариант с includes()
const getIntersectionOfSortedArraysIncludes = (arr1, arr2) => {
  const result = [];
  for (let i = 0; i < arr2.length; i += 1) {
    if (arr1.includes(arr2[i]) && !result.includes(arr2[i])) {
      result.push(arr2[i]);
    }
  }
  return result;
};

// Функция getIntersectionOfSortedArrays(), которая принимает на вход два отсортированных массива и находит их пересечение
const getIntersectionOfSortedArrays = (arr1, arr2) => {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      result.push(arr1[i]);
      i++;
      j++;
    } else {
      arr1[i] > arr2[j] ? j++ : i++;
    }
  }

  return [...new Set(result)];
};



console.log(
  getIntersectionOfSortedArrays([10, 11, 24], [10, 13, 14, 18, 24, 30])
);
console.log(getIntersectionOfSortedArrays([10, 11, 24], [-2, 3, 4]));
console.log(getIntersectionOfSortedArrays([], [2]));

console.log(
  getIntersectionOfSortedArrays([1, 1, 1, 2, 2, 2], [1, 1, 2, 2, 3, 3])
);
