import { proccesValues } from "./processingErrors.js";
import { setValues, fromStrToArr, createTDA } from "./utilits.js";
import { read, createObj, toConductExamination } from "./schemes.js";

async function decide(c, a) {
  //c - criteria
  //a - alternatives
  let criteriaArr = fromStrToArr(c);
  //устанавливаются количественные данные (показатели) критериев
  //для каждой из альтернатив
  let quantitativeValues = await getValues(criteriaArr, fromStrToArr(a));
  //PCM - pairwiseComparisonMatrix (Матрица попарных сравнений)
  let criteriaPCM = buildPCM(criteriaArr);
  let evaluations = toConductExamination();

  async function getValues(c, a) {
    let objOfA = createObj(a);
    let values = await setValues(c, objOfA);
    return proccesValues(values);
  }

  function buildPCM(compared) {
    return createTDA(compared);
  }
}
/*******************************************************************************************************/
/*Ввод исходных данных для программы принятия решения с клавиатуры*/
(async function () {
  let setCriteria = () => read("Введите критерии оценки: ");
  let setAlternative = () => read("Введите альтернативы: ");
  decide(await setCriteria(), await setAlternative());
})();
