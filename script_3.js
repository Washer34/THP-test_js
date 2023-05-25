let floor = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
let space = floor - 1;
while (space !== -1) {
  console.log(" ".repeat(space) + "#".repeat(floor - space));
  space --;
};