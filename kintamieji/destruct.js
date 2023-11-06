console.clear();

const marks = [10, 2, 8, 4, 6];
const mark1 = marks[0];
const mark2 = marks[1];
const mark3 = marks[2];
const otherMarks = [
    marks[3],
    marks[4],
];

console.log(mark1, mark2, mark3, otherMarks);

const [m1, m2, m3, ...otherMs] = marks;

console.log(m1, m2, m3, otherMs);

const user = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
    children: [
        {
            name: 'Maryte',
            age: 88,
        },
        {
            name: 'Petras',
            age: 77,
        }
    ]
};

// const name = user.name;
// const age = user.age;
// const isMarried = user.isMarried;

// console.log(name, age, isMarried);

const {age, isMarried, name, children} = user;

console.log(age, isMarried, name);
console.log(children);

const zip = 13245;
const street = 'Gedemino g.';
const houseNr = 7;

const adress = { zip, street, houseNr }

console.log(adress)