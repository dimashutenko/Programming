$(document).on( 'scroll', function() {

    if($(window).width() < 960)
    {
        $(window).on('scoll', function(){

            var topOfWindow = $(window).scrollTop();

            $('.phone').each(function(){
                var imagePos = $(this).offset().top;
                if (imagePos < topOfWindow+600) {
                    $(this).addClass("fadeInUp");
                }
            });

            $('.email').each(function(){
                var imagePos = $(this).offset().top;
                if (imagePos < topOfWindow+600) {
					setTimeout(() => { $(this).addClass("fadeInUp"); }, 300);
                }
            });

            // networks
            $('.networks-title').each(function(){
                var imagePos = $(this).offset().top;
                if (imagePos < topOfWindow+550) {
                    $(this).addClass("fadeInUp");
                }
            });
            if($('.networks-title').hasClass('fadeInUp')){ 
                const networks_arr = $('.social-network');
                for (let i=0; i<networks_arr.length; i++){ 
                    setTimeout(() => {
                        networks_arr[i].classList.add("fadeIn");
                    }, 500+250*i);
                };
                if($('.networks__telegram').hasClass("fadeIn")){
                    setTimeout(() => {
                        $(".bragging")[0].classList.add("fadeInUp");
                    }, 500);
                }
            };
            // networks


        });
        


    }else{ //more tham 960px
        

        $('.facebook-bg').on('mouseover', function() {
            $("#rotatable-facebook").css( "animation", "networks-rotation 0.75s");
        });
        $('.facebook-bg').on('mouseover', function() {
            $("#rotatable-facebook").css( "animation", "networks-rotation-back 0.75s");
        });
        $('.telegram-bg').on('mouseover', function() {
            $("#rotatable-telegram").css( "animation", "networks-rotation 0.75s");
        });
        $('.telegram-bg').on('mouseover', function() {
            $("#rotatable-telegram").css( "animation", "networks-rotation-back 0.75s");
        });
        $('.instagram-bg').on('mouseover', function() {
            $("#rotatable-instagram").css( "animation", "networks-rotation 0.75s");
        });
        $('.instagram-bg').on('mouseover', function() {
            $("#rotatable-instagram").css( "animation", "networks-rotation-back 0.75s");
        });
        $('.tiktok-bg').on('mouseover', function() {
            $(".tiktok-img").css( "animation", "networks-rotation 0.75s");
        });
        $('.tiktok-bg').on('mouseover', function() {
            $(".tiktok-img").css( "animation", "networks-rotation-back 0.75s");
        });

        
        $(window).on('scroll',function() {
            
            var topOfWindow = $(window).scrollTop();

            $('.phone').each(function(){
                var imagePos = $(this).offset().top;
                if (imagePos < topOfWindow+500) {
                    $(this).addClass("fadeInUp");
                }
            });
            $('.email').each(function(){
                var imagePos = $(this).offset().top;
                if (imagePos < topOfWindow+500) {
					setTimeout(() => { $(this).addClass("fadeInUp"); }, 500);
                }
            });
            // networks
            $('.networks-title').each(function(){
                var imagePos = $(this).offset().top;
                if (imagePos < topOfWindow+500) {
                    $(this).addClass("fadeInUp");
                }
            });
            if($('.networks-title').hasClass('fadeInUp')){ 
                const networks_arr = $('.social-network');
                for (let i=0; i<networks_arr.length; i++){ 
                    setTimeout(() => {
                        networks_arr[i].classList.add("fadeIn");
                    }, 500+250*i);
                };
                if($('.networks__telegram').hasClass("fadeIn")){
                    setTimeout(() => {
                        $(".bragging")[0].classList.add("fadeInUp");
                    }, 500);
                }
            };
            // networks

        });
        
    

	}

})