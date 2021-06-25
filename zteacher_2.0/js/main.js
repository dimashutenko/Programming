$(document).ready( function() {

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

    $('.school-advantage-speaking')[0].addEventListener("mouseenter", function( event ) {
        clear_opacity_effects( $('.approach__right')[0]);
        clear_opacity_effects( $('.approach__speaking')[0]);
        $('.approach__right')[0].classList.add('opacity-to-zero');  
        setTimeout( function(){
                hide($('.approach__right')[0]);
                show($('.approach__speaking')[0]);
                $('.approach__speaking')[0].classList.add('opacity-to-one');
        }, 500);
    }, false);

    $('.approach__speaking')[0].addEventListener("mouseleave", function( event ) {
        clear_opacity_effects( $('.approach__right')[0]);
        clear_opacity_effects( $('.approach__speaking')[0]);
        $('.approach__speaking')[0].classList.add('opacity-to-zero');  
        setTimeout( function(){
                hide($('.approach__speaking')[0]);
                show($('.approach__right')[0]);
                $('.approach__right')[0].classList.add('opacity-to-one');
            }, 500);
    }, false);
    // ----------------------------------------------------------------------------------
    $('.school-advantage-writing')[0].addEventListener("mouseenter", function( event ) { 
        clear_opacity_effects( $('.approach__right')[0]);
        clear_opacity_effects( $('.approach__writing')[0]);
        $('.approach__right')[0].classList.add('opacity-to-zero');  
        setTimeout( function(){ 
                hide($('.approach__right')[0]);
                show($('.approach__writing')[0]);
                $('.approach__writing')[0].classList.add('opacity-to-one');
        }, 500);
    }, false);

    $('.approach__writing')[0].addEventListener("mouseleave", function( event ) { 
        clear_opacity_effects( $('.approach__right')[0]);
        clear_opacity_effects( $('.approach__writing')[0]);
        $('.approach__writing')[0].classList.add('opacity-to-zero');  
        setTimeout( function(){ 
                hide($('.approach__writing')[0]);
                show($('.approach__right')[0]);
                $('.approach__right')[0].classList.add('opacity-to-one');
            }, 500);
    }, false);
    // ----------------------------------------------------------------------------------
    $('.school-advantage-interest')[0].addEventListener("mouseenter", function( event ) { 
        clear_opacity_effects( $('.approach__right')[0]);
        clear_opacity_effects( $('.approach__interest')[0]);
        $('.approach__right')[0].classList.add('opacity-to-zero');  
        setTimeout( function(){ 
                hide($('.approach__right')[0]);
                show($('.approach__interest')[0]);
                $('.approach__interest')[0].classList.add('opacity-to-one');
        }, 500);
    }, false);

    $('.approach__interest')[0].addEventListener("mouseleave", function( event ) { 
        clear_opacity_effects( $('.approach__right')[0]);
        clear_opacity_effects( $('.approach__interest')[0]);
        $('.approach__interest')[0].classList.add('opacity-to-zero');  
        setTimeout( function(){ 
                hide($('.approach__interest')[0]);
                show($('.approach__right')[0]);
                $('.approach__right')[0].classList.add('opacity-to-one');
            }, 500);
    }, false);


















   // zteacher 1.0


/* -------Animate On Scroll Library------- */
    AOS.init({
        duration: 1000,
    });
/* -------Animate On Scroll Library end------- */


    /* -------nav------- */
    $('.navbar')[0].classList.add("fadeIn");
    
    if (window.location.href.includes('index.php')){
        $('#home-page')[0].classList.add('active');
    } else {
        $('#home-page')[0].classList.remove('active');
    }

    if (window.location.href.includes('contacts.php')){
        $('#contacts-page')[0].classList.add('active');
    } else {
        $('#contacts-page')[0].classList.remove('active');
    }
        
    /* -------nav end------- */


/* -------videos gallery------- */
    $('.venobox').venobox({
        bgcolor: '#000',
        spinColor: '#000',
        spinner: 'three-bounce'
    });
/* -------videos gallery end------- */

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


   

    



    if($(window).width() < 960)
    {

        


    }else{ //more tham 960px
        
        

	


	};



});