jQuery(document).ready(function ($) {
  
  function rangeOfNumbers(startNum, endNum) {
    if (startNum == endNum){
      return [startNum];
    } else {
      const arr = rangeOfNumbers(startNum, endNum-1);
      console.log(arr);
      arr.push(endNum);
      return arr;
    }
  };
  
  console.log(rangeOfNumbers(1,5));
});    

