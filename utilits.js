import { createObj, readSource } from "./schemes.js";
export function getNan(arr) {
  let nanArr = searchNan(arr);
  function searchNan(searchSource) {
    let foundNan = [];
    for (let item of searchSource) {
      let values = Object.values(item);
      let nan = values.filter((value) => isNaN(value));
      nan.length ? foundNan.push(nan.join()) : foundNan;
    }
    return foundNan;
  }
  return nanArr.length ? nanArr : false;
}

export async function setValues(criteria, alternatives) {
  /*В будующем оптимизировать данный алгоритм. Заменить вложенный цикл*/
  for (let alternative in alternatives) {
    let hash = {};
    for (let item in createObj(criteria)) {
      hash[item] = await get(item, alternative);
    }
    alternatives[alternative] = hash;
    alternatives;
  }
  return alternatives;
}

async function get(с, a) {
  return await readSource(`Введите числовое значение критерия ${с} для альтерантивы ${a}: `);
}

/* TDA - TwoDimensionalArray */
export function createTDA(source) {
  //форматтирует наименование критериев и альтернатив в цифры(для упращения, т.к наименования могут быть длинными),
  //соответсвующие индексу
  let inxFormatSource = source.map((name) => source.indexOf(name));

  let twoDimensionalArr = [];
  for (let i = 0; i < inxFormatSource.length; i++) {
    let rowMatrix = [];
    rowMatrix.push(inxFormatSource[i]);
    inxFormatSource.forEach((item) => {
      if (item === i) {
        return rowMatrix.push("1");
      }
      return rowMatrix.push(" ");
    });
    twoDimensionalArr.push(rowMatrix);
  }
  return twoDimensionalArr;
}

/* For Convert */
export function formObjToArray(obj) {
  let result = Object.values(obj);
  return result;
}
export function fromStrToArr(item) {
  let result = item.split(", ");
  return result;
}
/* For Convert */
