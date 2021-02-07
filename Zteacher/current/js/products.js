function mouse_on_course_title(){
    $(".course-title").css("opacity","1");
    $(".course_more_info").addClass("fadeInDown");
    setTimeout(function(){
        $(".course-title").css("cursor","default");
    }, 500);
}





$(document).ready( function() {

    var navigation = $('.navbar');

    
    if($(window).width() < 960){

        const nav_bg_dark = () => {
            navigation.removeClass("bg-dark-primary");
            navigation.addClass("bg-dark");
        }

        window.onscroll = function () { 
            nav_bg_dark();
        }
        

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
        $(window).scroll(function() {
            $('.buttons').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("fadeInUp");
                }
            });
        });

        
	}else{

        navigation.removeClass("bg-dark");
        navigation.addClass("bg-dark-primary");
        window.onscroll = function () { 
            if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
                // console.log('here: '+document.documentElement.scrollTop);
                navigation.addClass("bg-dark");
                navigation.removeClass("bg-dark-primary");
            } 
            else {
                // console.log('there: '+document.documentElement.scrollTop);
                navigation.addClass("bg-dark-primary");
                navigation.removeClass("bg-dark");
            }
        };

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
        $(window).scroll(function() {
            $('.buttons').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+500) {
                    $(this).addClass("fadeInUp");
                }
            });
        });
        
	}

})