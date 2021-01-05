jQuery(document).ready(function ($) {
    
  const palindrome = (str) => {
    str=str.toLowerCase();
    let arr=str.split("");
    for(let i=0; i<arr.length; i++){
      if (/[a-z]/.test(arr[i])==false){
         arr.splice(i, 1);
         i--;
      } 
    }
    str=arr.join("")
    console.log(str);
    if (str === str.split("").reverse().join("")){
      return true;
    } else {
      return false;
    }
  }
  
  
  
  console.log(palindrome("1 eye for of 1 eye."));
  console.log(palindrome("not1"));

});    

