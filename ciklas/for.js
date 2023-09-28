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

const start = 1;
const finish = 15;
let numberSequence = '';

for (let i = start ; i <= finish; i++) {
    numberSequence += ' ' + i;
}
const numberLine = `Skaiciai intervale nuo ${start} iki ${finish}
 imtinai yra:${numberSequence}.`
console.log(numberLine)