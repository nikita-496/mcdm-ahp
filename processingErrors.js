/*Обработка аргуметов функций*/
export function processInput(inxArr, nameArg) {
  if (inxArr.length === 2) {
    throw new Error(`Значение ${nameArg[0]} не массив. Значение ${nameArg[1]} не массив`);
  }
  throw new Error(`Значение ${nameArg[inxArr]} не массив`);
}
