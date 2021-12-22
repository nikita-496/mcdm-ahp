import { getNan, formObjToArray } from "./utilits.js";

/*Индикаторы по которым проводится оценка, должны иметь числовой тип*/
export function proccesValues(obj) {
  let values = formObjToArray(obj);
  let nanArr = getNan(values);

  if (nanArr.length === 1) {
    throw new Error(`${nanArr} - не число`);
  }
  if (nanArr.length > 1) {
    let nanStr = "";
    for (let nan of nanArr) {
      nanStr += `${nan}, `;
    }
    throw Error(`${nanStr.slice(0, -2)} - не числа`);
  }
  return obj;
}
