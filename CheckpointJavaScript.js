// https://edabit.com/challenge/3LpBLgNRyaHMvNb4j : 
function addition(a, b) {
  return a + b;	
}

// https://edabit.com/challenge/NAQhEoxbofPidLxm9
function addition(num) {
	return num += 1;
}

// https://edabit.com/challenge/MvZK536X7fyrWH8Qc
function giveMeSomething(a) {
  return "something "+ a;	
}

// https://edabit.com/challenge/PTiLYyb4A69KZtBCg
function lessThanOrEqualToZero(num) {
  if (num > 0) {
    return false;
  } else {
    return true;
  }	
}

// https://edabit.com/challenge/G3p4nWNqAHNEq3r4f
function isEqual(arr) {
 // 1. Fonction interne pour transformer un nombre en texte, séparer ses chiffres et les additionner
    const sommerChiffres = (nombre) => {
        return Math.abs(nombre)              // Gère les nombres négatifs
            .toString()                      // Convertit le nombre en chaîne de caractères ("42")
            .split('')                       // Sépare chaque chiffre dans un tableau (["4", "2"])
            .reduce((acc, chiffre) => acc + Number(chiffre), 0); // Additionne les chiffres (4 + 2)
    };
    // 2. Extraction des deux nombres du tableau
    const premierNombre = arr[0];
    const secondNombre = arr[1];

    // 3. Comparaison des deux sommes
    return sommerChiffres(premierNombre) === sommerChiffres(secondNombre);
}

// https://edabit.com/challenge/nhXofMMyrowMyr9Nv
function nextEdge(side1, side2) {
	return (side1 + side2)-1; 
}


function fileFits(capacity, used, size) {
  return (used + size) > capacity ? false : true ;
  // Write your code here.
}

// https://edabit.com/challenge/ccv2_5d5274a1e32371c552de7d05
function shouldRetry(failed, attempts, limit) {
  return failed == true && attempts < limit ;
  // Write your code here.
}

// https://edabit.com/challenge/GwvwXHWCThHZrR7xu
function footballPoints(wins, draws, losses) {
	return (wins*3) + draws;
}

// https://edabit.com/challenge/R3AYf3eTdATXTQTdZ
function firstLast(arr) {
  return [arr.at(0), arr.at(-1)];
}

// https://edabit.com/challenge/3EQGHyiYTNc9LPmhF
function countVowels(str) {
  const vowels = "aeiou";
  var count = 0;
  for (var i of str) {
    if (vowels.includes(i)){
      count++
    }
  }
  return count;
}

// https://edabit.com/challenge/x6hfHCyQtbvf6dQDK
function powerOfTwo(num) {
	while (num % 2 == 0){
      num = num / 2;
  }
  return num === 1;
}

// https://edabit.com/challenge/Q3n42rEWanZSTmsJm
function minMax(arr) {
	var max = arr[0];
  var min = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max){
      max = arr[i];
    }
    if (arr[i] < min){
    min = arr[i];
    }
  }
  return [min, max];
}

// https://edabit.com/challenge/6R6gReGTGwzpwuffD
function sevenBoom(arr) {
  for (var i = 0; i < arr.length; i++){
    let arrTexte = arr[i].toString();
    if (arrTexte.includes('7')) {
      return "Boom!";
    }
    }
  return "there is no 7 in the array"
  }

  // https://edabit.com/challenge/kJQYTCCWSnzhXG9dn
  function reverse(arr) {
  var tab = [];
	for (i = arr.length-1; i >= 0; i--){
      tab.push(arr[i]);
  }
  return tab;
}


// https://edabit.com/challenge/Wd7WKqm95jhcAGATG
function removeDups(arr) {
  var tab = [];
  for (var i = 0; i < arr.length; i++) {
    var elemt = arr[i];
    if (!tab.includes(elemt)) {
      tab.push(elemt);
    }
  }
  return tab;
}

// https://edabit.com/challenge/DX898Gd3L6QXAWMSf
function largestEven(nums) {
	var maxPair = -1;
  for(i = 0; i < nums.length; i++){
    var nombre = nums[i];
    if (nombre % 2 === 0){
      if (nombre > maxPair){
        maxPair = nombre
      }
    }
  }
  return maxPair;
}