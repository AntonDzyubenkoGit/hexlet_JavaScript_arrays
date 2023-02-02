const test = [3, 2, 10, -2, 0, 15, 11, -17, -8, 8, 16, 105];

// Функция bubbleSort()
const bubbleSort = (coll) => {
  let stepsCount = coll.length - 1;
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < stepsCount; i += 1) {
      if (coll[i] > coll[i + 1]) {
        const temp = coll[i];
        coll[i] = coll[i + 1];
        coll[i + 1] = temp;

        swapped = true;
      }
    }
    stepsCount -= 1;
  } while (swapped);

  return coll;
};

//console.log(bubbleSort(test));

// Сщртировка встроенной функцией JS sort()
const compareFunction = (a, b) => {
  return a - b;
};

//console.log(test.sort(compareFunction));

// Функция bubbleSort(), мой вариант

const bubbleSortMyOwn = (coll) => {
  let collLength = coll.length - 1;
  let switcher;

  do {
    switcher = false;

    for (let i = 0; i < collLength; i++) {
      if (coll[i] > coll[i + 1]) {
        let temp = coll[i];
        coll[i] = coll[i + 1];
        coll[i + 1] = temp;

        switcher = true;
      }
    }
    collLength -= 1;
  } while (switcher);

  return coll;
};

console.log(bubbleSortMyOwn(test));
