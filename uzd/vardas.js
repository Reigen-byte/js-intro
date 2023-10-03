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