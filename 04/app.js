function createArray(min, max) {
    const arr = [];
    for(let i = 0; i < 20; i++) {
    const num = Math.round((Math.random() * (max - min)) + min);
    
    arr.push(num);
}
return arr;
}
console.log(createArray(5,90));