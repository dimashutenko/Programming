$(document).ready( function() {

    if($(window).width() < 960)
    {
        


        


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
        

    

	};

})