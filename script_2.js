// Un prompt s'affiche avec la question suivante
let number = prompt("De quel nombre veux-tu calculer la factorielle?")
let result = 1
// Utilisateur rentre un nombre (par ex 4)
while (number > 1) {
  result = result * number
  number --
};
// Dans la console le résultat suivant est affiché
console.log(`Le résultat est : ${result}`);