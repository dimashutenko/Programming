

$(document).ready( function() {

// ---------------------------------approach start------------------------------------------------

        approach__more__text = (target, id) =>{ 
            clear_opacity_effects( $('.approach__right')[0]);
            clear_opacity_effects( $(id)[0]);
            $('.approach__right')[0].classList.add('opacity-to-zero');  
            setTimeout( function(){
                    hide($('.approach__right')[0]);
                    show($(id)[0]);
                    $(id)[0].classList.add('opacity-to-one');
            }, 500);
        };


        try{
            clear_opacity_effects = (target) => {
                target.classList.remove('opacity-to-zero');
                target.classList.remove('opacity-to-one');
            }
            hide = (target) =>{
                target.classList.add('d-none');
                target.classList.remove('d-flex');
            }
            show = (target) =>{
                target.classList.remove('d-none');
                target.classList.add('d-flex');
            }

            $('.school-advantage-speaking .circle')[0].addEventListener("click", function() {
                clear_opacity_effects( $('.approach__right')[0]);
                clear_opacity_effects( $('.approach__speaking')[0]);
                $('.approach__right')[0].classList.add('opacity-to-zero');  
                setTimeout( function(){
                        hide($('.approach__right')[0]);
                        show($('.approach__speaking')[0]);
                        $('.approach__speaking')[0].classList.add('opacity-to-one');
                }, 500);
            });

            $('.approach__right__close')[0].addEventListener("click", function() {
                clear_opacity_effects( $('.approach__right')[0]);
                clear_opacity_effects( $('.approach__speaking')[0]);
                $('.approach__speaking')[0].classList.add('opacity-to-zero');  
                setTimeout( function(){
                        hide($('.approach__speaking')[0]);
                        show($('.approach__right')[0]);
                        $('.approach__right')[0].classList.add('opacity-to-one');
                    }, 500);
            });
            // ----------------------------------------------------------------------------------
            $('.school-advantage-writing .circle')[0].addEventListener("click", function() { 
                clear_opacity_effects( $('.approach__right')[0]);
                clear_opacity_effects( $('.approach__writing')[0]);
                $('.approach__right')[0].classList.add('opacity-to-zero');  
                setTimeout( function(){ 
                        hide($('.approach__right')[0]);
                        show($('.approach__writing')[0]);
                        $('.approach__writing')[0].classList.add('opacity-to-one');
                }, 500);
            });

            $('.approach__right__close')[1].addEventListener("click", function() {
                clear_opacity_effects( $('.approach__right')[0]);
                clear_opacity_effects( $('.approach__writing')[0]);
                $('.approach__writing')[0].classList.add('opacity-to-zero');  
                setTimeout( function(){ 
                        hide($('.approach__writing')[0]);
                        show($('.approach__right')[0]);
                        $('.approach__right')[0].classList.add('opacity-to-one');
                    }, 500);
            });
            // ----------------------------------------------------------------------------------
            $('.school-advantage-interest .circle')[0].addEventListener("click", function() { 
                clear_opacity_effects( $('.approach__right')[0]);
                clear_opacity_effects( $('.approach__interest')[0]);
                $('.approach__right')[0].classList.add('opacity-to-zero');  
                setTimeout( function(){ 
                        hide($('.approach__right')[0]);
                        show($('.approach__interest')[0]);
                        $('.approach__interest')[0].classList.add('opacity-to-one');
                }, 500);
            });

            $('.approach__right__close')[2].addEventListener("click", function() {
                clear_opacity_effects( $('.approach__right')[0]);
                clear_opacity_effects( $('.approach__interest')[0]);
                $('.approach__interest')[0].classList.add('opacity-to-zero');  
                setTimeout( function(){ 
                        hide($('.approach__interest')[0]);
                        show($('.approach__right')[0]);
                        $('.approach__right')[0].classList.add('opacity-to-one');
                    }, 500);
            });
        } catch (error){
            console.log(error);
        }
// ---------------------------------approach end------------------------------------------------


// --------------------------------- courses gallery start------------------------------------------------
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });

    all_courses_z_index_1 = () => { 
        var list = $(".course");
        for (let i=0; i<list.length; i++){
            list[i].parentElement.parentElement.classList.add('z-index-1');
            list[i].parentElement.parentElement.classList.remove('z-index-99999');
        }
    }
        
    $(".zoom").hover(function(){ 
        all_courses_z_index_1();
        
        $(this).addClass('transition');

        $(this).parent().parent().removeClass('z-index-1');
        $(this).parent().parent().addClass('z-index-99999');
    }, function(){
        
        $(this).removeClass('transition');
    });
// ---------------------------------courses gallery end------------------------------------------------



/* -------videos gallery------- */
    $('.venobox').venobox({
        bgcolor: '#000',
        spinColor: '#000',
        spinner: 'three-bounce'
    });
/* -------videos gallery end------- */






/* -------Animate On Scroll Library------- */

    setTimeout(function(){
        document.querySelectorAll(".preloader")[0].remove();
    }, 3500);

    setTimeout(function(){
        
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, 3000);
    
/* -------Animate On Scroll Library end------- */





    if($(window).width() < 576)
    {
        
        Array.from($('.js-line-breaker')).forEach(element =>{
            element.innerHTML="<br>"; //adding new line to every .js-line-breaker
        });

        
        $( ".navbar-toggler" ).change(function() {
            if ($(".navbar-toggler")[0].classList.contains("collapsed")){
                $(".navbar-toggler-icon").css("display","inline-block");
            } else{
                $(".navbar-toggler-icon").css("display","none");
            }
        });
        


    }
    else if($(window).width() < 960)
    {

        


    }else{ //more tham 960px
	   
        /* ---------------------------------testimonials start--------------------------------------
        try{
            const scrollContainer = $(".testimonials-wrapper")[0];

            scrollContainer.addEventListener("wheel", (evt) => {
                evt.preventDefault();
                scrollContainer.scrollLeft += evt.deltaY;
            });
        } catch (error){
            console.log(error);
        }
        // ---------------------------------testimonials end-------------------------------------- */
	};



});