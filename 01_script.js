//2.1.1. Méthode itérative
console.log("");
console.log("Écris une fonction itérative (qui fonctionne par itération et non par récursivité) qui retourne");
console.log("la valeur factorielle d'un nombre donné en paramètre.");

const computeFactorialIt = (n) => {
  let result = 1;
  for (let i = 1; i <= n; i++)
    result = result * i;
  return result;
}

console.log("Réponse ---> " + computeFactorialIt(10));


//2.1.2. Méthode récursive
console.log("");
console.log("Maintenant, même exercice, mais en utilisant la récursivité !");

const computeFactorialRec = (n) => {
  if (n === 0) return 1;
  else return n * computeFactorialRec(n - 1);
}
console.log(computeFactorialRec(10));



//2.2.1. Méthode itérative
console.log("");
console.log("Écris une fonction itérative qui retourne son premier argument à la puissance p, où p est");
console.log("le second argument. En cas d'erreur, la fonction doit retourner 0.");

const computePowerIt = (n, p) => {
  let result = 1;
  for (let i = 0; i < p; i++) {
    result = result *= n;
  }
  return result;
};
console.log(computePowerIt(2, 5));

//2.2.2. Méthode récursive
console.log("");
console.log("Même exercice (et oui, encore...) en utilisant la récursivité !");

const computePowerRect = (n, p) => {
  if (p === 0) return 1;
  else p -= 1; return n * computePowerRect(n, p);
};
console.log(computePowerRect(2, 5));


//2.3. Racine carrée
console.log("");
console.log("Pour cet exercice, tu vas devoir écrire une fonction qui retourne la racine carrée d'un nombre.");

const computeSquareRoot = (n) => {
  return n**0.5;
};
console.log(computeSquareRoot(17));



//2.4. Nombre premier
console.log("");
console.log("Dans cet exercice, tu vas devoir écrire une fonction qui retourne true si n est un nombre premier et false s'il ne l'est pas.");

const isPrimerNumberBis = (n, i) => {
  if (i === 1 ) {
    console.log(n+" est un nombre premier");
    return true;
  } else if (Number.isInteger(n/i)) {
    console.log(n+ " n'est PAS un nombre premier");
    return false;
  } else {
    return isPrimerNumberBis(n, i-1);
  }
}
const isPrimeNumber = (n) => {
  var i = n;
  return isPrimerNumberBis(n, i-1);
}
console.log(isPrimeNumber(21));



//2.5 Trouver un nombre premier
console.log("");
console.log("Tu vas devoir écrire une fonction qui va retourner le plus petit nombre premier supérieur ou égal à n");

const nextPrimeNumberBis = (n, i) => {
  if (i === 1 ) {
    console.log(n+" Est le prochain plus grand nombre premier");
    return true;
  } else if (Number.isInteger(n/i)) {
    return nextPrimeNumber(n+1)
  } else {
    return nextPrimeNumberBis(n, i-1);
  }
}
const nextPrimeNumber = (n) => {
  var i = n;
  return nextPrimeNumberBis(n, i-1);
}
const findSupPrime = (n) => {
  return nextPrimeNumber(n+1);
}
console.log(findSupPrime(19));
