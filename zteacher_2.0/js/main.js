

$(document).ready( function() {

/*/ --------------------------------- Animating Number Counters start------------------------------------------------
function execOnce(fn, context) {
  var result;
  return function () {
    if (fn) {
      result = fn.apply(context || this, arguments);
      fn = null;
    }
    return result;
  };
}

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
}


// let obj = document.getElementById("percentage_value_90"); 

let animate_percentage_90 = function(){
    document.getElementById("percentage_value_90").innerHTML=0;
    execOnce(animateValue( document.getElementById("percentage_value_90"), 0, 90, 2000));
};
let animate_percentage_10 = execOnce(animateValue( document.getElementById("percentage_value_10"), 0, 10, 1000));
let animate_percentage_100 = execOnce(animateValue( document.getElementById("percentage_value_100"), 0, 100, 2500));
console.log(document.getElementById("percentage_value_90").innerHTML);

$(window).scroll(function() {
    $('#percentage_value_90').each(function(){ 
        if ($(this).offset().top < $(window).scrollTop()+750) { 
            animate_percentage_90();
        }
    });
    $('#percentage_value_10').each(function(){
        var elem_position = $(this).offset().top;
        var from_top_height = $(window).scrollTop();
        if ( elem_position < from_top_height +700) { 
            document.getElementById("percentage_value_90").innerHTML=0;
            animate_percentage_10();
        }
    });
    $('#percentage_value_100').each(function(){
        if ($(this).offset().top < $(window).scrollTop()+100) { 
            animate_percentage_100();
        }
    });
});

// --------------------------------- Animating Number Counters end------------------------------------------------*/


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
    AOS.init({
        duration: 1000,
        once: true,
    });
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

        // ---------------------------------approach start------------------------------------------------
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

            $('.school-advantage-speaking')[0].addEventListener("click", function() {
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
            $('.school-advantage-writing')[0].addEventListener("click", function() { 
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
            $('.school-advantage-interest')[0].addEventListener("click", function() { 
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

	   
        // ---------------------------------testimonials start--------------------------------------
        try{
            const scrollContainer = $(".testimonials-wrapper")[0];

            scrollContainer.addEventListener("wheel", (evt) => {
                evt.preventDefault();
                scrollContainer.scrollLeft += evt.deltaY;
            });
        } catch (error){
            console.log(error);
        }
        // ---------------------------------testimonials end--------------------------------------
	};



});