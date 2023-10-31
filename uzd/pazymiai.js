console.clear();

const marks0 = [10, 2, 8, 4, 6, ]
const marks1 = [10, 2, 8, 4, 6, 'a']
const marks2 = []
const marks3 = [10, 2, 3.14, 8, 4, 0, 80, 6, ]

function marksAverage(marksList) {
    let totalSum = 0
    let count = 0
     for ( i = 0 ; i < marksList.length ; i++ ) {
         if (typeof marksList[i] === 'number') {
            totalSum += marksList[i];
            count++;
         }
         if (marksList[i] > 10) {
            continue
         }
     }
     const average = totalSum / count

     return count ? average : 'Neiskaityta'
    }


console.log(marksAverage(marks0));
console.log(marksAverage(marks1));
console.log(marksAverage(marks2));
console.log(marksAverage(marks3));






// let totalSum = 0
// let count = 0

// for ( i = 0 ; i < marks0.length ; i++ ) {
//     if (typeof marks0[i] === 'number') {
//         totalSum += marks0[i];
//         count++;
//     }
// }
// totalSum += marks[0]
// totalSum += marks[1]
// totalSum += marks[2]
// totalSum += marks[3]
// totalSum += marks[4]

// const average = totalSum / count
// console.log(average)