/* Exercitiu
Există două echipe de gimnastică, Delfinii și Koalas. Ei concurează unul împotriva celuilalt de 3 ori. Câștigătorul cu cel mai mare scor mediu câștigă trofeul!
1. Calculați scorul mediu pentru fiecare echipă, folosind datele testului de mai jos
2. Comparați scorurile medii ale echipei pentru a determina câștigătorul competiției și afisaați-o in consolă. Nu uitați că poate exista o remiză, așa că testați și pentru asta (remiză înseamnă că au același punctaj mediu).
3. Includeți o cerință pentru un scor minim de 100. Cu această regulă, o echipă câștigă doar dacă are un scor mai mare decât cealaltă echipă și, în același timp, un scor de cel puțin 100 de puncte. SFAT: Folosiți un operator logic pentru a testa scorul minim, precum și mai multe blocuri else-if 😉
4. Scorul minim se aplică și la o remiză! Deci, o remiză are loc doar atunci când ambele echipe au același scor și ambele au un scor mai mare sau egal de 100 de puncte. În caz contrar, nicio echipă nu câștigă trofeul.
DATE DE TEST: Delfinii scor 96, 108 și 89. Koalas scor 88, 91 și 110
DATE TEST punctul 3: Delfinii scor 97, 112 și 101. Koala scor 109, 95 și 123
DATE TEST punctul 4: Delfinii scor 97, 112 și 101. Koala scor 109, 95 și 106
*/

// Rezolvare:

let scoreDelfini = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;
console.log(`punctul 1,2 scor Delfini - ${scoreDelfini}, scor Koalas - ${scoreKoalas}`);

if (scoreDelfini > scoreKoalas) {
  console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDelfini) {
  console.log('Koalas win the trophy 🏆');
} else if (scoreDelfini === scoreKoalas) {
  console.log('Both win the trophy!');
}

// Punctul 3
scoreDelfini = (97 + 112 + 101) / 3;
scoreKoalas = (109 + 95 + 123) / 3;
console.log(`punctul 3 scor Delfini - ${scoreDelfini}, scor Koalas - ${scoreKoalas}`);

if (scoreDelfini > scoreKoalas && scoreDelfini >= 100) {
  console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDelfini && scoreKoalas >= 100) {
  console.log('Koalas win the trophy 🏆');
} else if (scoreDelfini === scoreKoalas && scoreDelfini >= 100 && scoreKoalas >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy 😭');
}

// Punctul 4

scoreDelfini = (97 + 112 + 101) / 3;
scoreKoalas = (109 + 95 + 106) / 3;
console.log(`punctul 4 scor Delfini - ${scoreDelfini}, scor Koalas - ${scoreKoalas}`);

if (scoreDelfini > scoreKoalas && scoreDelfini >= 100) {
    console.log('Dolphins win the trophy 🏆');
  } else if (scoreKoalas > scoreDelfini && scoreKoalas >= 100) {
    console.log('Koalas win the trophy 🏆');
  } else if (scoreDelfini === scoreKoalas && scoreDelfini >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy!');
  } else {
    console.log('No one wins the trophy 😭');
  }