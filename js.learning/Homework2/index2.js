 let sentence = "I am learning JavaScript";
 let modified = "";

 for (let i = 0;  i <= sentence.length;  i++) {
    let element = sentence.charAt(i)
    if (element === ' ') {
        modified += "-";
    }else { 
       modified += element; 
    }
        
 };

 console.log(modified);

