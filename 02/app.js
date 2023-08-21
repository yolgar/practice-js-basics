
/* rozwiązanie z pętlą for */
const x = Number(prompt('Podaj liczbę!'));

if(x >= 1 && x < 10) {
for(let i=1; i<=9; i++) {
const result = x * i;
console.log(x + ' x ' + i + ' = ' + result);
}
} else {
    console.error('Podałeś błędne dane');
}


/* rozwiązanie z pętlą while  */
const a = Number(prompt('Podaj liczbę z przedziału od 1 do 100!'));
const n = Number(prompt('Podaj potegę z przedziału od 0 do 10!'));

if(a >= 1 && a <= 100 && n >= 0 && n <= 10){
    if(n === 0){
        console.log('Gdy potęga jest równa 0, to wynik zawse jest 1');
    } else {
let iter = 0;
let result = 1;
let info = '';
while(iter < n){
    result = result * a;

    if(iter > 0) {
    info += ' * ';
    }
    info = info + a;

    iter ++;
}
info = info + ' = ' + result;
    console.log(result);
    console.log(info);
}
} else {
    alert('Podałeś dane poza zakresem');
}