/*
IF - palyginimo sakinys, salyga

Palyginimo operatoriai:
- visi >, <, ==, ===,>, <, ==, !=, !==
- naudotini >, <, ==, >, <, ==,
- nenaudotini ==, !=

Loginiai operatoriai

- &&, ||, !

Kodo sablonai
- if () {}
- if () {} else {}
- if () {} else if () {}
- if () {} ... else if () {} ...else {}
*/

console.clear();

if ( 4 > 2 ) {
    console.log('4 yra daugiau uz 2')
}

if ( 5 < 0 ) {
    console.log('5 yra maziau uz 0')
}

if (true) {
    console.log(true);
}

if (false) {
    console.log(false);
}

const a = 7
const b = 5

if ( a > b ) {
    console.log('A yra daugiau uz B');
} else {
    console.log('A nera daugiau uz B');
}

const day = 32

//  1, 2, 3, 4, 5, 6, 7
//  8, 9, 10, 11, 12, 13, 14
//  15, 16, 17, 18, 19, 20, 21
//  22, 23, 24, 25, 26, 27, 28

if (day % 7 == 1) {
    console.log('Pirmadienis');
} else if (day % 7  == 2) {
    console.log('Antradienis');
} else if (day % 7  == 3) {
    console.log('Treciadienis');
} else if (day % 7  == 4) {
    console.log('Ketvirtadienis');
} else if (day % 7  == 5) {
    console.log('Penktadienis');
} else if (day % 7  == 6) {
    console.log('Sestadienis');
} else if (day % 7  == 0) {
    console.log('Sekmadienis');
} else {
    console.log('Tokia diena neegzistuoja')
}

console.clear();

// Kodo nestinimas

const diena = 7;

if ( diena === 1 ) {
    console.log('Pirmadienis');
} else {
    if( diena === 2) {
        console.log('Antradienis')
    } else {
        if ( diena === 3) {
            console.log('Treciadienis');
        } else {
            if ( diena === 4) {
                console.log('Ketvirtadienis');
            } else {
                if ( diena === 5) {
                    console.log('Penktadienis');
                } else {
                    if ( diena === 6 ) {
                        console.log('Sestadienis');
                    } else {
                        if ( diena === 7 ) {
                            console.log('Sekmadienis');
                        }
                    }
                }
            }
        }
    }
}


/*
Gali buti:
- diena/naktis
- lyja/nelyja
- silta/salta
*/

const parosMetas = 'naktis';
const arLyja = false;
const temp = 19;
const kadaSilta = 20;
const arAsSuStriuke = true;

if (parosMetas === 'diena' && arLyja && temp >= kadaSilta) {
    console.log('Einam sokti lietuje,😏')
} else if (parosMetas === 'diena' && arLyja && temp < kadaSilta) {
    console.log('Saltas lietus... niekur neisiu sokti... 💧')
} else if (parosMetas === 'diena' && !arLyja && temp >= kadaSilta) {
    console.log('Eiline diena rojuje ✌');
} else if (parosMetas === 'diena' && !arLyja && temp < kadaSilta) {
    console.log('Eiline diena rojuje.. nors ir nelabai silta...✌');
} else if (parosMetas === 'naktis' && arLyja && temp >= kadaSilta) {
    console.log('Sedim namie, bet gal ir galima butu iseiti 👀');
} else if (parosMetas === 'naktis' && arLyja && temp < kadaSilta) {
    console.log('Sedim namie!!! 👀')
} else if (parosMetas === 'naktis' && !arLyja && temp >= kadaSilta) {
    console.log('Galim eiti paziureti zvaigzdiu ⭐')
} else if (parosMetas === 'naktis' && !arLyja && temp < kadaSilta) {
    console.log('Gal eisiu miegoti ⭐')
}

if (parosMetas === 'diena') {
    if (arLyja) {
        if (temp >= kadaSilta) {
            console.log('Einam sokti lietuje 😏')
        } else {
            console.log ('Saltas lietus... niekur neisiu sokti... 💧')
        }
    } else {
        if (temp >= kadaSilta){
            console.log('Eiline diena rojuje ✌')
        } else {
            console.log ('Eiline diena rojuje.. nors ir nelabai silta...✌')
        }
    }
} else {
    if (arLyja) {
        if (temp >= kadaSilta) {
            console.log('Sedim namie, bet gal ir galima butu iseiti 👀')
        }else {
            console.log ('Sedim namie!!! 👀')
        }
    } else {
        if (temp >= kadaSilta) {
            console.log('Galim eiti paziureti zvaigzdiu ⭐')
        } else {
            console.log ('Gal eisiu miegoti ⭐')
        }
    }
}
// console.clear()

const g = 7
const h = 5

if ( g !== h ) {
    console.log('Ne lygu');
} else {
    console.log('lygu');
}

if ( 7 == '7') {
    console.log('aaaaaa');
} else {
    console.log('bbbbb');
}

const w = 'a';
const e = 'A';

if (w > e) {
    console.log('Daugiau')
} else {
    console.log('Maziau');
}
// !true - ne true
// !false - ne false
if (true) {
    console.log('gg');
} else {
    console.log('fail');
}

console.clear ()

const number = -12
const even = number % 2

if (number > 0) {
   if (even === 0) {
    console.log(`${number} yra teigiamas ir lyginis skaicius`);
   } else {
    console.log (`${number} yra teigiamas ir nelyginis skaicius`)
   }
} else {
    if (even === 0) {
        console.log(`${number} yra neigiamas ir lyginis skaicius`);
       } else {
        console.log (`${number} yra neigiamas ir nelyginis skaicius`);
       }
}