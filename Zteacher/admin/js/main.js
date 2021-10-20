$(document).ready( function() {


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

        


    }else{ //more tham 960px
        
        

	


	};



});