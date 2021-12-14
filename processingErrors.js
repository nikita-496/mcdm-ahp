import { getArrayOfNan, convertToArray } from "./utilits.js";

/*Обработка аргуметов функций*/
export function processInput(inxArr, nameArg) {
  if (inxArr.length === 2) {
    throw new Error(`Значение ${nameArg[0]} не массив. Значение ${nameArg[1]} не массив`);
  }
  throw new Error(`Значение ${nameArg[inxArr]} не массив`);
}

export function proccesQuantitativeData(nums) {
  let quantitiatives = convertToArray(nums);
  let nanArr = getArrayOfNan(quantitiatives);

  if (nanArr.length === 1) {
    throw new Error(`${nanArr} - не число`);
  }
  if (!nanArr) {
    let nanStr = "";
    for (let nan of nanArr) {
      nanStr += `${nan}, `;
    }
    throw Error(`${nanStr.slice(0, -2)} - не числа`);
  }
  return quantitiatives;
}
