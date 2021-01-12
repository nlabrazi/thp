console.log("Require file");
console.log("");


// const fs = require('fs');
// const fileName = process.argv[2];

// // Méthode asynchrone
// fs.readFile(fileName, 'utf8', (error, data) => {
//     if (error) {
//         console.error(error.message);
//         return ;
//     }
//     console.log(data);
// });

// // Méthode synchrone
// try {
//     const data = fs.readFileSync(fileName, 'utf8');
//     console.log(data);
// } catch (error) {
//     console.error(error.message);
// }


// Tri à bulle
var arrayData = [48, -2, 6, 12, 0, -4];

const sortBuble = (arrayData) => {
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < arrayData.length -1; i++) {
     if (arrayData[i+1] < arrayData[i]) {
      [arrayData[i], arrayData[i + 1]] = [arrayData[i + 1], arrayData[i]];
      isSorted = false;
    }
  }
}
return arrayData;
}
console.log("Tri à bulle: " + sortBuble(arrayData));



// Tri par insertion
var arrayData2 = [48, -2, 6, 12, 0, -4];

const sortInsertion = (arrayData2) => {
  n = arrayData2.length;
  for (let i = 1; i <= n-1; i++) {
    x = arrayData2[i];
    j = i;
    while (j > 0 && arrayData2[j - 1] > x) {
      arrayData2[j] = arrayData2[j - 1];
      j-=1;
    }
    arrayData2[j] = x;
  }
  return arrayData2;
}
console.log("Tri par insertion : " + sortInsertion(arrayData2));



// Tri par sélection
var arrayData3 = [48, -2, 6, 12, 0, -4];

const sortSelection = (arrayData3) => {
  n = arrayData3.length;
  for (let i = 0; i < n; i++) {
    let mini = i;
    for (let j = i+1; j < n; j++) {
      if (arrayData3[j] < arrayData3[mini]) {
        mini = j;
      }
    }
    if (mini !== i) {
      [arrayData3[i], arrayData3[mini]] = [arrayData3[mini], arrayData3[i]];
    }
  }
  return arrayData3;
}
console.log("Tri par selection : " + sortSelection(arrayData3));



// Tri rapide
var arr = [48, -2, 6, 12, 0, -4];

  let swap = (arr, i, j) => {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  };
  let partition = (arr, low, high) => {
    let q = low, i;
    for (i = low; i < high; i++) {
      if (arr[i] < arr[high]) {
        swap(arr, i, q);
        q++;
      }
    }
    swap(arr, i, q);
    return q;
  };
  let sortRapide = (arr, low, high) => {
    if (low < high) {
      let pivot = partition(arr, low, high);
      sortRapide(arr, low, pivot - 1);
      sortRapide(arr, pivot + 1, high);
      return arr;
    }
  };
  return arr;

console.log("Tri rapide : " + sortRapide(arr));
