export function getNan(arr) {
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
export function setIndicators(criteria, alternatives) {
  let hash = {};
  /*let limit = alternatives.length;*/
  for (let item in createObj(criteria)) {
    hash[item] = ["123", "55454", "654.4", "333"];
  }
  return hash;
}

/*Create Function*/
export function createObj(arr) {
  let hash = {};
  for (let item of arr) hash[item] = null;
  return hash;
}
/* TDA - TwoDimensionalArray */
export function createTDA(source) {
  let twoDimensionalArr = [];
  for (let i = 0; i < source.length + 1; i++) {
    let rowMatrix = [];
    if (i === 0) {
      rowMatrix.push("/");
      Array.from(source, function (x) {
        rowMatrix.push(x);
      });
    } else {
      rowMatrix.push(source[i - 1]);
      source.forEach((item) => rowMatrix.push(" "));
    }
    twoDimensionalArr.push(rowMatrix);
  }
  return twoDimensionalArr;
}
/*Create Function*/

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
