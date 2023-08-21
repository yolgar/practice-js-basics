
/* rozwiązanie z pętlą for */
// const x = Number(prompt('Podaj liczbę!'));

// if(x >= 1 && x < 10) {
// for(let i=1; i<=9; i++) {
// const result = x * i;
// console.log(x + ' x ' + i + ' = ' + result);
// }
// } else {
//     console.error('Podałeś błędne dane');
// }


/* rozwiązanie z pętlą while  */
const a = prompt('Podaj liczbę!');
const n = prompt('Podaj potegę!');

let iter = 0;
let result = 1;
let info = '';
while(iter < n){
    result = result * a;

    if(iter > 0) {
    info = info + ' * ';
    }
    info = info + a;

    iter ++;
}
info = info + ' = ' + result;
    console.log(result);
    console.log(info);
