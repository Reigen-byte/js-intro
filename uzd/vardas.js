console.clear();

/*
Duodamas vardas ... arba bent tai jau galvojama
Ka daryti?
- Reikia nustatyti ar dave varda ar ne?
*/

// Jonas = true
// Maryte = true
//  12485 = false
// labas = false
// Labas = true
// Azuolas = true
// Egle = true

function looksLikeName(text) {
    if (text[0] !== text[0].toUpperCase()){
        return false
    }const likusiosRaides = text.slice(1);
    if (likusiosRaides !== likusiosRaides.toLowerCase()){
        return false
    }const neleistiniSimboliai = '0123456789_=+!"£$%^&*()/*';
    for ( i = 0; i< neleistiniSimboliai.length; i++ ) {
        const simbolis = neleistiniSimboliai[i]
        if(text.includes(simbolis)) {
            return `Klaida: ${simbolis} nera leistinas simbolis`;
        }
    }
}

console.log(looksLikeName('Jonas'), true);
console.log(looksLikeName('Maryte'), true)
console.log(looksLikeName('false'), false)
console.log(looksLikeName('!bile'), true)
console.log(looksLikeName('AzUOlas'), true)
console.log(looksLikeName('AzUOlas'), true)
console.log(looksLikeName('4zUO1as'), true)

console.clear();

function isName(name) {
   if (typeof name !== 'string') {
    return 'Klaida: Netinkamas duomens tipas: privalo buti "string".'
   } 
   const nameMinLength = 2
   if (name.length < nameMinLength) {
    return `Klaida: Per trumpas vardas, minimaliai ${nameMinLength} simboliai.`
   }
    const nameMaxLength = 20
   if (name.length > nameMaxLength ) {
    return `Klaida: Per ilgas vardas, maksimaliai ${nameMaxLength} simboliu.`
   }
   if (name[0].toUpperCase() !== name[0]) {
    return 'Klaida: Pirmoji raide ne didzioji.'
   }
   const likusiosRaides = name.slice(1)
   if (likusiosRaides.toLowerCase() !== likusiosRaides) {
    return 'Klaida: likusios (apart pirmos) raides turi buti mazos.'
   }
   const abc = 'qwertyuiopasdfghjklzxcvbnm';
   const nameLowerCase = name.toLowerCase();
   for (let i=0; i < name.length; i++) {
    const raide = nameLowerCase[i]
    if (abc.includes(raide)) {
        
    } else {
        return `Neleistinas simbolis varde ${raide}`
    }
    
   }
    return 'Ok'
}

console.log(isName());
console.log(isName(undefined));
console.log(isName(null));
console.log(isName(13));
console.log(isName(true));
console.log(isName(false));
console.log(isName(NaN));
console.log(isName(Infinity));
console.log(isName([]));
console.log(isName({}));
console.log(isName(isName));

console.log(isName(''));
console.log(isName('L'));
console.log(isName('asiisiasasiitkjdffgfgcvyasduhhy'));
console.log(isName('maryte'));
console.log(isName('ona'));
console.log(isName('petras'));
console.log(isName('MarYte'));
console.log(isName('OnA'));
console.log(isName('PEtras'));
console.log(isName('Mar4te'));
console.log(isName('On4'));
console.log(isName('P3tras'));
console.log(isName('J nas'));

console.log(isName('Li'));
console.log(isName('Jonas'));
console.log(isName('9onas'));
console.log(isName('5555555555555555555555555555'));
