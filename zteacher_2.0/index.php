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

      <?php include ('trial_lesson_modal.php'); // запись на пробный modal ?>

      <?php include ('navigation.php'); ?>
      <header class="header header-index" id="header" data-aos="fade-in">
        <div class="header-wrapper d-flex index-page-header">
          <div class="container">
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