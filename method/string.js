console.clear();

console.log('labas'.length);
console.log('     '.length);
console.log('\n\'\\'.length);

console.log('labas'[0],'labas'.at(0));
console.log('labas'[1],'labas'.at(1));
console.log('labas'[2],'labas'.at(2));
console.log('labas'[3],'labas'.at(3));
console.log('labas'[4],'labas'.at(4));
console.log('labas'[5],'labas'.at(5));
console.log('labas'[-0],'labas'.at(-0));
console.log('labas'[-1],'labas'.at(-1));
console.log('labas'[-2],'labas'.at(-2));
console.log('labas'[-3],'labas'.at(-3));
console.log('labas'[-4],'labas'.at(-4));
console.log('labas'[-5],'labas'.at(-5));

const hi = 'labas'
console.log(hi.at(-2), hi[hi.length - 2])

console.clear();

console.log('a'.charCodeAt(0))
console.log('b'.charCodeAt(0))
console.log('labas'.charCodeAt(0))
console.log('labas'.charCodeAt(1))
console.log('labas'.charCodeAt(2))
console.log('labas'.charCodeAt(3))
console.log('labas'.charCodeAt(4))


console.clear()

const abc = ['a', 'b', 'c', 'd', 'e', 'f']

const start = 'Abecele ';

let a1 = ''
a1 += start
a1 += abc[0];
a1 += abc[1];
a1 += abc[2];
a1 += abc[3];
a1 += abc[4];
a1 += abc[5];

console.log(a1)

let a2 = start + abc[0] + abc[1] + abc[2] + abc[3] + abc[4] + abc[5]

console.log(a2)

let a3 = start

for (let i = 0; i < abc.length; i++) {
    a3 += abc[i]
}

console.log(a3)


const a4 = start.concat(...abc)


console.clear()

console.log('Labas Rytas'.includes('a'))
console.log('Labas Rytas'.includes('A'))
console.log('Labas Rytas'.includes(' '))
console.log('Labas Rytas'.includes('ab'))
console.log('Labas Rytas'.includes('as'))
console.log('Labas Rytas'.includes('rytas'))
console.log('Labas Rytas'.includes('Labas'))

console.log('Labas Rytas'.indexOf('a'))
console.log('Labas Rytas'.indexOf('A'))
console.log('Labas Rytas'.indexOf(' '))
console.log('Labas Rytas'.indexOf('ab'))
console.log('Labas Rytas'.indexOf('as'))
console.log('Labas Rytas'.indexOf('rytas'))
console.log('Labas Rytas'.indexOf('Labas'))

console.clear()

console.log('a'.repeat(6))
console.log('a'.repeat(8))
console.log('labas '.repeat(8))
console.log(' '.repeat(8))

const r1 = 'labas'
const r2 = r1.replace('a', 'x')

console.log(r2)

const r3 = 'Labas Rytas'
const r4 = r3.replace('Rytas', 'Vakaras')

console.log(r3, r4)

const r5 = r3.replace('xxx', 'yyy')

console.log(r5)

const r6 = 'Labas'
const r7 = r6.replaceAll('a', '_')
console.log(r7)

console.clear();

const kopustas = 'kopustas'
console.log(kopustas.slice())
console.log(kopustas.slice(0))
console.log(kopustas.slice(0, 0))
console.log(kopustas.slice(0, 1))
console.log(kopustas.slice(0, 2))
console.log(kopustas.slice(0, 3))
console.log(kopustas.slice(1, 3))
console.log(kopustas.slice(2, 3))
console.log(kopustas.slice(-3))
console.log(kopustas.slice(-4))
console.log(kopustas.slice(-4, -2))

console.clear();

const pvz = 'Labas rytas suraitytas vistos koja parasytas'
console.log(pvz.split('x'));
console.log(pvz.split('a'));
console.log(pvz.split(' '));

const pvz2 = 'vasara'
const pvz2PoSplit = pvz2.split('a')
console.log(pvz2PoSplit);

console.log('sasasasas'.split('a'));
console.log('sasasasas'.split('s'));

console.log(''.split('x'));
console.log('x'.split('x'));
console.log('asd'.split('asd'));
console.log(''.split(''));
console.log('labas'.split(''));

console.clear();

console.log('Labas'.startsWith('x'));
console.log('Labas'.startsWith('l'));
console.log('Labas'.startsWith('L'));
console.log('Labas'.startsWith('La'));
console.log('Labas'.startsWith('Lab'));
console.log('Labas'.startsWith('Labs'));
console.log('Labas'.startsWith('Labas'));
console.log(''.startsWith(''));

console.log('---------------------------------');

console.log('Vasara'.endsWith('x'));
console.log('Vasara'.endsWith('a'));
console.log('Vasara'.endsWith('ar'));
console.log('Vasara'.endsWith('ra'));
console.log('Vasara'.endsWith('ara'));
console.log('Vasara'.endsWith('sara'));
console.log('Vasara'.endsWith('Vsara'));
console.log('Vasara'.endsWith('Vasara'));
console.log(''.endsWith(''));

console.clear();

const pasaka = 'Ryto pasaka: apie Jonuka ir Gretute.';
const pasakaUppercase = pasaka.toUpperCase();
const pasakaLowercase = pasaka.toLowerCase();

console.log(pasaka);
console.log(pasakaUppercase);
console.log(pasakaLowercase);

console.clear();

const tarpai = '     labas     ';
const beTarpu = tarpai.trim();
console.log(`"${tarpai}"`)
console.log(`"${beTarpu}"`)

const tarpai2 = '     labas     rytas     '
console.log(`"${tarpai2}"`)
console.log(`"${tarpai2.trim()}"`)

console.clear();

