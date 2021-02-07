/*
$('a').on('click', function (e) {
  if (this.hash !== '') {
  	const hash = this.hash;
	if(hash=='#reviews'){
		e.preventDefault();
		$('html, body').animate({scrollTop: $(hash).offset().top},2200);
	}else if (hash=='#merits'){
		e.preventDefault();
    	$('html, body').animate({scrollTop: $(hash).offset().top},1000);
	}else if (hash=='#products'){
		e.preventDefault();
    	$('html, body').animate({scrollTop: $(hash).offset().top},500);
	}
  }
});
*/

$(document).ready( function() {

    /* -------nav------- */
    $('.navbar')[0].classList.add("fadeIn");
    
    if (window.location.href.includes('index.html')){
        $('#home-page')[0].classList.add('active');
    } else {
        $('#home-page')[0].classList.remove('active');
    }

    if (window.location.href.includes('contacts.html')){
        $('#contacts-page')[0].classList.add('active');
    } else {
        $('#contacts-page')[0].classList.remove('active');
    }
        
    /* -------nav end------- */


    /* -------modal------- */
    const number_of_courses = $('#products .course').length;
    var multipleCancelButton = new Choices('#choices-multiple-remove-button', {
     removeItemButton: true,
     maxItemCount: number_of_courses,
     searchResultLimit: number_of_courses,
     renderChoiceLimit: number_of_courses
    });

    let stop_form_validation = true;

    display_user_choice=(trigger_id)=>{ 
        for (let i=0; i<$('.input-for-user-contact').length; i++){
            $('.input-for-user-contact')[i].classList.add('d-none'); // to all
            $('.input-for-user-contact')[i].required=false;
        };
        stop_form_validation = false;
        try{
            $('#communication-method-not-chosen')[0].classList.remove('d-flex');
        } catch (error){
            console.log(error);
        }
        switch (trigger_id){ 
            case 'radio_viber':
                 $('#user_viber')[0].classList.remove('d-none');
                 $('#user_viber')[0].required=true;
                 break;
            case 'radio_telegram':
                 $('#user_telegram')[0].classList.remove('d-none');
                 $('#user_telegram')[0].required=true;
                 break;
            case 'radio_whatsapp':
                 $('#user_whatsapp')[0].classList.remove('d-none');
                 $('#user_whatsapp')[0].required=true;
                 break;
            case 'radio_phone':
                 $('#user_phone')[0].classList.remove('d-none');
                 $('#user_phone')[0].required=true;
                 break;
            case 'radio_email':
                 $('#user_email')[0].classList.remove('d-none');
                 $('#user_email')[0].required=true;
                 break;
        };
    };

    
    
    (function() { 
      'use strict';
      window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) { 
            if(stop_form_validation == true){
                event.preventDefault();
                event.stopPropagation();
                $('#communication-method-not-chosen')[0].classList.add('d-flex');
                console.log('validation prevented');
            }
            if (form.checkValidity() === false  || stop_form_validation == true) {
              event.preventDefault();
              event.stopPropagation(); // stops submission ?
              console.log('validation prevented');
              form.classList.add('was-validated');
            } else{
                event.preventDefault();
                $.ajax({
                    type: "POST",
                    url: "php/mail.php",
                    data: $(this).serialize()
                }).done(function(){
                    $(this).find("input").val("");

                    // alert("message sent");

                    form.reset();
                    form.classList.remove('was-validated');
                });
                $('#trial-lesson-modal').modal('toggle');
            };
            
          }, false);
        });
      }, false);
    })();

    // $('#trial-lesson-form').submit(function(event){
    //     event.preventDefault();
    //     $.ajax({
    //         type: "POST",
    //         url: "php/mail.php",
    //         data: $(this).serialize()
    //     }).done(function(){
    //         $(this).find("input").val("");
    //         alert("message sent");
    //         $('#trial-lesson-form')[0].reset();
    //     })
    // });



    /* -------modal end------- */




    var video_slider_interval = 6000;

	/* -------slider------- */
    
    $("#mycarousel").carousel( { interval: 20000 } );

    /* -------slider------- */

    

    /* ----------videos--------*/

    $("#videoSlider").carousel( { interval: video_slider_interval } );
    $("#videoSlider").on('mouseover', function(){
        $("#videoSlider").carousel('pause')
    });
    // $("#videoSlider").on('mouseleave', function(){
    //     $("#videoSlider").carousel('cycle')
    // });


    if($(window).width() < 560){
        $("#videoSlider").on('hover', function(){
            $("#videoSlider").carousel('pause')
        });
    }

    

    $(".carousel-control-prev").on('click', function(){
        all_youtube_videos_pause();
    });

    $(".carousel-control-next").on('click', function(){
        all_youtube_videos_pause();
    });

    function all_youtube_videos_pause() {
        player1.pauseVideo();
        player2.pauseVideo();
        player3.pauseVideo();
        player4.pauseVideo();
        player5.pauseVideo();
        player6.pauseVideo();
        player7.pauseVideo();
        //player8.pauseVideo();
    };
    /* ----------videos--------*/


    /* ----------secret box--------*/
    var message_to_show = $(".secret-message")[0];
    $(".school-advantage").on("mouseover", function (){
        if($("#digital-approach h4").is(':hover')){
            message_to_show.classList.remove('opacity-to-one');
            message_to_show.classList.add('opacity-to-zero');
            setTimeout(() => {
                message_to_show.innerHTML = "Сучасні студенти потребують сучасного підходу до навчання :)";
                message_to_show.classList.remove('opacity-to-zero');
                message_to_show.classList.add('opacity-to-one');
            }, 500);
            
            
        } 
        if($("#students_interests h4").is(':hover')){ 
            message_to_show.classList.remove('opacity-to-one');
            message_to_show.classList.add('opacity-to-zero');
            setTimeout(() => {
                message_to_show.innerHTML = `Бажання студентів знаходяться в центрі нашої уваги, ми flexible — тому і такі круті!`;
                message_to_show.classList.remove('opacity-to-zero');
                message_to_show.classList.add('opacity-to-one');
            }, 500);
            
        } 
        if($("#creative_teachers h4").is(':hover')){ 
            message_to_show.classList.remove('opacity-to-one');
            message_to_show.classList.add('opacity-to-zero');
            setTimeout(() => {
                message_to_show.innerHTML = `Навчаємо з завдоволенням, а не заставляємо "зубрити".`;
                message_to_show.classList.remove('opacity-to-zero');
                message_to_show.classList.add('opacity-to-one');
            }, 500);
            
        }
        if($("#horison_expansion h4").is(':hover')){ 
            message_to_show.classList.remove('opacity-to-one');
            message_to_show.classList.add('opacity-to-zero');
            setTimeout(() => {
                message_to_show.innerHTML = `Ми віримо, що нашою ціллю є дещо більше ніж вивчення миви.`;
                message_to_show.classList.remove('opacity-to-zero');
                message_to_show.classList.add('opacity-to-one');
            }, 500);
            
        }
        if($("#modern_trends h4").is(':hover')){ 
            message_to_show.classList.remove('opacity-to-one');
            message_to_show.classList.add('opacity-to-zero');
            setTimeout(() => {
                message_to_show.innerHTML = `Змінюється світ, разом з ним і мова. Ми проти академізму, використовуємо сленг та слідкуємо за сучасними трендами.`;
                message_to_show.classList.remove('opacity-to-zero');
                message_to_show.classList.add('opacity-to-one');
            }, 500);
            
        }
        
    });
    /* ----------secret box--------*/

    // courses
    for (let i=0; i<$('#products .course').length; i++){
        $('#products .course')[i].classList.add('animated'); //adding .animated to all
    }
    // courses
    for (let i=0; i<$('.feature-wrapper').length; i++){
        $('.feature-wrapper')[i].classList.add('animated'); //adding .animated to all
    }

    load_features_details = (button) => {
        button.classList.add('d-none');
        $('#merits ul.list')[0].classList.remove('d-none');
        console.log($('#merits ul.list').classList);
    }




    if($(window).width() < 960)
    {

        $(window).on('scroll', function(){
            let topOfWindow = $(window).scrollTop();

            try {
                let elementPosition = $('.school-advantage')[0].offsetTop;
                if (elementPosition < topOfWindow+650) {
                    $('.school-advantage')[0].classList.add("fadeInUp");
                };
                for (let i = 0; i <$('.school-advantage').length; i++) {
                    setTimeout(() => {
                        $('.school-advantage')[i].classList.add("fadeInUp");
                    }, 250+250*i);
                    
                };
                if ($('.school-advantage')[$('.school-advantage').length-1].classList.contains('fadeInUp')) {
                    $('.secret-box')[0].classList.add("fadeInUp");
                };

                $('#lessons').each(function(){
                    var elemPosition = $(this).offset().top;
                    if (elemPosition < topOfWindow+650) {
                        $(this).addClass("fadeIn");
                    }
                });
                $('.lessons__left').each(function(){
                    var imagePos = $(this).offset().top;
                    if (imagePos < topOfWindow+650) {
                        $(this).addClass("fadeInLeft");
                    }
                });
                $('.lessons__right').each(function(){
                    var imagePos = $(this).offset().top;
                    if (imagePos < topOfWindow+700) {
                        $(this).addClass("fadeInRight");
                    }
                });
                $('.lessons__description span').each(function(){
                    var imagePos = $(this).offset().top;
                    if (imagePos < topOfWindow+450) {
                        $(this).addClass("highlighted");
                    }
                });
                $('.section__title').each(function(){
                    var imagePos = $(this).offset().top;
                    if (imagePos < topOfWindow+700) {
                        $(this).addClass("fadeInUp");
                    }
                });

                // courses
                if($('#products .section__title').hasClass('fadeInUp')){
                    setTimeout(() => {
                        for (let i=0; i<$('#products .course').length; i++){ 
                            const course = $('#products .course')[i];
                            let elementPosition = $('#products .course')[i].offsetTop;
                            if (elementPosition < topOfWindow+700+50*i) {
                                course.classList.add("fadeIn");
                            }
                        };
                    }, 500);
                };
                // courses
                // features
                for (let i=0; i<$('.feature-wrapper').length; i++){ 
                    if ($('.feature-wrapper')[i].offsetTop < topOfWindow+700+50*i) {
                        $('.feature-wrapper')[i].classList.add("fadeInUp");
                    }
                };
                // features
                $('.list__item-1-left').each(function(){
                    var imagePos = $(this).offset().top;
                    if (imagePos < topOfWindow+700) {
                        $(this).addClass("fadeInLeft");
                    }
                });
                $('.list__item-1-right').each(function(){
                    var imagePos = $(this).offset().top;
                    if (imagePos < topOfWindow+700) {
                        $(this).addClass("fadeInRight");
                        $('.list__item-1-right').removeClass("animated");
                    }
                });
                $('.list__item-2-left').each(function(){
                    var imagePos = $(this).offset().top;
                    if (imagePos < topOfWindow+700) {
                        $(this).addClass("fadeInLeft");

                        setTimeout(function(){
                          $('.list__item-2-left').removeClass("animated");
                        }, 1000);
                    }
                });
                $('.list__item-2-right').each(function(){
                    var imagePos = $(this).offset().top; 
                    if (imagePos < topOfWindow+700) {
                        $(this).addClass("fadeInRight");
                    }
                });
                $('.list__item-3-left').each(function(){
                    var imagePos = $(this).offset().top;
                    if (imagePos < topOfWindow+700) {
                        $(this).addClass("fadeInLeft");
                    }
                });
                $('.list__item-3-right').each(function(){
                    var imagePos = $(this).offset().top;
                    if (imagePos < topOfWindow+700) {
                        $(this).addClass("fadeInRight");

                        setTimeout(function(){
                          $('.list__item-3-right').removeClass("animated");
                        }, 1000);
                    }
                });
                $('.list__item-4').each(function(){
                    var imagePos = $(this).offset().top;

                    var topOfWindow = $(window).scrollTop();
                    if (imagePos < topOfWindow+700) {
                        $(this).addClass("fadeInUp");
                    }
                });
                $('.list__item-5-left').each(function(){
                    var imagePos = $(this).offset().top;
                    if (imagePos < topOfWindow+700) {
                        $(this).addClass("fadeInLeft");

                        setTimeout(function(){
                          $('.list__item-5-left').removeClass("animated");
                        }, 1000);
                    }
                });
                $('.list__item-5-right').each(function(){
                    var imagePos = $(this).offset().top;
                    if (imagePos < topOfWindow+700) {
                        $(this).addClass("fadeInRight");
                    }
                });
                $('.list__item-6').each(function(){
                    var imagePos = $(this).offset().top;

                    var topOfWindow = $(window).scrollTop();
                    if (imagePos < topOfWindow+700) {
                        $(this).addClass("fadeInUp");
                    }
                });
                $('.buttons').each(function(){
                    var imagePos = $(this).offset().top;
                    if (imagePos < topOfWindow+650) {
                        $(this).addClass("fadeIn");
                    }
                });
                $('#reviews').each(function(){
                    var imagePos = $(this).offset().top;
                    if (imagePos < topOfWindow+700) {
                        $(this).addClass("fadeInUp");
                    }
                });
                $('.footer').each(function(){
                    var imagePos = $(this).offset().top;
                    if (imagePos < topOfWindow+750) {
                        $(this).addClass("fadeIn");
                    }
                });



            } catch (error) {
                console.log(error);
            };
            
            
            
        });


    }else{ //more tham 960px
        
        

		$(window).on('scroll', function(){
            let topOfWindow = $(window).scrollTop();
            
            
                
            try {

                let elementPosition = $('.school-advantage')[0].offsetTop;
                if (elementPosition < topOfWindow+500) {
                    $('.school-advantage')[0].classList.add("fadeInUp");
                };
                for (let i = 0; i <$('.school-advantage').length; i++) {
                    setTimeout(() => {
                        $('.school-advantage')[i].classList.add("fadeInUp");
                    }, 250+250*i);
                    
                };
                if ($('.school-advantage')[$('.school-advantage').length-1].classList.contains('fadeInUp')) {
                    $('.secret-box')[0].classList.add("fadeInUp");
                };
                

                $('#lessons').each(function(){
                    var elemPosition = $(this).offset().top;
                    if (elemPosition < topOfWindow+500) {
                        $(this).addClass("fadeIn");
                    }
                });
                $('.lessons__left').each(function(){
                    var imagePos = $(this).offset().top;
                    if (imagePos < topOfWindow+500) {
                        $(this).addClass("fadeInLeft");
                    }
                });
                $('.lessons__right').each(function(){
                    var imagePos = $(this).offset().top;
                    if (imagePos < topOfWindow+550) {
                        $(this).addClass("fadeInRight");
                    }
                });
                $('.lessons__description span').each(function(){
                    var imagePos = $(this).offset().top;
                    if (imagePos < topOfWindow+350) {
                        $(this).addClass("highlighted");
                    }
                });


                $('.section__title').each(function(){
                    var imagePos = $(this).offset().top;
                    if (imagePos < topOfWindow+550) {
                        $(this).addClass("fadeInUp");
                    }
                });
                // courses
                if($('#products .section__title').hasClass('fadeInUp')){
                    setTimeout(() => {
                        for (let i=0; i<$('#products .course').length; i++){ 
                            const course = $('#products .course')[i];
                            let elementPosition = $('#products .course')[i].offsetTop;
                            if (elementPosition < topOfWindow+500+50*i) {
                                course.classList.add("fadeIn");
                            }
                        };
                    }, 500);
                };
                // courses
                // features
                    for (let i=0; i<$('.feature-wrapper').length; i++){ 
                        if ($('.feature-wrapper')[i].offsetTop < topOfWindow+500) {
                            $('.feature-wrapper')[i].classList.add("fadeInUp");
                        }
                    };
                // features    
                $('.list__item-1-left').each(function(){
                    var imagePos = $(this).offset().top;
                    if (imagePos < topOfWindow+500) {
                        $(this).addClass("fadeInLeft");
                    }
                });
                $('.list__item-1-right').each(function(){
                    var imagePos = $(this).offset().top;
                    if (imagePos < topOfWindow+500) {
                        $(this).addClass("fadeInRight");

                        setTimeout(function(){
                          $('.list__item-1-right').removeClass("animated");
                        }, 1000);
                    }
                });
                $('.list__item-2-right').each(function(){
                    var imagePos = $(this).offset().top;
                    if (imagePos < topOfWindow+500) {
                        $(this).addClass("fadeInRight");
                    }
                });
                $('.list__item-2-left').each(function(){
                    var imagePos = $(this).offset().top;
                    if (imagePos < topOfWindow+500) {
                        $(this).addClass("fadeInLeft");

                        setTimeout(function(){
                          $('.list__item-2-left').removeClass("animated");
                        }, 1000);
                    }
                });
                $('.list__item-3-left').each(function(){
                    var imagePos = $(this).offset().top;
                    if (imagePos < topOfWindow+500) {
                        $(this).addClass("fadeInLeft");
                    }
                });
                $('.list__item-3-right').each(function(){
                    var imagePos = $(this).offset().top;
                    if (imagePos < topOfWindow+500) {
                        $(this).addClass("fadeInRight");

                        setTimeout(function(){
                          $('.list__item-3-right').removeClass("animated");
                        }, 1000);
                    }
                });
                $('.list__item-4').each(function(){
                    var imagePos = $(this).offset().top;
                    if (imagePos < topOfWindow+500) {
                        $(this).addClass("fadeInUp");
                    }
                });
                $('.list__item-5-right').each(function(){
                    var imagePos = $(this).offset().top;
                    if (imagePos < topOfWindow+500) {
                        $(this).addClass("fadeInRight");
                    }
                });
                $('.list__item-5-left').each(function(){
                    var imagePos = $(this).offset().top;
                    if (imagePos < topOfWindow+500) {
                        $(this).addClass("fadeInLeft");

                        setTimeout(function(){
                          $('.list__item-5-left').removeClass("animated");
                        }, 1000);
                    }
                });
                $('.list__item-6').each(function(){
                    var imagePos = $(this).offset().top;
                    if (imagePos < topOfWindow+500) {
                        $(this).addClass("fadeInUp");
                    }
                });
                $('.buttons').each(function(){
                    var imagePos = $(this).offset().top;
                    if (imagePos < topOfWindow+750) {
                        $(this).addClass("fadeIn");
                    }
                });
                $('#reviews').each(function(){
                    var imagePos = $(this).offset().top;
                    if (imagePos < topOfWindow+600) {
                        $(this).addClass("fadeInUp");
                    }
                });
                $('.footer').each(function(){
                    var imagePos = $(this).offset().top;
                    if (imagePos < topOfWindow+1000) {
                        $(this).addClass("fadeIn");
                    }
                });





            } catch (error) {
                console.error(error);
            }
            
    	    
    	});
	};



});