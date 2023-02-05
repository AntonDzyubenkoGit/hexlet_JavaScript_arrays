// Испытания. JS.Массивы: Длина последнего слова
const str1 = "man in BlacK";
const str2 = "hello, world!  ";
const str3 = "  hi    ";

const arr = [str2];

const getLastWordLength = (str) => {
  const result = str.trim().split(" ");
  const lengthOfResult = result.length - 1;

  return result[lengthOfResult].length;
};

const getLastWordLengthByAt = (str) => {
  const result = str.trim().split(" ");
  const lastWord = result.at(-1);

  return lastWord.length;
};

console.log(getLastWordLengthByAt(str2));
