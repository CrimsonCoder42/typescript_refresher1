"use strict";
// const year = document.getElementById('year');
// const thisYear = new Date().getFullYear();
// year.setAttribute('datetime', thisYear);
// year.textContent = thisYear
// let year: HTMLElement | null = document.getElementById('year');
// let thisYear: number | string = new Date().getFullYear().toString();
// if(year) {
//   year.setAttribute('datetime', thisYear);
//   year.textContent = thisYear;
// }
const year = document.getElementById('year');
const thisYear = new Date().getFullYear().toString();
year.setAttribute('datetime', thisYear);
year.textContent = thisYear;
