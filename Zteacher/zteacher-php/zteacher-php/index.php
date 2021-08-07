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
    <link rel="stylesheet" href="css/animate.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/media.css">
    <link rel="shortcut icon" href="img/favicon.png" type="image/x-icon">
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

      <div class="modal" tabindex="-1" role="dialog" id="contact-modal">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Зворотній зв'язок</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
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

      <?php 
        include ('navigation.php');
      ?>

      
      <header class="header" id="header">
        <video id="bgvid" playsinline="" autoplay="" muted="" loop="" poster="img/static-bridge.jpg">
          <source src="img/video-bridge.mp4" type="video/mp4">
          <source src="img/bridge.webm" type="video/webm">
        </video>
        <div class="header-wrapper d-flex h-100">
          <div class="container">
            <div class="offer d-flex justify-content-end align-items-center animated fadeInUp"></div>
          </div>
        </div>
        <h2 class="hard-to-see">#Zteacher rocks</h2>
      </header>
      <section class="d-flex justify-content-center"> 
        <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#contact-modal">
          Launch modal
        </button>
      </section>


      <?php 
        include ('intro.php');
       ?>


      <section class="section animated" id="lessons">
        <div class="background-gradient-lessons">
          <div class="container d-flex justify-content-center">
            <div class="lessons__left flex animated">
              <div class="row">
                <div class="col">
                  <div class="content d-flex align-items-between">
                    <h2 class="lessons__title">Уроки в Zteacher</h2>
                    <p> <span class="d-none d-md-flex">Краще один раз побачити ніж тисячу разів почути. Згодні? </span><span>Запрошуємо подивитись в якій атмосфері проходять наші уроки. </span></p>
                  </div>
                </div>
              </div>
              <div class="row d-none d-lg-flex justify-content-center"><a class="lesson d-flex" href="https://forms.gle/Fng8uhescTHZJA5C8" target="_self">Хочу на пробний урок!</a></div>
            </div>
            <div class="lessons__right flex align-items-center animated">
              <div class="row">
                <div class="col">
                  <div class="carousel slide" id="videoSlider" data-ride="carousel" data-pause="hover">
                    <div class="carousel-inner" role="listbox">
                      <div class="carousel-item active">
                        <div id="player1"></div>
                        <!-- <iframe class="youtube-video" width="100%" height="100%" src="https://www.youtube.com/embed/EPrfAAcATpo?enablejsapi=1&version=3&playerapiid=ytplayer" modestbranding="0"  controls="0" frameborder="0" allow=" autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
                      </div>
                      <div class="carousel-item">
                        <div id="player2"></div>
                        <!-- <iframe class="youtube-video" width="100%" height="100%" src="https://www.youtube.com/embed/rBmwiuFCKDc?enablejsapi=1&version=3&playerapiid=ytplayer" modestbranding="0"  controls="0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
                      </div>
                      <div class="carousel-item">
                        <div id="player3"></div>
                        <!-- <iframe class="youtube-video" width="100%" height="100%" src="https://www.youtube.com/embed/Q1HJWz0ZPzA?enablejsapi=1&version=3&playerapiid=ytplayer" modestbranding="0"  controls="0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
                      </div>
                      <div class="carousel-item">
                        <div id="player4"></div>
                        <!-- <iframe class="youtube-video" width="100%" height="100%" src="https://www.youtube.com/embed/U8iV7-ryWTM?enablejsapi=1&version=3&playerapiid=ytplayer" modestbranding="0"  controls="0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
                      </div>
                      <div class="carousel-item">
                        <div id="player5"></div>
                        <!-- <iframe class="youtube-video" width="100%" height="100%" src="https://www.youtube.com/embed/jxHRecQDBU0?enablejsapi=1&version=3&playerapiid=ytplayer" modestbranding="0"  controls="0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
                      </div>
                      <div class="carousel-item">
                        <div id="player6"></div>
                        <!-- <iframe class="youtube-video" width="100%" height="100%" src="https://www.youtube.com/embed/VEAnSCka81c?enablejsapi=1&version=3&playerapiid=ytplayer" modestbranding="0"  controls="0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
                      </div>
                      <div class="carousel-item">
                        <div id="player7"></div>
                        <!-- <iframe class="youtube-video" width="100%" height="100%" src="https://www.youtube.com/embed/vFX2Ynnff38?enablejsapi=1&version=3&playerapiid=ytplayer" modestbranding="0"  controls="0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="videoSlider-controls"><a class="carousel-control-prev" href="#videoSlider" role="button" data-slide="prev"><i class="fas fa-angle-left"></i></a><a class="carousel-control-next" href="#videoSlider" role="button" data-slide="next"><i class="fas fa-angle-right"></i></a></div>
                </div>
              </div>
              <div class="row d-flex d-lg-none justify-content-center"><a class="lesson d-flex mt-4" href="https://forms.gle/Fng8uhescTHZJA5C8" target="_self">Хочу на пробний урок!</a></div>
            </div>
          </div>
        </div>
      </section>
      

      <?php 
        include ('products.php');
       ?>


       <?php 
        include ('approach.php');
       ?>

       <?php 
        include ('reviews.php');
       ?>

       <?php 
        include ('footer.php');
       ?>


      
    </body>
  </head>
</html>