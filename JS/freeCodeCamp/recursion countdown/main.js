jQuery(document).ready(function ($) {
  
  countdown = (n) => {
    if (n < 1){
      return []
    } else {
      setTimeout(function(){
        const arr = countdown(n-1);
        arr.unshift(n);
        el.innerHTML = n;
        return arr;
      }, 1000);
      
      
    }
  }

  
  var el = document.getElementById('h1_id');
  var v = countdown(10);
  console.log(v);
  

});    

