const arr = createArray(10, 200);
const largest = getLargest(arr);
const avg = getAvg(largest);
console.log(avg);


function createArray(min, max) {
    const arr = [];
    for(let i = 0; i < 20; i++) {
    const num = Math.round((Math.random() * (max - min)) + min);
    
    arr.push(num);
}
return arr;
}
console.log(createArray(5,90));


function getLargest(arr) {
   arr.sort(function(x,y) {
    return y - x;
});
    return arr.slice(0, 10);
}
console.log(getLargest(createArray(1,20)));


// let total = 0;
// let count = 0;

// function getAvg(arr){
//     if(arr.length === 0){
//                 return 0;
//             }
// arr.forEach(function(index, value){
//     total += value;
//     count++;
// });
// return total / count;
// }

function getAvg(arr){
    if(arr.length === 0){
        return 0;
    }
    const sum = arr.reduce(function(acc, curr){
    return acc + curr;
    }, 0);
    return sum / arr.length; 
}
console.log(getAvg(createArray(1,9)));
