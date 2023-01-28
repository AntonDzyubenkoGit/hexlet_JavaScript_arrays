// Функция getWeekends()
const getWeekends = (param = "long") => {
  const arrLong = ["saturday", "sunday"];
  const arrShort = ["sat", "sun"];

  if (param === "long") {
    return arrLong;
  }
  return arrShort;
};

console.log(getWeekends());
console.log(getWeekends("long"));
console.log(getWeekends("short"));
