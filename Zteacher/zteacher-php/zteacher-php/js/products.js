if($(window).width() < 960)
{
    
    $(window).on('scroll', function(){

        let topOfWindow = $(window).scrollTop();

        try {
            $('.course-main-info').each(function(){
                var elemPosition = $(this).offset().top;
                if (elemPosition < topOfWindow+650) {
                    $(this).addClass("fadeInUp");
                }
            });

            $('.course-teachers').each(function(){
                var elemPosition = $(this).offset().top;
                if (elemPosition < topOfWindow+650) {
                    $(this).addClass("fadeInUp");
                }
            });

            $('.course-info').each(function(){
                var elemPosition = $(this).offset().top;
                if (elemPosition < topOfWindow+650) {
                    $(this).addClass("fadeInUp");
                }
            });

            $('.course-details').each(function(){
                var elemPosition = $(this).offset().top;
                if (elemPosition < topOfWindow+650) {
                    $(this).addClass("fadeInUp");
                }
            });
            $('.course-additional-info').each(function(){
                var elemPosition = $(this).offset().top;
                if (elemPosition < topOfWindow+650) {
                    $(this).addClass("fadeInUp");
                }
            });
            
            
        } catch (error) {
            console.log(error);
        }
    });
    

}else{ //more tham 960px

    $(window).on('scroll', function(){
        let topOfWindow = $(window).scrollTop();

        try {
            $('.course-main-info').each(function(){
                var elemPosition = $(this).offset().top;
                if (elemPosition < topOfWindow+500) {
                    $(this).addClass("fadeInUp");
                }
            });

            $('.course-teachers').each(function(){
                var elemPosition = $(this).offset().top;
                if (elemPosition < topOfWindow+500) {
                    $(this).addClass("fadeInUp");
                }
            });

            $('.course-info').each(function(){
                var elemPosition = $(this).offset().top;
                if (elemPosition < topOfWindow+500) {
                    $(this).addClass("fadeInUp");
                }
            });

            $('.course-details').each(function(){
                var elemPosition = $(this).offset().top;
                if (elemPosition < topOfWindow+500) {
                    $(this).addClass("fadeInUp");
                }
            });
            $('.course-additional-info').each(function(){
                var elemPosition = $(this).offset().top;
                if (elemPosition < topOfWindow+500) {
                    $(this).addClass("fadeInUp");
                }
            });
        } catch (error) {
            console.log(error);
        }
    });

};
