arn1 = "CCGUCGUUGCGCUACAGC"
let result1 = ""

for(let i = 0; i < arn1.length; i++) {
  if (i > 0 && i % 3 === 0) {
    result1 += "-";
  }
  result1 += arn1.charAt(i);
}

console.log(result1)

const codons = result1.split("-");
let i = 0;

while (i < codons.length) {

  if (
    codons[i] === "UCU" ||
    codons[i] === "UCC" ||
    codons[i] === "UCA" ||
    codons[i] === "UCG" ||
    codons[i] === "AGU" ||
    codons[i] === "AGC"
  ) {
    codons[i] = "Sérine";
  } else if (
    codons[i] === "CCU" ||
    codons[i] === "CCC" ||
    codons[i] === "CCA" ||
    codons[i] === "CCG"
  ) {
    codons[i] = "Proline";
  } else if (codons[i] === "UUA" || codons[i] === "UUG") {
    codons[i] = "Leucine";
  } else if (codons[i] === "UUU" || codons[i] === "UUC") {
    codons[i] = "Phénylalanine";
  } else if (
    codons[i] === "CGU" ||
    codons[i] === "CGC" ||
    codons[i] === "CGA" ||
    codons[i] === "CGG" ||
    codons[i] === "AGA" ||
    codons[i] === "AGG"
  ) {
    codons[i] = "Arginine";
  } else if (codons[i] === "UAU" || codons[i] === "UAC") {
    codons[i] = "Tyrosine";
  }

  i++;
}

console.log(codons.join("-"));


arn2 = "CCUCGCCGGUACUUCUCG"
let result2 = ""

for(let i = 0; i < arn2.length; i++) {
  if (i > 0 && i % 3 === 0) {
    result2 += "-";
  }
  result2 += arn2.charAt(i);
}

console.log(result2)

const codons2 = result2.split("-");
let v = 0;

while (v < codons2.length) {

  if (
    codons2[v] === "UCU" ||
    codons2[v] === "UCC" ||
    codons2[v] === "UCA" ||
    codons2[v] === "UCG" ||
    codons2[v] === "AGU" ||
    codons2[v] === "AGC"
  ) {
    codons2[v] = "Sérine";
  } else if (
    codons2[v] === "CCU" ||
    codons2[v] === "CCC" ||
    codons2[v] === "CCA" ||
    codons2[v] === "CCG"
  ) {
    codons2[v] = "Proline";
  } else if (codons2[v] === "UUA" || codons2[v] === "UUG") {
    codons2[v] = "Leucine";
  } else if (codons2[v] === "UUU" || codons2[v] === "UUC") {
    codons2[v] = "Phénylalanine";
  } else if (
    codons2[v] === "CGU" ||
    codons2[v] === "CGC" ||
    codons2[v] === "CGA" ||
    codons2[v] === "CGG" ||
    codons2[v] === "AGA" ||
    codons2[v] === "AGG"
  ) {
    codons2[v] = "Arginine";
  } else if (codons2[v] === "UAU" || codons2[v] === "UAC") {
    codons2[v] = "Tyrosine";
  }

  v++;
}

console.log(codons2.join("-"));