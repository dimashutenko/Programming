function mouse_on_course_title(){
    $(".course-title").css("opacity","1");
    $(".course_more_info").addClass("fadeInDown");
    setTimeout(function(){
        $(".course-title").css("cursor","default");
    }, 500);
}

$(document).ready( function() {

	if($(window).width() < 960){
		$(".course-title").css("opacity","1");
	    $(".course_more_info").addClass("fadeInDown");
	    $(".course-title").css("cursor","default");

	    $(window).scroll(function() {
    	    $('.course-intro').each(function(){
    	        var imagePos = $(this).offset().top;

    	        var topOfWindow = $(window).scrollTop();
    	        if (imagePos < topOfWindow+650) {
    	            $(this).addClass("fadeInLeft");
    	        }
    	    });
    	});
        $(window).scroll(function() {
            $('.course-details').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+600) {
                    $(this).addClass("fadeInUp");
                }
            });
        });

        
	}else{
		$(window).scroll(function() {
    	    $('.course-intro').each(function(){
    	        var imagePos = $(this).offset().top;

    	        var topOfWindow = $(window).scrollTop();
    	        if (imagePos < topOfWindow+500) {
    	            $(this).addClass("fadeInLeft");
    	        }
    	    });
    	});
        $(window).scroll(function() {
            $('.course-details').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+400) {
                    $(this).addClass("fadeInUp");
                }
            });
        });
	}

})