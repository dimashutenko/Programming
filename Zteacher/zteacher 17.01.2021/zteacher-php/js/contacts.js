$(document).ready( function() {

    if($(window).width() < 960)
    {
        $(window).on('scroll', function(){

            let topOfWindow = $(window).scrollTop();
            try {
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
                    setTimeout(() => {
                        $(".bragging")[0].classList.add("fadeInUp");
                    }, 2500);
                };
                // networks
            } catch(error){
                console.log(error);
            }


        });
        


    }else{ //more tham 960px

        // adding animation to social networks on mouseover and mouseleave
        for (let i=0; i<$('.social-network div').length; i++){
            $('.social-network div').eq(i).on('mouseover', function () { // .eq is used to construct jQuery object from DOM element
                $('.social-network div').eq(i).css( "animation", "networks-rotation 0.75s");
            });
            $('.social-network div').eq(i).on('mouseleave', function () { debugger
                $('.social-network div').eq(i).css( "animation", "networks-rotation-back 0.75s");
            });
        }
        

        
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
                setTimeout(() => {
                    $(".bragging")[0].classList.add("fadeInUp");
                }, 2500);
            };
            // networks

        });
        
    

	};

})