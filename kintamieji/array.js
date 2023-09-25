/*
Array - sarasas / masyvas / kolekcija / listas / matrica

*/

console.clear()

const tuscias = []
console.log(tuscias)

const pazymiai = [10, 2, 6, 8, 7]
console.log(pazymiai)
console.log(pazymiai, 'sudaro', pazymiai.length, 'skaiciai')

const studentai = ['Jonas', 'Maryte', 'Petras', 'Ona']
console.log(studentai)

const PirmasPazymys = pazymiai[0]
console.log(PirmasPazymys)

const AntrasPazymys = pazymiai[1]
console.log(AntrasPazymys)

const KetvirtasPazymys = pazymiai[3]
console.log(KetvirtasPazymys)

const PaskutinisPazymys = pazymiai[pazymiai.length -1]
console.log(PaskutinisPazymys)

const PazymioPozicija = 5

const marks = [10, 2, 8, 4, 6];



let marksSum = marks [0];
marksSum = marksSum + marks [1];
marksSum = marksSum + marks [2]
marksSum = marksSum + marks [3]
marksSum = marksSum + marks [4]

// let marksSum = 0;
// marksSum += marks [1];
// marksSum += marks [2]
// marksSum += marks [3]
// marksSum += marks [4]


const marksCount = marks.length;
const marksAverage = marksSum / marksCount;
const studentMarks = `Studento pazymiu vidurkis yra ${marksAverage}.`;
console.log(studentMarks)

const places = [`Siaures asigalis`, `Afrika`, `Menulis`]
// const placesStr = ${places[0]}, ${places[1]}, ${places[2]}
// const placesStr = places
let placesStr = ` `
placesStr += places[0];
placesStr += `,`;
placesStr += places[1];
placesStr += `, `;
placesStr += places[2];
const placesSentence = `Mano aplankytos vietos: ${placesStr}`
console.log(placesSentence)

const colors = ['geltona', 'zalia', 'raudona'];
console.log(colors);
console.log(colors[1]);

colors[1] = 'žalia'
console.log(colors);