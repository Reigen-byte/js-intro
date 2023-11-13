console.clear();

const tekstas1 = 'vasara'
const tekstas2 = 'pavasaris'
const tekstas3 = 'labas rytas'
const tekstas4 = 'pipiriukai'

// function countRepeating(str) {
// 	for(let i=97 ;i<=122 ;i++) {
//  		let ch=String.fromCharCode(i);
// 		let count=0;
// 		for(let j=0;j<str.length;j++) {
// 			if(str[j]===ch) {
// 				count++;
// 			}
// 		}
// 		if(count>0) {
// 			console.log(`${ch} occurs ${count} times.`);
// 		}
//   	}
// }

// console.log(countRepeating(tekstas1))
// console.log(countRepeating(tekstas2))
// console.log(countRepeating(tekstas3))
// console.log(countRepeating(tekstas4))

const abc = {};

for (const letter of tekstas3) {
    if (abc[letter]) {
        abc[letter] += 1;
    } else {
        abc[letter] = 1;
    }
}

let maxLetter = '';
let maxCount = 0;

for (const letter in abc) {
    if (abc[letter] > maxCount) {
        maxLetter = letter;
        maxCount = abc[letter];
    }
}

console.log('>>>', maxLetter, maxCount);