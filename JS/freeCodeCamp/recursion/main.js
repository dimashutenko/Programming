jQuery(document).ready(function ($) {
  
  var arr=[1,2,3,4,5,6,7,8];

  sum = (arr, n) => {
    if(n==0){
      console.log('there');
      return 0;
    } else {
      console.log('here');
      return sum(arr, n-1) + arr[n-1]
    }
  }
  console.log(sum(arr, 3));

});    

