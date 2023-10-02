console.clear()

console.log(7)

console.log(isFinite(5));
console.log(isFinite(3.14));
console.log(isFinite(-5));
console.log(isFinite(-3.14));
console.log(isFinite(0));
console.log(isFinite(99999999999999999999999999999999));

console.log(isFinite(NaN));
console.log(isFinite(Infinity));
console.log(isFinite(-Infinity));

const a = undefined;
if(isFinite(a)) {
    console.log('Taip')
}else {
    console.log('Ne');
}

console.clear()

console.log(Number.isFinite(5));
console.log(isFinite(5));
console.log(Number.isInteger(5));
console.log(Number.isInteger(3.14));
console.log(Number.isInteger(-5));
console.log(Number.isInteger(-3.14));
console.log(Number.isInteger(0));
console.log(Number.isInteger(999999999999999999999999999));
console.log(Number.isInteger(NaN));
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger(-Infinity));

console.clear();

const b = 7.5;

if (isFinite(b)) {
    if (Number.isInteger(b)) {
        console.log('Sveikasis skaicius')
    }else {
        console.log ('Desimtainis skaicius')
    }
} else {
    console.log('Ne normalus skaicius: NaN arba Infinity');
}

console.clear()

console.log(parseInt(false))
console.log(parseInt([]))
console.log(parseInt(''))
console.log(parseInt('asd'))
console.log(parseInt('sesi'))
console.log(parseInt('penki'))
console.log(parseInt('asd123'))
console.log(parseInt('123asd'))
console.log(parseInt('123asd456'))
console.log(parseInt('123.456'))
console.log(parseInt('Infinity'))

console.log('----------------------');
console.log(parseFloat(''));
console.log(parseFloat('789'));
console.log(parseFloat('789.101'));
console.log(parseFloat('-789'));
console.log(parseFloat('-789.101'));
console.log(parseFloat('Infinity'))
console.log(parseFloat('-789.101asd'));
console.log(parseFloat('asd-789.101asd'));

console.clear();

console.log(isNaN(5))
console.log(isNaN(-5))
console.log(isNaN(Infinity))
console.log(isNaN(NaN))

console.clear();

const kaina = 3.14
console.log(kaina, '3.14')
console.log(kaina, '3.14', kaina.toFixed())
console.log(kaina, '3.14', kaina.toFixed(1))
console.log(kaina, '3.14', kaina.toFixed(2))
console.log(kaina, '3.14', kaina.toFixed(3))
console.log(kaina, '3.14', kaina.toFixed(4))
console.log(kaina, '3.14', kaina.toFixed(5))

const keistasSkaicius = 0.1 + 0.2;
console.log(keistasSkaicius.toFixed(6));

const keistasSkaicius2 = keistasSkaicius.toFixed(6)
console.log(keistasSkaicius2);

const keistasSkaicius3 = parseInt(keistasSkaicius2)
console.log(keistasSkaicius3);

const keistasSkaicius4 = parseFloat(keistasSkaicius2)
console.log(keistasSkaicius4);

const keistasSkaicius5 = +'1.23'
console.log(keistasSkaicius5);

const keistasSkaicius6 = +keistasSkaicius2
console.log(keistasSkaicius6);

const c = 6.999999999999;
console.log(c)
console.log(c.toFixed(5))

const d = 5.6789;
console.log(d.toFixed(6));
console.log(d.toFixed(5));
console.log(d.toFixed(4));
console.log(d.toFixed(3));


const e = 5.6784;
console.log(e.toFixed(6));
console.log(e.toFixed(5));
console.log(e.toFixed(4));
console.log(e.toFixed(3));