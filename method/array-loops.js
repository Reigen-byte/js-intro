console.clear();

const marks = [10, 2, 8 ,4, 6];
// const marks = [20, 4, 16, 8, 12]

const doubleMarksFor = []

for (let i = 0; i<marks.length; i++) {
    const mark = marks[i];
    const doubleMark = mark *2;
    doubleMarksFor.push(doubleMark);
}

console.log(doubleMarksFor);

const doubleMarksForOf = [];

for (const mark of marks) {
    doubleMarksForOf.push(mark * 2)
}

console.log(doubleMarksForOf);

function doubleOrNothing(number) {
    return number * 2;
}

const doubleMarkMap = marks.map(doubleOrNothing);

console.log('MAP:', doubleMarkMap);


const doubleOrNothing2 = n =>  n * 2;

const doubleMarkMap2 = marks.map(doubleOrNothing2);

console.log('MAP2:', doubleMarkMap2);


const doubleMarkMap3 = marks.map(n =>  n * 2);

console.log('MAP3:', doubleMarkMap3);

console.clear();

const badMarks = [100, 11, 10, 2, -6, -14, 8, 4, 0, NaN, 3.14, Math.PI, 'Blogas pazymys'];

function arSkaicius(number) {
    if(typeof number === 'string') {
        return false;
    }
    if (number <= 0) {
        return false
    }

    if (number > 10) {
        return false
    }

    if (isNaN(number)) {
        return false
    }

    if (number %1 !== 0) {
        return false
    }
    return true
}

const goodMarksOnly = badMarks.filter(arSkaicius)

console.log(goodMarksOnly);


const goodMarksOnly2 = badMarks
    .filter(n => typeof n === 'number')
    .filter(n => isFinite(n))
    .filter(n => n > 0)
    .filter(n => n < 11)
    .filter(n => Number.isInteger(n));

console.log(goodMarksOnly2);


const goodMarksOnly3 = badMarks
    .filter(n => typeof n === 'number' && isFinite(n) && n > 0 && n < 11 && Number.isInteger(n))

console.log(goodMarksOnly3);

console.clear();

const stringList = ['a', 'A', 'b', 'B', 'ab', 'AB', 'labas', 'rytas']; 
console.log(stringList);

stringList.sort();
console.log(stringList)

const numberList = [10, 2, 8, 4, 6];
console.log(numberList)

numberList.sort();
console.log(numberList);

numberList.sort((a, b) => a - b);
console.log(numberList);

numberList.sort((a, b) => b - a);
console.log(numberList);
// ########################################################################################
console.clear();

const family = [
    { name: 'Maryte', age: 88},
    { name: 'Jonas', age: 99 },
    { name: 'Ona', age: 66 },
    { name: 'Petras', age: 77 },
];
console.log(family);
// Ona, Petras, Maryte, Jonas.

family.sort(((a, b) => a.age - b.age));
console.log(family);

const names = []
for (const user of family) {
    names.push(user.name);
}

console.log(names)

const familyString = names.join(', ') + '.'
console.log(familyString);

const namesMap = family.map(user => user.name)
const familyString2 = names.join(', ') + '.'
console.log(familyString2);

const fancyFamily = family
    .sort(((a, b) => a.age - b.age))
    .map(user => user.name)
    .join(', ') + '.';

console.clear();

const pazymiai = [10, 2, 8, 4, 6];
console.log(pazymiai);

let pazymiuSuma = 0
for (const pazymys of pazymiai) {
    pazymiuSuma += pazymys;
}

const vidurkis = pazymiuSuma / pazymiai.length;
console.log('Vidurkis:', vidurkis);

function redFunc(total, number) {
    return total + number
}

const redSuma = pazymiai.reduce(redFunc)
console.log(redSuma);

const redSuma2 = pazymiai.reduce((t, n) => t + n);
console.log(redSuma2);

const redSuma3 = pazymiai.reduce((t, n) => t + n, 0);
console.log(redSuma3);

const red1 = [1, 2, 3, 4, ].reduce((t, n) => t + n);
// 1+2+3+4
console.log('+', red1);
const red2 = [1, 2, 3, 4, ].reduce((t, n) => t + n, 0);
// 0+1+2+3+4
console.log('+', red2);
const red3 = [1, 2, 3, 4, ].reduce((t, n) => t - n);
// 1-2-3-4
console.log('-', red3);
const red4 = [1, 2, 3, 4, ].reduce((t, n) => t - n, 0);
// 0-1-2-3-4
console.log('-', red4);
const red5 = [1, 2, 3, 4, ].reduce((t, n) => t * n);
// 1*2*3*4
console.log('*', red5);
const red6 = [1, 2, 3, 4, ].reduce((t, n) => t * n, 0);
// 0*1*2*3*4
console.log('*', red6);
const red7 = [1, 2, 3, 4, ].reduce((t, n) => t / n);
// 1/2/3/4
console.log('/', red7);
const red8 = [1, 2, 3, 4, ].reduce((t, n) => t / n, 0);
// 0/1/2/3/4
console.log('/', red8);

console.clear();

const students = [
    { name: 'Maryte', marks: [88, 'asd', 10, 2],},
    { name: 'Jonas', marks: [99, true], },
    { name: 'Ona', marks: [66, [], Infinity, 7, 7, 7, 7, 7, 7], },
    { name: 'Petras', marks: [77, null, undefined, {}, 2, 4, 8, 6, 10], },
]

/*
Vardenis4: 2;
Vardenis1: 3;
Vardenis2: 5;
Vardenis3: 9;
*/

const teacher = students
    .map(student => (
        {
            ...student,
            marks: student.marks
                .filter(n => Number.isInteger(n) && n > 0 && n < 11)
        }
    ))
    .map(student => (
        {
            ...student,
            average: student.marks.reduce((t, n) => t + n, 0) / student.marks.length || -1,
        }
    ))
    .sort((s1, s2) => s1.average - s2.average)
    .map(student => `${student.name}: ${student.average === -1 ? 'Neturi pazymiu' : student.average};`)
    .join('\n');
console.log(teacher);