"use strict";
//*****************************************PREGUNTA 3**********************************************
var Check = '✅';
const camelCase = {
    underscore_case: 'underscore_case',
    first_name: 'first_name',
    Some_Variable: 'Some_Variable',
    calculate_AGE: 'calculate_AGE',
    delayed_departure: 'delayed_departure',
};
let a = camelCase.underscore_case.length;
if (a < camelCase.delayed_departure.length)
    a = camelCase.delayed_departure.length;
a = a;
const _ = require('lodash');
var p = '';
var c;
c = a - camelCase.underscore_case.length;
while (c > 0) {
    p = p + ' ';
    c--;
}
console.log(_.camelCase('underscore_case'), p, Check);
c = a - camelCase.first_name.length;
p = '';
while (c > 0) {
    p = p + ' ';
    c--;
}
console.log(_.camelCase('first_name'), p, Check = Check + '✅');
c = a - camelCase.Some_Variable.length;
p = '';
while (c > 0) {
    p = p + ' ';
    c--;
}
console.log(_.camelCase('Some_Variable'), p, Check = Check + '✅');
c = a - camelCase.calculate_AGE.length;
p = '';
while (c > 0) {
    p = p + ' ';
    c--;
}
console.log(_.camelCase('calculate_AGE'), p, Check = Check + '✅');
c = a - camelCase.delayed_departure.length;
p = '';
while (c > 0) {
    p = p + ' ';
    c--;
}
console.log(_.camelCase('delayed_departure'), p, Check = Check + '✅');
