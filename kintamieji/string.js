/*
STRING

Teksto ilgis = kintamasis.length

*/

//  Iniciavimas kabutemis "" , '' , ``;
console.clear();

const txt = "tekstas";
console.log(txt);

const txt2 = 'tekstas 2';
console.log(txt2);

// Vienguba kabute (')

const kabute1 = "Vieguba kabute(')" ;
console.log(kabute1);

// Dviguba kabute

const kabute2 = 'Dviguba kabute(")' ;
console.log(kabute2);

// Vienguba (') ir Dviguba ("") kabutes

const kabute12 = "Vienguba (') ir dviguba (\") kabutes";
console.log(kabute12);

const kabute21 = 'Vienguba (\') ir dviguba (") kabutes';
console.log(kabute21);

const kabute3 = "Vienguba (\') ir dviguba (\") kabutes";
console.log(kabute3);

const back = "\\\\";
console.log(back);

//  \n - New Line
//  \r - Return

const formatuotasTekstas = "Labas \n\rrytas, \n\rLietuva!";
console.log(formatuotasTekstas);

/*
Labas rytas, Lietuva!
*/


const lrl = "Labas \n\r\
rytas,\n\r\
Lietuva!";
console.log(lrl);

const backtick = `labas 
rytas 
Lietuva`;
console.log(backtick);

console.clear();

const vardas = 'Chuck';
console.log(vardas, vardas.length);
console.log(vardas, vardas.length);

const pavarde = 'Norris'

const pilnasvardas = 'Chuck Norris'
console.log(pilnasvardas, pilnasvardas.length)

const fullname = vardas + ' ' + pavarde
console.log(fullname)

// Labas rytas, Lietuva!
const labas = 'Labas';
const parosmetas = 'vakaras,';
const lietuva = 'Lietuva!';

const lrl2 = labas + ' ' + parosmetas + lietuva;
console.log(lrl2)

const lrl3 = `${labas} ${parosmetas} ${lietuva}`;
console.log(lrl3)
console.clear()

const n1 = 5 + 7;
console.log(n1);

const n2 = '5' + 7;
console.log(n2);

const n3 = 5 + '7';
console.log(n3);

const n4 = '5' + '7';
console.log(n4);

const n5 = 7 - 5;
console.log(n5);

const n6 = '7' - 5;
console.log(n6);

const n7 = 7 - '5';
console.log(n7);

const n8 = '7' - '5';
console.log(n8);

const ll = 'labas' - 1;
console.log(ll);