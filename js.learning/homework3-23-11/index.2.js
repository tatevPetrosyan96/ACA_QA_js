//Remove Duplicates

let number = [1, 2, 2, 3, 4, 4, 5];
let newArray =[];
for(i = 0; i < number.length; i++){
    if(!newArray.includes(i)){
        newArray.push(i);
    }
};
console.log(newArray)


