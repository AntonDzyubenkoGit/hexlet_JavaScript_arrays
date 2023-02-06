// Испытания. Javascript: Сравнение версий
const compareVersion = (a, b) => {
  const arrA = a.split(".");
  const arrB = b.split(".");
  let diff = 0;
  const lenghtArr = arrA.length;

  for (let i = 0; i < lenghtArr; i++) {
    if (arrA[i] === arrB[i]) {
      diff = 0;
    } else if (Number(arrA[i]) > Number(arrB[i])) {
      diff = 1;
      break;
    } else {
      diff = -1;
    }
  }
  return diff;
};

// Испытания. Javascript: Сравнение версий. Версия без цикла, но только для одного числа после точки
const compareVersion2 = (first, second) => {
  const [a1, b1] = first.split(".");
  const [a2, b2] = second.split(".");

  const major = Math.sign(a1 - a2);
  const minor = Math.sign(b1 - b2);

  return major === 0 ? minor : major;
};

console.log(compareVersion("3.2", "2.12"));
