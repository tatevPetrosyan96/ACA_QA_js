//Longest Text
const arr = ["React", "JavaScript", "Redux", "PHP", "C#"]
let longest= [0];

for(i = 0; i < arr.length; i++) {
if(arr[i].length > longest.length){
longest = arr[i]; 
}
}

 console.log(longest)