// Функция get(), которая извлекает из массива элемент по указанному индексу, если индекс существует, либо возвращает значение по умолчанию

const get = (arr, index, param = null) => {
  if (index < arr.length && index >= 0) {
    return arr[index];
  } else {
    return param;
  }
};

const cities = ["moscow", "london", "berlin", "porto"];
console.log(get(cities, 0));
