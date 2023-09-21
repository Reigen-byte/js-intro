/*
Logine reiksme

Galimos reiksmes: true = 1 ; false = 0 

Operacijos: 
-&&  (and)
-|| (or)
*/

console.clear()

const arPilnametis = true;
const arLyja = false;

const isSunnyday = true;

console.log(arPilnametis)
console.log(arLyja);
console.log(isSunnyday, arPilnametis, arLyja)

const count = false + false +  true + true + true + false + false
console.log(count)

const a = true && true
console.log(a)
const b = true || true
console.log(b)
const c = true || false
console.log(c)
const d = true && false
console.log(d)
const e = true && (false);
console.log(e)