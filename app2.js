let birthDate = new Date(1995,2,8);
console.log(`My birth day is: ${birthdate}`);

console.log('Date 1B seconds from my BD');
let seconds = 1000000000;
let days = seconds /86400;
let nextDay = birthDate.getDate() + days;
let newDate = new Date(birthDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());
newDate.setDate(nextDay);
console.log(`Day in 1B seconds: ${newDate} `);

let age = newDate.getFullYear() - birthDate.getFullYear();
console.log(`My age in year ${newDate.getFullYear()} would been ${age}`);

let d2 = new Date(birthDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());
d2.setSeconds(1000000000);
console.log(d2);

console.log(`Age: ${d2.getFullYear() - birthDate.getFullYear()}`);

d2 = new Date(birthDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());
d2.setMilliseconds(1000000000);
console.log(d2);
console.log(`Age: ${d2.getFullYear() - birthDate.getFullYear()}`);