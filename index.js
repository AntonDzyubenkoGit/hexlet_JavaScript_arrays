// push() добавляет элемент в конец массива
// unshift() добавляет элемент в начало массива
//  delete arr[index] удаляет элемент из массива

// Функция swap(), которая меняет местами первый и последний элемент массива

const swap = (arr) => {
  const keeper = arr[0];
  if (arr.length < 2) {
    return arr;
  }
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = keeper;
  return arr;
};

const array = [1, 2];
console.log(swap(array));
