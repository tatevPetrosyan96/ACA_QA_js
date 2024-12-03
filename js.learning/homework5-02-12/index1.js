
import { STR1, STR2 } from './index2.js';
let commonCount = 0; 


for(let i in STR1){
    let element = STR1[i];

    for(let k in STR2){
        if(element == STR2[k]){
            commonCount++;
            break;
        }
            
    }   
}
console.log(commonCount);
