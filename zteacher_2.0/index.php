<!DOCTYPE html>
<html lang="ua">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <?php include ('head.php'); ?>
    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
    <meta name="description" content="Zteacher Language School"> <!-- Whats app description-->
    <meta name="keywords" content="zteacher, English, learning">
    <meta property="og:title" content="Get your password to the world. Study with us!">
    <meta property="og:description" content=""> <!-- bottom-->
    <meta property="og:type" content="article">
    <meta property="og:image" content="img/favicon.png">
    <meta property="og:site_name" content="Zteacher Language School">
    <title>Zteacher Language School</title>
    <body>
      <div class="modal" tabindex="-1" id="contact-modal" style="display: none;" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Зворотній зв'язок</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body">
              <form role="form" method="POST" action="./php/mail.php">
                    <input type="hidden" name="_token" value="">
                    <div class="form-group">
                        <label class="control-label">Ім'я</label>
                        <div>
                            <input type="text" class="form-control input-lg" name="user_name" placeholder="введіть ваше ім'я">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label">E-Mail адреса</label>
                        <div>
                            <input type="email" class="form-control input-lg" name="user_email" placeholder="введіть ваш email">
                        </div>
                    </div>
                    <div class="form-group">
                        <div>
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" name="remember"> Remember Me
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div>
                            <button type="submit" class="btn btn-success">Надіслати</button>
                        </div>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#contact-modal">
          Launch modal
        </button>
      <?php include ('trial_lesson_modal.php'); // запись на пробный modal ?>

      <?php include ('navigation.php'); ?>
      <header class="header" id="header" data-aos="fade-in">
        <div class="header-wrapper d-flex">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="offer-left d-flex">
                  <h1 class="offer__title">
                    English - твій пароль <span class="js-line-breaker"></span> до сучасного світу
                  </h1>
                  <?php include ('free-lesson.php'); ?>
                </div>
              </div>
              <div class="col-md-6 offer-right d-none d-md-flex"></div>
            </div>
          </div>
        </div>
      </header>


      <?php 
        include ('approach.php');
        include ('courses.php');
        include ('additional-courses.php');
        include ('lessons-videos.php');
        include ('testimonials.php');
        include ('footer.php');
      ?>


      
    </body>
  </head>
</html>