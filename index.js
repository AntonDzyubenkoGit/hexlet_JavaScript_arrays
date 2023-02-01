// Функция buildDefinitionList(), которая генерирует HTML список определений (теги <dl>, <dt> и <dd>) и возвращает получившуюся строку
const definitions = [
  ["Блямба", "Выпуклость, утолщения на поверхности чего-либо"],
  ["Бобр", "Животное из отряда грызунов"],
];

const buildDefinitionList = (coll) => {
  if(coll.length === 0) {
    return '';
  }
  const parts = [];
  for (const item of coll) {
    parts.push(`<dt>${item[0]}</dt><dd>${item[1]}</dd>`);
  }
  const innerValue = parts.join("");
  const result = `<dl>${innerValue}</dl>`;
  return result;
};

console.log(buildDefinitionList([]));





// Функция buildHTMLList(), которая возвращает HTML-список (ul)
const coll = ["milk", "butter", "bread", "onion", "carrot"];

const buildHTMLListFirst = (coll) => {
  let result = "<ul>";
  for (const item of coll) {
    result = `${result}<li>${item}</li>`;
  }
  result = `${result}</ul>`;

  return result;
};

const buildHTMLListSecond = (coll) => {
  const parts = [];
  for (const item of coll) {
    parts.push(`<li>${item}</li>`);
  }
  const innerValue = parts.join("");
  const result = `<ul>${innerValue}</ul>`;
  return result;
};
