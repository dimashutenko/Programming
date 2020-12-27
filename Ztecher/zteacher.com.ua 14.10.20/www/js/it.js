$('a').on('click', function (e) {
  if (this.hash !== '') {
    const hash = this.hash;
	  if (hash=='#it-english'){
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
    	    $('.pic-bg').each(function(){
    	        var imagePos = $(this).offset().top;

    	        var topOfWindow = $(window).scrollTop();
    	        if (imagePos < topOfWindow+650) {
    	            $(this).addClass("left-to-right");
    	        }
    	    });
    	});
        $(window).scroll(function() {
            $('#it-content').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("left-to-right-bounce");
                }
            });
        });
    	$(window).scroll(function() {
            $('.buttons').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("fadeInUp");
                }
            });
        });
		$(window).scroll(function() {
    	    $('.section__title').each(function(){
    	        var imagePos = $(this).offset().top;
    	        var topOfWindow = $(window).scrollTop();
    	        if (imagePos < topOfWindow+700) {
    	            $(this).addClass("fadeInUp");
    	        }
    	    });
    	});



	}else{ //more tham 960px

		$(window).scroll(function() {
    	    $('.pic-bg').each(function(){
    	        var imagePos = $(this).offset().top;

    	        var topOfWindow = $(window).scrollTop();
    	        if (imagePos < topOfWindow+500) {
    	            $(this).addClass("left-to-right");
    	        }
    	    });
    	});
        $(window).scroll(function() {
            $('#it-content').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+500) {
                    $(this).addClass("left-to-right-bounce");
                }
            });
        });
        $(window).scroll(function() {
            $('.buttons').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+500) {
                    $(this).addClass("fadeInUp");
                }
            });
        });
		$(window).scroll(function() {
    	    $('.section__title').each(function(){
    	        var imagePos = $(this).offset().top;

    	        var topOfWindow = $(window).scrollTop();
    	        if (imagePos < topOfWindow+550) {
    	            $(this).addClass("fadeInUp");
    	        }
    	    });
    	});

	}

})