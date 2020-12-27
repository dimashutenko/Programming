$('a').on('click', function (e) {
  if (this.hash !== '') {
    const hash = this.hash;
	  if (hash=='#travel-english'){
		e.preventDefault();
    	$('html, body')
      		.animate({
        	scrollTop: $(hash).offset().top
      	},600);
	  }
  }
});


$(document).ready( function() {



    if($(window).width() < 960)
    {

        $(window).scroll(function() {
            $('#travelling-btn').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+600) {
                    $(this).addClass("fadeInUp");
                }
            });
        });


	}else{ //more tham 960px


        $(window).scroll(function() {
            $('#travelling-btn').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+500) {
                    $(this).addClass("fadeInUp");
                }
            });
        });

	}

})