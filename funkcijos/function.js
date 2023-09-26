/*
FUNKCIJOS

perpanaudojamas logikos blokas
*/

console.clear();

function tuscia () {
    // tuscias logikos blokas
};

const a = tuscia();
console.log(a);

const b = tuscia();
console.log(b);

function tuscia2 () {
    return undefined;
}

function tuscia3 () {
    return;
}

console.log(tuscia());
console.log(tuscia2());
console.log(tuscia3());


function duokPenkis () {
    // graziname penkis
    return 5;
}

console.log(duokPenkis());

function arVedes () {
    return true;
}

console.log(arVedes());

function labasRytas() {
    return 'Labas rytas, Lietuva!';
}

console.log(labasRytas())

const username1 = 'Jonas'
const userage1 = 99
const user1Jubiliejai = (userage1 - userage1 % 10) / 10

// Jonas turejo 9 jubilieju/-s!

const user1Str = `${username1} turejo ${user1Jubiliejai} jubilieju/-s`;

console.log(user1Str);

const username2 = 'Maryte'
const userage2 = 88
const user2Jubiliejai = (userage2 - userage2 % 10) / 10

// Maryte turejo 8 jubilieju/-s!

const user2Str = `${username2} turejo ${user2Jubiliejai} jubilieju/-s`;

console.log(user2Str);

const username3 = 'Petras'
const userage3 = 55
const user3Jubiliejai = (userage3 - userage3 % 10) / 10

// Petras turejo 5 jubilieju/-s!

const user3Str = `${username3} turejo ${user3Jubiliejai} jubilieju/-s`;

console.log(user3Str);

const username4 = 'Ona'
const userage4 = 44
const user4Jubiliejai = (userage4 - userage4 % 10) / 10

// Ona turejo 4 jubilieju/-s!

const user4Str = `${username4} turejo ${user4Jubiliejai} jubilieju/-s`;

console.log(user4Str);

console.clear()

    function jubiliejai(username, age) {
    
        const count = (age - age % 10) / 10
        return `${username} turejo ${count} jubilieju/-s`;
    }

console.log(jubiliejai('Jonas', 99));
console.log(jubiliejai('Maryte', 88));
console.log(jubiliejai('Petras', 55));
console.log(jubiliejai('Ona', 44));

console.clear();

function studentAverage(name, marks) {
    let totalSum = 0
    let index = 0
        totalSum += marks[index++]
        totalSum += marks[index++]
        totalSum += marks[index++]
        totalSum += marks[index++]
        totalSum += marks[index++]
    const average = totalSum / marks. length
    return `${name}: pazymiu vidurkis yra ${average}.`;
}
console.log(studentAverage(`Jonas`, [10, 2, 8, 4, 6]))
console.log(studentAverage(`Maryte`,[10, 9, 8, 7, 6]))
console.log(studentAverage(`Petras`,[5, 6, 7, 8, 9]))
console.log(studentAverage(`Ona`, [9, 9, 9, 9, 9]))