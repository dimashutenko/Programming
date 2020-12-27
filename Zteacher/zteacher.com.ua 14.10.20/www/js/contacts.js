$(document).ready( function() {

    if($(window).width() < 960)
    {

        $(window).scroll(function() {
            $('.phone').each(function(){
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+600) {
                    $(this).addClass("fadeInUp");
                }
            });
        });
		$(window).scroll(function() {
            $('.email').each(function(){
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+600) {
					setTimeout(() => { $(this).addClass("fadeInUp"); }, 300);
                }
            });
        });
		$(window).scroll(function() {
            $('.social-networks').each(function(){
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+550) {
                    $(this).addClass("fadeInUp");
                }
            });
        });
        $(window).scroll(function() {
            $('.networks__facebook').each(function(){
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+550) {
                    $(this).addClass("fadeInRight");
                }
            });
        });
        $(window).scroll(function() {
            $('.networks__telegram').each(function(){
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+550) {
                    setTimeout(() => { $(this).addClass("fadeInRight"); }, 200);
                }
            });
        });
        $(window).scroll(function() {
            $('.networks__instagram').each(function(){
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+550) {
                    setTimeout(() => { $(this).addClass("fadeInRight"); }, 400);

                }
            });
        });
        $(window).scroll(function() {
            $('.networks__tiktok').each(function(){
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+550) {
                    setTimeout(() => { $(this).addClass("fadeInRight"); }, 600);
                }
            });
        });
        $(window).scroll(function() {
            $('.bragging').each(function(){
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+550) {
                    $(this).addClass("fadeInUp");
                }
            });
        });


	}else{ //more tham 960px

        $('.facebook-bg').mouseover( function() {
            $(".fa-facebook").css( "animation", "networks-rotation 0.75s");
        });
        $('.facebook-bg').mouseleave( function() {
            $(".fa-facebook").css( "animation", "networks-rotation-back 0.75s");
        });
        $('.telegram-bg').mouseover( function() {
            $(".fa-telegram-plane").css( "animation", "networks-rotation 0.75s");
        });
        $('.telegram-bg').mouseleave( function() {
            $(".fa-telegram-plane").css( "animation", "networks-rotation-back 0.75s");
        });
        $('.instagram-bg').mouseover( function() {
            $(".fa-instagram").css( "animation", "networks-rotation 0.75s");
        });
        $('.instagram-bg').mouseleave( function() {
            $(".fa-instagram").css( "animation", "networks-rotation-back 0.75s");
        });
        $('.tiktok-bg').mouseover( function() {
            $(".tiktok-img").css( "animation", "networks-rotation 0.75s");
        });
        $('.tiktok-bg').mouseleave( function() {
            $(".tiktok-img").css( "animation", "networks-rotation-back 0.75s");
        });

        $(window).scroll(function() {
            $('.social-networks').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+500) {
                    $(this).addClass("fadeInUp");
                }
            });
        });
        $(window).scroll(function() {
            $('.phone').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+500) {
                    $(this).addClass("fadeInUp");
                }
            });
        });
		$(window).scroll(function() {
            $('.email').each(function(){
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+500) {
					setTimeout(() => { $(this).addClass("fadeInUp"); }, 500);
                }
            });
        });
        $(window).scroll(function() {
            $('.networks__facebook').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+500) {
                    $(this).addClass("fadeInRight");
                }
            });
        });
        $(window).scroll(function() {
            $('.networks__telegram').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+500) {
                    setTimeout(() => { $(this).addClass("fadeInRight"); }, 400);

                }
            });
        });
        $(window).scroll(function() {
            $('.networks__instagram').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+500) {
                    setTimeout(() => { $(this).addClass("fadeInRight"); }, 800);

                }
            });
        });
        $(window).scroll(function() {
            $('.networks__tiktok').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+500) {
                    setTimeout(() => { $(this).addClass("fadeInRight"); }, 1200);

                }
            });
        });
        $(window).scroll(function() {
            $('.bragging').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+500) {
                    $(this).addClass("fadeIn");
                }
            });
        });

	}

})