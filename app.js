/* 
Author: Kay Gabriel
Title: Working with dates
Date: Jan.20/2022
*/

let now = new Date();
console.log(now);
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(`${now.toDateString()} ${now.toTimeString()}`);
console.log(`Now Year: ${now.getFullYear()}`);
console.log(`Now Month: ${now.getMonth()}`); // zero based
console.log(`Now Date: ${now.getDate()}`);
console.log(`Now day of Week ${now.getDay()}`); // zero based. Sunday is DoW zero
console.log(`Now Hours: ${now.getHours()}`);
console.log(`Now Minutes: ${now.getMinutes()}`);
console.log(`Now Seconds ${now.getSeconds()}`);
console.log(`Now Milliseconds ${now.getMilliseconds()}`);

now.setFullYear(1999);
console.log(`${now.toDateString()} ${now.toTimeString()}`);
console.log(`Then day of Week ${now.getDay()}`);