// gti mec ev poqr tver@ u et mijakayqum tes vor@ chka 

const arr = [9, 2, 7, 4];// 3, 5, 6 ,8
const result = [];
let min = arr[0];
let max = arr [0];

for(i = 0; i< arr.length; i++){
    if (arr[i]>max) {
    max = arr[i]
    }
    if (arr[i]<min) {
        min = arr[i]
}
}

for(i = min; i < max; i++){
    if(!arr.includes(i)){
        result.push(i);
    }
}
console.log(result, 'result');
