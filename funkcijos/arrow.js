console.clear()

const n1 = 7
const n2 = 5

// function declaration
function suma(a, b) {
    return a + b
}

console.log(`${n1} + ${n2} = ${suma(n1, n2)}`)

// kintamajam priskirti anonimine funkcija
const skirtumas = function (a, b) {
    return a - b
}

console.log(`${n1} - ${n2} = ${skirtumas(n1, n2)}`)

// arrow function (rodykline funkcija)
const sandauga = (a, b) => {
    return a * b
}

console.log(`${n1} * ${n2} = ${sandauga(n1, n2)}`)

// arrow function (rodykline funkcija)
// jeigu logikos bloke yra tik 1 procedura (statement)
// tai galime nerasyti: {return}
const dalmuo = (a, b) =>  a / b

console.log(`${n1} / ${n2} = ${dalmuo(n1, n2)}`)

// arrow function
// jeigu parametru bloke yra tik 1 parametras, tai galima nerasyti : ()
const kvadratu = a => a ** 2;

console.log(`${n1} ** 2 = ${kvadratu(n1)}`)
console.log(`${n2} ** 2 = ${kvadratu(n2)}`)

// funkcija gauna zodi ir grazina tik pirma raide

const pirmaRaide = (word) => word[0]
console.log(pirmaRaide('Abrakadabra'))
console.log(pirmaRaide(5))
console.log(pirmaRaide(''))

function firstLetter (str) {
    if (typeof str !== 'string') {
        return 'Error: first param has to be a string type'
    }
    if (str.length === 0) {
        return 'Error: first param has to be non-epmty string'
    }
    return str[0]
}


    const firstLetter5 = str => typeof str !== 'string' 
        ? 'Error: first param has to be a string type'
        : str.length === 0
            ? 'Error: first param has to be non-epmty string'
            : str[0]


console.log(firstLetter5('Labas'))

function firstLetter6 (str) {
    if (typeof str !== 'string') {
        return 'Error: first param has to be a string type'
    }
    if (str.length === 0) {
        return 'Error: first param has to be non-epmty string'
    }
    return str[0]
}

console.log(firstLetter6('Labas'))
