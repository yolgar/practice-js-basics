const a = '4.2';
const b = 9;

console.log(a, b);
console.log(typeof a, typeof b);

const add = parseInt(a) + b;
console.log(add);

const sub = a - b;
console.log(sub);

const mult = a * b;
console.log(mult.toFixed(2));

const div = a / b;
console.log(div);

const arr = [add, sub, mult, div];

arr.forEach(function(num) {
    if(num >= 20) {
        console.log(num + ' jest większe od 20');
    } else {
        console.log(num + ' jest mniejsze lub rowne');
    }
})