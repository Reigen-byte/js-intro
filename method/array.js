// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

console.clear();

console.log([10, 2, 8, 4, 6]);
console.log([10, 2, 8, 4, 6].length);
console.log([10, 2, 8, 4, 6][0]);
console.log([10, 2, 8, 4, 6][1]);
console.log([10, 2, 8, 4, 6][2]);
console.log([10, 2, 8, 4, 6][888888]);

console.log([10, 2, 8, 4, 6].at(0));
console.log([10, 2, 8, 4, 6].at(1));
console.log([10, 2, 8, 4, 6].at(-1));
console.log([10, 2, 8, 4, 6].at(-2));

const a1 = [1, 2]
const a2 = [3, 4]
const a3 = [5, 6]
const a4 = [7, 8]
const a5 = a1.concat(a2)
const a6 = a1.concat(a2, a3, a4)
console.log(a5);
console.log(a6);

const a1111 = a1.concat(a1, a1, a1)
console.log(a1111);

console.clear();

const marks = [10, 2, 8, 4, 6]
console.log(marks.includes(10))
console.log(marks.includes(7))

const students = ['Jonas', 'Maryte', 'Ona', 'Petras']
console.log(students.includes('maryte'))
console.log(students.includes('Maryte'))

console.log(marks.indexOf(10))
console.log(marks.indexOf(4))
console.log(marks.indexOf(5))
console.log(marks.indexOf(8))
console.log(marks.indexOf(-6))
console.log(marks.indexOf(2))

console.log(students.indexOf('maryte'))
console.log(students.indexOf('Maryte'))


console.clear();

console.log(typeof 5);
console.log(typeof 'string');
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);

console.log(Array.isArray(5));
console.log(Array.isArray('string'));
console.log(Array.isArray(true));
console.log(Array.isArray(undefined));
console.log(Array.isArray(null));
console.log(Array.isArray({}));

console.log(Array.isArray([]));
console.log(Array.isArray([1, 2, 3, 4, 5]));
console.log(Array.isArray(['string', 'string2', 'string3']));
console.log(Array.isArray([1, 2, 'string', 4, 5]));

const abc = ['a', 'b', 'c', 'd', 'e', 'f']
const abcJoin = abc.join()
const abcJoin2 = abc.join('-')
const abcJoin3 = abc.join(', ')
const abcJoinHip = abc.join(' -==- ')
console.log(abcJoin, typeof abcJoin);
console.log(abcJoin2);
console.log(abcJoin3);
console.log(abcJoinHip);