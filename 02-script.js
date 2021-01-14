// General
let subjectOneArray1 = [10, 15, 3, 7];
let subjectOneFactor1 = 17;
let subjectOneArray2 = [1, 8, 10, 21];
let subjectOneFactor2 = 19;

let subjectTwoArray1 = [3, 7, 8, 3, 6, 1];
let subjectTwoArray2 = [1, 4, 5, 8];



// Exercice 1 - complexité O(n²) : comparer chaque élément entre eux à l'aide de 2 boucles imbriquées :
const arrayWithOn2 = (array, num) => {
  let numbers = [...array];
  let n = array.length;
  for (let i = 0; i < n; i++) {
    for (let m = i + 1; m <= n; m++) {
      if (numbers[m] + numbers[i] === num)
        return true;
    }
    return false;
  }
};

console.log("");
console.log("Exercice 1")
console.log("Sujet 1: complexité O(n²)");
console.log(arrayWithOn2(subjectOneArray1, subjectOneFactor1));
console.log(arrayWithOn2(subjectOneArray2, subjectOneFactor2));



// Exercice 2 - complexité O(n²) : comparer chaque élément entre eux à l'aide de 2 boucles imbriquées :
const arraySunWithOn2 = (array) => {
  let numbers = [...array];
  let count = 1;
  let hasView = true;
  let n = array.length - 2;
  for (let i = 0; i < n; i++) {
    for (let m = i + 1; m <= n; m++) {
      if (numbers[m] <= numbers[i]) {
        hasView = false;
      }
    }
    hasView ? count++ : null;
  }
  return count;
};

console.log("");
console.log("Exercice 2")
console.log("Sujet 2: complexité O(n²)");
console.log(arraySunWithOn2(subjectTwoArray1));
console.log(arraySunWithOn2(subjectTwoArray2));



// Exercice 3 - complexité O(n) : parcourir plusieurs fois chaque élément du tableau (pas de bouble imbriquée)
