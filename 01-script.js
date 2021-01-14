console.log("");
const fs = require('fs');
const checkSpecialCharacters = /[^0-9-\+\s]+/g;
const fileName = process.argv[2];


let bubbleCount = 0;
let insertCount = 0;
let selectCount = 0;
let rapidCount = 0;


// Tri à bulle
const sortBuble = (array) => {
  let copyArray = [...array];
  let n = copyArray.length - 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      bubbleCount += 1;
      if (copyArray[j] < copyArray[j+1]) {
        [copyArray[j], copyArray[j + 1]] = [copyArray[j + 1], copyArray[j]];
      }
    }
    return copyArray;
  }
};


// Tri par insertion
const sortInsertion = (array) => {
  let n = array.length;
  for (let i = 1; i <= n-1; i++) {
    let x = array[i];
    let j = i;
    while (j > 0 && array[j - 1] > x) {
      insertCount += 1;
      array[j] = array[j - 1];
      j-=1;
    }
    array[j] = x;
  }
  return array;
};


// Tri par sélection
const sortSelection = (array) => {
  let copyArray = [...array];
  let n = array.length;
  for (let i = 0; i < n; i++) {
    let mini = i;
    for (let j = i+1; j < n; j++) {
      selectCount += 1;
      if (copyArray[j] < copyArray[mini]) {
        mini = j;
      }
    }
    if (mini !== i) {
      [copyArray[i], copyArray[mini]] = [copyArray[mini], copyArray[i]];
    }
  }
  return copyArray;
};


// Tri rapid
const sortRapid = (array, low = 0, high = array.length -1) => {
  let partition = (array, low, high) => {
    let swap = array[Math.floor((high + low) / 2)];
    while (low <= high) {
      while (array[low] > swap) {
        rapidCount += 1;
        low++;
      }
      while (array[high] < swap) {
        rapidCount += 1;
        high--;
      }
      if (low <= high) {
        rapidCount += 1;
        [array[low], array[high]] = [array[high], array[low]];
        low++;
        high--;
      }
    }
    return low;
  };
  let n = array.length;
  if (n > 1 ) {
    let index = partition(array, low, high);
    if (low < index -1) {
      sortRapid(array, low, index - 1);
    }
    if (index < high) {
      sortRapid(array, index, high);
    }
  }
  return array;
};


// general
const openFileWithCatch = (error) => {
  if (error) {
    console.log("FICHIER INTROUVABLE");
    console.log("FICHIER INTROUVABLE");
    console.log("");
    console.log(error);
    return;
  }
  console.log(`${fileName} ouvert...`);
};

const parseArrayCatch = (data) => {
  if (checkSpecialCharacters.test(data)) {
    console.log("Characteres spéciaux trouvé. Suppression...");
  }
  let refArray = Array.from(data.replace(checkSpecialCharacters, "").split(" "));
  return refArray.map((x) => +x);
};
const printFinalArray = (array) => {
  console.log("Tableau original ci-dessous :");
  console.log(array);
  console.log("");
};

const displayAllResults = (array) => {
  const bubleSort = sortBuble([...array]);
  const insertSort = sortInsertion([...array]);
  const selectionSort = sortSelection([...array]);
  const rapidSort = sortRapid([...array]);

  const resultString = (strategy, result, count) => {
    return `Tri par ${strategy} => [${result}] avec ${count} comparaisons`;
  };


// Output
console.log("******************************");
console.log("**                          **");
console.log("**     Résultats finaux     **");
console.log("**                          **");
console.log("******************************");
console.log("");
console.log(resultString("Bulle", bubleSort, bubbleCount));
console.log(resultString("Insertion", insertSort, insertCount));
console.log(resultString("Selection", selectionSort, selectCount));
console.log(resultString("Rapide", rapidSort, rapidCount));
};


// Méthode asynchrone
fs.readFile(fileName, 'utf8', (error, data) => {
  openFileWithCatch(error);
  array = parseArrayCatch(data);
  printFinalArray(array);
  displayAllResults(array);
});
