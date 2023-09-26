/*
OBJECT - objektas
*/

console.clear()

// vartotojas; vardas, amzius, ar vedes

// const jonasName = Jonas;
// const jonasAge = 99;
// const jonasIsMarried = true;

// const maryteName = Maryte;
// const maryteAge = 88;
// const maryteIsMarried = false;

// const jonasData = ['Jonas', 99, true];
// const maryteData = ['Maryte', 88, false]

// key: value

const jonas = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};

console.log(jonas)
console.log(jonas['name'], jonas.name)
console.log(jonas['age'], jonas.age)
console.log(jonas['isMarried'], jonas.isMarried)

jonas.age++
console.log(jonas);

jonas.isMarried = false
console.log(jonas);

jonas.name = 'John';
console.log(jonas);

const arr = [1, 2, 3, 4];
console.log(arr);

arr[0] = 111;
console.log(arr);

console.clear();

const a = 1;
const b = a;

console.log('a=', a, 'b=', b)

const c = [1, 2]
const d = c
console.log('c=', c, 'd', d)

c[0] = 111
console.log('c=', c, 'd', d)

c[1] = 222
console.log('c=', c, 'd', d)

d[0] = 333
console.log('c=', c, 'd', d)

d[1] = 444
console.log('c=', c, 'd', d)

const e = {
    name: 'Edgaras',
    age: 99
}

const f = e

console.log(e, f);