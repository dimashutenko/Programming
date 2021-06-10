<!DOCTYPE html>
<html lang="ua">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="node_modules/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="node_modules/bootstrap-social/bootstrap-social.css">
    <link rel="stylesheet" href="css/fonts.css">
    <link rel="stylesheet" href="css/aos.css">
    <link rel="stylesheet" href="https://res.cloudinary.com/dxfq3iotg/raw/upload/v1569006288/BBBootstrap/choices.min.css?version=7.0.0">
    <link rel="stylesheet" href="css/venobox.css" type="text/css" media="screen">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/media.css">
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

      <?php 
        include ('trial_lesson_modal.php'); // запись на пробный modal
      ?>

      
      <header class="header" id="header" data-aos="fade-in">
        <?php 
          include ('navigation.php');
        ?>
        <div class="header-wrapper d-flex h-100">
          <div class="container">
            <div class="offer d-flex justify-content-end align-items-center animated fadeInUp">
              
            </div>
          </div>
        </div>
      </header>


      <?php 
        include ('intro.php');

        include ('lessons.php');
        
        include ('products.php');

        include ('approach.php');

        include ('testimonials.php');

        include ('footer.php');
      ?>


      
    </body>
  </head>
</html>