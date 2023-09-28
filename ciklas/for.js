/*
FOR - 'for' ciklas
bazinis visu galimu ciklu
*/

console.clear();

console.log('START');

// intervalas [0;2]
for (let i = 0; i <= 2; i++) {
    console.log (i)
}
console.log('PAUSE');

// intervalas [3;5]
for (let i = 3; i <= 5; i++) {
    console.log (i)
}

console.log ('FINISH');

console.clear();

for (let f = 0; f < 10; ++f) {
    const sentence = `The number is: ${f+1}.`;
    console.log(sentence);
}

console.clear()

// Skaiciai intervale nuo 3 iki 13 imtinai yra: 3 4 5 6 7 8 9 10 11 12 13.

const start = 3;
const finish = 8;
let numberSequence = '';

for (let i = start ; i <= finish; i++) {
    numberSequence += ' ' + i;
}
const numberLine = `Skaiciai intervale nuo ${start} iki ${finish}
 imtinai yra:${numberSequence}.`
console.log(numberLine)

let numberSequence2 = ''

for (let i = start; i < finish; i++) {
    numberSequence2 += i + ', ';
}
numberSequence2 += finish;

const numberLine2 = `Skaiciai intervale nuo ${start} 
iki ${finish} imtinai yra: ${numberSequence2}.`

console.log(numberLine2)

console.clear()

function arTestiCikla(index) {
    if (index <= 10) {
        return true
    } else {
        return false
    }
}


for (let i = 0; arTestiCikla(i); i += 3) {
    console.log(i)
}

console.clear()

const word = 'zodeliukas';

// Raide: z;
// Raide: o;
// Raide: d;
// Raide: i;
// Raide: s;

console.log(`Raide: ${word[0]}`)
console.log(`Raide: ${word[1]}`)
console.log(`Raide: ${word[2]}`)
console.log(`Raide: ${word[3]}`)
console.log(`Raide: ${word[4]}`)

for (let i = 0; i < word.length; i++) {
    console.log(i, `Raide: ${word[i]}`)
}

console.clear();

const marks = [10, 2, 8, 4, 6];

const totalSum = 0;
const count = marks.length

for (let i = 0 ; i < count; i++) {
    console.log(i, marks[i])
}