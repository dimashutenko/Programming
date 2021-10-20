<!DOCTYPE html>
<html lang="ua">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,300i,400,400i,500,500i,700,700i&amp;display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@0,300;0,700;1,300&amp;display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&amp;display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/80a7e9f90a.js"></script>
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="node_modules/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="node_modules/bootstrap-social/bootstrap-social.css">
    <link rel="stylesheet" href="css/fonts.css">
    <!-- <link rel="stylesheet" href="css/aos.css"> -->
    <link rel="stylesheet" href="css/aos.css">
    <link rel="stylesheet" href="https://res.cloudinary.com/dxfq3iotg/raw/upload/v1569006288/BBBootstrap/choices.min.css?version=7.0.0">
    <link rel="stylesheet" href="css/venobox.css" type="text/css" media="screen">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/media.css">
    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
    <!-- Facebook Pixel Code-->
    <script>
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1559678327532298');
      fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1559678327532298&amp;ev=PageView&amp;noscript=1"></noscript>
    <!-- End Facebook Pixel Code-->
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
        include ('trial_lesson_modal.php');
      ?>

      
      <header class="header" id="header" data-aos="fade-in">
        <?php 
          include ('navigation.php');
        ?>
        <!-- <video id="bgvid" playsinline="" autoplay="" muted="" loop="" poster="img/static-bridge.jpg">
          <source src="img/video-bridge.mp4" type="video/mp4">
          <source src="img/bridge.webm" type="video/webm">
        </video> -->
        <div class="header-wrapper d-flex h-100">
          <div class="container">
            <div class="offer d-flex justify-content-end align-items-center animated fadeInUp"></div>
          </div>
        </div>
        <h2 class="hard-to-see" id="here">#Zteacher rocks</h2>
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