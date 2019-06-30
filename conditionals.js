// if (true) {
//   console.log('It is true');
// }
// if(NaN) {
//   console.log('Is NaN truthy?');
// }
// console.log('NaN is falsy')
// // NaN
// if(undefined) {
//   console.log('Is undefined truthy?');
// }
// console.log('Undefined is falsy')
// //undefined
// if(null) {
//   console.log('Is null truthy?');
// }
// console.log('Null is falsy')
// // null
// if(false) {
//   console.log('Is false truthy?');
// }
// console.log('False is falsy')
// //false
// if("") {
//   console.log('Is "" truthy?');
// }
// console.log('"" is falsy')
//""
// if(+0) {
//   console.log('Is +0 truthy?');
// }
// console.log('+0 is falsy')
// // +0
// if(-0) {
//   console.log('Is -0 truthy?');
// }
// console.log('-0 is falsy')
// //-0
// let num = 0
// if (num === 1) {
//   console.log('You won the prize!');
// } else {
//   console.log('You lost');
// }
//
// let one = 5
// if (one > 3) {
//   console.log('This is the true')
// } else {
//   console.log('This is false');
// }
//
// let two = NaN
// if (two) {
//   console.log('This is the true')
// } else {
//   console.log('This is false');
// }
//
// let three = 'cat'
// if (three === 'dog') {
//   console.log('Three is a dog')
// } else {
//   console.log('Three is not a dog');
// }
//
// let day = 'Tuesday';
// if (day === 'Monday'){
//   console.log('That is the 2nd day of the week')
// } else if (day === 'Tuesday') {
//   console.log('That is the 3rd day of the week')
// } else if (day === 'Saturday' || day === 'Sunday') {
//   console.log('It\'s the weekend')
// } else {
//   console.log('I don\' t know what day it is')
// } // else is only used at the end of conditionals to show that
// // there are no other options. if used before hand, it will ignore
// // all other else if statements after it and cause them to have a different color
//
// let color = 'blue'
// if (color === 'black') {
//   console.log('That\'s Kadijah\'s favorite color!')
// } else if (color === 'blue') {
//   console.log('That\'s Briany\'s favorite color!')
// } else if (color === 'pink') {
//   console.log('That\'s Savida\'s favorite color!')
// } else if (color === 'red') {
//   console.log('That\'s Alessandra\'s favorite color!')
// } else {
//   console.log('No one likes that color')
// }
//
// let age = 21;
// if (age >= 21) {
//   console.log('You may proceed')
// } else if (age >= 18) {
//   console.log('Parental permission is required')
// } else {
//   console.log('Parental supervision is required')
// }
//
// let myAge = "21";
// if ((myAge >= 20 && myAge < 30) || (myAge >= 40 && myAge < 50)) {
//   console.log('You are: ' + myAge + '. Would you like to take a survey?');
// } else if (age < 18) {
//   console.log('You have to go home')
// } else {
// console.log('Come on in!')
// }
//
// myAge <= 21 ? console.log('Parental supervision is required') : console.log('You may proceed');
//
//
// let yourPet ='cat';
// yourPet === 'dog' ? console.log('Come join the party!') : console.log('Get outta here!');
//
//
// let yourNetWorth = 1000000000
// yourNetWorth >= 1000000 ? console.log('donate money') : console.log('save up!')
//
let color = 'red'
switch (color) {
  case 'blue' :
    console.log('That\'s Briany\'s favorite color!')
    break;
  case 'black' :
    console.log('That\'s Kadijah\'s favorite color!')
    break;
  case 'red' :
    console.log('That\'s Alessandra\'s favorite color')
    break;
  default:
    console.log('No one likes that color')
}
