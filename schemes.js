//абстракции, являющиеся схемами для использующих их программ.
//общие случаи для частной программы(использующей абстракции)

import readline from "readline";
import { stdin as input, stdout as output } from "process";

export function read(promptToEnter) {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({ input, output });
    rl.question(promptToEnter, (source) => {
      resolve(source);
      rl.close();
    });
  });
}

export function createObj(arr, nums) {
  if (arr) {
    let hash = {};
    for (let item of arr) hash[item] = null;
    return hash;
  } else {
    let hash = {};
    for (let i = 1; i <= nums; i++) hash[i] = null;
    return hash;
  }
}

function toConductExamination(subjectEvaluation, numExpert, estimate, curentExpert) {
  if (curentExpert === 0) {
    createObj(undefined, numExpert);
  } else {
    return toConductExamination(
      subjectEvaluation,
      numExpert,
      estimate(subjectEvaluation),
      curentExpert--
    );
  }
}

//example subject:
/*[
  [0, "1", "", "", ""],
  [1, "", "1", "", ""],
  [2, "", "", "1", ""],
  [3, "", "", "", "1"]
]*/
function estimate(matrix) {
  let scale = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  /*В будующем оптимизировать данный алгоритм. Заменить вложенный цикл*/
  let matrixCopy = [...matrix];
  for (let row of matrix) {
    //для определения как строка на данный момент оценивается
    let currentRow = row[1];
    //строка с резульатом оценки текущей ячейки матрицы
    let evaluatedRow = [...row];
    for (let cell of evaluatedRow) {
      if (row.indexof(cell) === 0 || cell === "1") continue;
      cell = read("На сколько оцениваете превосходство критериев:");
    }
    matrixCopy[currentRow] = evaluatedRow;
  }
  return matrixCopy;
}
