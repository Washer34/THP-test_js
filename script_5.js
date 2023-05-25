const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
let i = 0
while (i < books.length) {
  if (books[i].rented === 0) {
    console.log("Non, le livre " + books[i].title + " n'a jamais été emprunté.");
    break;
  } else {
    i ++;
  }
  console.log("Oui, tous les livres ont été au moins empruntés une fois");
}


console.log("Quel est livre le plus emprunté ?");
books.sort((a, b) => a.rented - b.rented);
more = books[books.length - 1]
console.log("le livre le plus emprunté est: " + more.title + " qui a été emprunté " + more.rented + " fois");


console.log("Quel est le livre le moins emprunté ?");
less = books[0]
console.log("le livre le moins emprunté est: " + less.title + " qui a été emprunté " + less.rented + " fois");


console.log("Trouve le livre avec l'ID: 873495");
for(let i = 0; i < books.length; i++) {
  if (books[i].id === 873495) {
    console.log("Livre trouvé, il s'agit de : " + books[i].title);
  }
}


console.log("Supprime le livre avec l'ID: 133712");
for(let i = 0; i < books.length; i++) {
  if (books[i].id === 133712) {
    console.log("Livre trouvé, il s'agit de : " + books[i].title + " je le supprime.");
    books.splice(i, 1);
  }
}


console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).");
console.log(books.sort((a, b) => a.title.localeCompare(b.title)));
