const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function getSum (d, e, k) {
    const dInt = parseInt(d);
    const eInt = parseInt(e);
    const kInt = parseInt(k);

    const arr = [dInt, eInt, kInt];
    arr.sort(function(x,y) {
        return y - x;
    });
    return arr[0] + arr[1];
}

const sum = getSum(a, b, c);
console.log(sum);


const isEven = function(num) {
if(typeof num != 'number'){
    return null;
} 
return num % 2 === 0;
}
// console.log(isEven(9));

const even = isEven(sum);
console.log(even);




function showInfo(value, isEven) {
    switch(isEven) {
case null:
    console.log('Podany argument ' + value +' nie jest liczbą');
    break;
case true:
    console.log('Podany argument ' + value +' jest parzysty');
    break;
case false:
    console.log('Podany argument ' + value +' jest nieparzysty');
    break;
default:
    console.log('Błędne dane');
    break;
}
}
showInfo(sum, even);


function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}