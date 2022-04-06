<footer class="footer bg-dark" id="footer" data-aos="fade-in" data-aos-offset="100">
  <div class="container">
    <div class="row">
      <div class="col-lg-5 footer-logo d-flex align-items-center">
        <img class="w-50 d-flex" src="img/theteacher.png" alt="Zteacher logo">
      </div>
      <div class="col-lg-7 col-xl-7 d-flex align-items-center justify-content-center">
        <ul class="footer-navigation">
          <li class="footer-navigation-link"><a href="./index.php#approach"><span>Підхід</span></a></li>
          <li class="footer-navigation-link"><a href="./index.php#courses"><span>Курси</span></a></li>
          <li class="footer-navigation-link"><a href="./index.php#testimonials"><span>Відгуки</span></a></li>
          <li class="footer-navigation-link"><a href="./contacts.php"><span>Контакти</span></a></li>
          <li class="footer-navigation-link"><a data-bs-toggle="modal" data-bs-target="#trial-lesson-modal"><span>Безкоштовний урок</span></a></li>
          <li class="footer-navigation-link"><a href="docs/document.docx"><span>Договір оферти</span></a></li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col mt-5 mb-5">
        <?php include ('socials.php'); ?>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-7">
        <div class="black-slogan-total">
          <span class="black-slogan">Get Your password to the world,</span>
          <span class="black-slogan"> Study English with us!</span>
        </div>
      </div>
      <div class="offset-lg-1 col-lg-4 credits">
        <p class="ml-auto">&copy; TheTeacher Language School <?php echo date("Y"); ?></p>
        <p class="developer">Web-design: 
          <a class="developer__link d-flex" href="https://www.facebook.com/yulia.kharchenko.18/" target="_blank">Yuliya Kharchenko</a>
        </p>
        <p class="developer">Розробка: 
          <a class="developer__link d-flex" href="https://www.linkedin.com/in/dima-shutenko/" target="_blank">Dima Shutenko<i class="fab fa-linkedin"></i></a>
        </p>
      </div>
    </div>
  </div>
  <script src="js/jQuery_v3.5.1.js"></script>
  <script src="js/bootstrap.bundle.min.js"></script> <!-- popper.js + Bootstrap 5 -->
  <script src="https://res.cloudinary.com/dxfq3iotg/raw/upload/v1569006273/BBBootstrap/choices.min.js?version=7.0.0"></script>
  <script src="js/venobox.min.js" type="text/javascript"></script><!-- videos gallery -->
  <script src="//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js"></script><!-- courses gallery -->
  <script src="js/aos.js"></script>
  <script type="module">

    import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js';
    import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-database.js"
    import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-auth.js';

    const firebaseConfig = {
      apiKey: "AIzaSyDgqUVOQj5bkjMz26Mpc4nbEOtHcLO7RS8",
    authDomain: "zteacher-free-lesson-form.firebaseapp.com",
    projectId: "zteacher-free-lesson-form",
    storageBucket: "zteacher-free-lesson-form.appspot.com",
    messagingSenderId: "1001610082838",
    appId: "1:1001610082838:web:70456b118492017dbe1337"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Reference messages collection

    var now = new Date();
    // var date_and_time_now = now.getDate()+'-'+(now.getMonth()+1)+'-'+now.getFullYear() + "  " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    var date_and_time_now = now.toUTCString()

    // Save message to firebase
    function saveMessage(name, phone, messanger, courses){
      const db = getDatabase();
      set(ref(db, 'заявки/' + date_and_time_now), {
        "1 Ім'я": name,
        "2 Телефон":phone,
        "3 Месенджер":messanger,
        "4 Курси":courses
      });
    }


    /* ----------------------------modal-------------------------------------------*/
    const number_of_courses = $('#products .course').length;
    var multipleCancelButton = new Choices('#choices-multiple-remove-button', {
     removeItemButton: true,
     maxItemCount: number_of_courses,
     searchResultLimit: number_of_courses,
     renderChoiceLimit: number_of_courses
    }); 

   
    
    (function() { 
      'use strict';
      window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) { 
            if (form.checkValidity() === false ) { 
              event.preventDefault();
              event.stopPropagation(); // stops submission ?
              console.log('validation prevented');
              form.classList.add('was-validated');
            } else{
                event.preventDefault();
                
                // Submit form -- https://www.youtube.com/watch?v=PP4Tr0l08NE
                
                var name = document.getElementById('form-input-user-name').value;
                var phone = document.getElementById('form-input-user-phone').value;
                if (document.querySelector('input[name="form-check-input-messanger"]:checked') == null){
                  var messanger = "не обрано"
                } else{
                  var messanger = document.querySelector('input[name="form-check-input-messanger"]:checked').value;
                }
                var courses = '';
                $('#choices-multiple-remove-button option').each(function(){
                    courses= courses+$(this).val()+" | ";
                });
                courses=courses.substr(0, courses.length-3);                
              
                saveMessage(name, phone, messanger, courses);

                // Clear form
                form.reset();
                
                form.classList.remove('was-validated');
                $('#trial-lesson-modal').modal('toggle');

                // Show success
                $('#trial-lesson-modal-success').modal('toggle');
                
            };
            
          }, false);
        });
      }, false);
    })();


/* ----------------------------modal end-------------------------------------------*/




  </script>
  <script src="js/main.js"></script>
</footer>