import { proccesIndicators } from "./processingErrors.js";
import { createObj, setIndicators, fromStrToArr, createTDA } from "./utilits.js";

function decide(criteriaStr, alternativesStr) {
  let criterionIndicators = getIndicators(fromStrToArr(criteriaStr), fromStrToArr(alternativesStr));
  let CriteriaPCM = buildPCM(fromStrToArr(criteriaStr)); //PCM - pairwiseComparisonMatrix*/
  return "работает";
}

function getIndicators(criteria, alternatives) {
  let altObj = createObj(alternatives);
  let indeicators = setIndicators(criteria, altObj);
  return proccesIndicators(indeicators);
}

function buildPCM(compared) {
  console.log(createTDA(compared));
}
/*******************************************************************************************************/

let criteria =
  "Грузоборот, Площадь складов, Пропускная способность, Портовая инфраструктра, Трансопртный потеницал региона, Валовый региональный продукт на душу населения, Доля населения с доходом ниже прожиточного минимума, Месторождение полезных ископаемых";
let alternatives = "Архангельск, Варандей, Дудинка, Мурманск";
console.log(decide(criteria, alternatives));
