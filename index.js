var _ = require("lodash");

const friends1 = ["vasya", "kolya", "petya"];
const friends2 = ["igor", "petya", "sergey", "vasya", "sasha"];
const text1 = "yyab";
const text2 = "You know nothing Jon Snow and don't tell me more your lies";

const test1 = _.intersection(friends1, friends2); // пересечение
const test2 = _.union(friends1, friends2); // объединение
const test3 = _.difference(friends1, friends2); // разность

// Функция countUniqChars(), которая получает на вход строку и считает, сколько символов (без учёта повторяющихся символов) использовано в этой строке
const countUniqChars = (string) => {
  if (string.length === 0) {
    return 0;
  }

  const charsArray = [];

  for (let i = 0; i < string.length; i++) {
    if (charsArray.includes(string[i]) === false) {
      charsArray.push(string[i]);
    }
  }
  return charsArray.length;
};

// Функция countUniqChars(). Вариант с _.uniq()
const countUniqCharsByUniq = (string) => {
  if (string.length === 0) {
    return 0;
  }
  const charsArray = _.uniq(string);
  return charsArray.length;
};

// Функция countUniqChars(). Вариант с _.union()
const countUniqCharsByUnion = (str) => {
  if (string.length === 0) {
    return 0;
  }
  
  const res = [];

  for (const char of str) {
    res.push(char);
  }

  const result = _.union(res, []);

  return result.length;
};

console.log(countUniqChars(text2));
console.log(countUniqCharsByUniq(text2));
console.log(countUniqCharsByUnion(text2));
