import { processInput } from "./processingErrors.js";

/*Функция принимает в качеcтве параметров, выражения, значения которых имеют тип массива*/
function decide(criteria, alternatives) {
  for (let i = 0, inxErrorAray = []; i < arguments.length; i++) {
    if (!Array.isArray(arguments[i])) {
      inxErrorAray.push(i);
    }
    if (i < arguments.length - 1) continue;
    if (inxErrorAray.length !== 0) {
      processInput(inxErrorAray, getNameInput().split(", "));
    }
  }

  return "работает";
}

function getNameInput() {
  let regExp = /function\s*\w*\(([\s\S]*?)\)/;
  if (regExp.test(decide)) {
    return RegExp.$1;
  }
}

let criteria = [
  "Грузооборот",
  "Площадь складов",
  "Пропускная способность",
  "Портовая инфраструктра",
  "Трансопртный потеницал региона",
  "Валовый региональный продукт на душу населения",
  "Доля населения с доходом ниже прожиточного минимума",
  "Месторождение полезных ископаемых",
];
let alternatives = ["Архангельск", "Варандей", "Дудинка", "Мурманск"];

console.log(decide(criteria, alternatives));
