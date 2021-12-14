export function getArrayOfNan(arr) {
  let nanHash = {};
  let i = 0;
  for (let item of arr) {
    if (isNaN(item)) {
      nanHash[i] = [i];
    }
    i++;
  }

  if (!Object.keys[nanHash]) {
    let nanArr = [];
    let nanInxArr = Object.keys(nanHash);
    for (let item in nanInxArr) {
      nanArr.push(arr[nanInxArr[item]]);
    }
    return nanArr;
  }
  return false;
}

export function createObj(arr) {
  let hash = {};
  for (let item of arr) hash[item] = null;
  return hash;
}

export function convertToArray(obj) {
  let result = Object.values(obj).join("").split(",");
  return result;
}

export function setDate(criteria, alternatives) {
  let hash = {};
  /*let limit = alternatives.length;*/
  for (let item in createObj(criteria)) {
    hash[item] = ["123", "55454", "654.4", "333"];
  }
  return hash;
}
