<!DOCTYPE html>
<html lang="ua">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="node_modules/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="node_modules/bootstrap-social/bootstrap-social.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/fonts.css">
    <link rel="stylesheet" href="css/aos.css">
    <link rel="stylesheet" href="https://res.cloudinary.com/dxfq3iotg/raw/upload/v1569006288/BBBootstrap/choices.min.css?version=7.0.0">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css" media="screen"> <!-- gallery -->
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
    <title>Dash&Lily course - Zteacher Language School</title>
    <body>

      <?php 
        include ('trial_lesson_modal.php'); // запись на пробный modal
      ?>

      
      <header class="header" id="header" data-aos="fade-in">
        <?php 
          include ('navigation.php');
        ?>
        <div class="header-wrapper d-flex">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6">
                <div class="course-right d-flex">
                  <h2 class="course-page-title">
                    Курс За Серіалом Dash & Lily
                  </h2>
                  <p class="course-description">
                    Dash & Lily - романтичний, комедійний, телевізійний серіал.
                  </p>
                  <p class="course-description">
                    Нью Йорк, Різдво, закоханості, вечірки, розчарування, розставання, гумор. Це просто mind blowing. 
                  </p>
                  <p class="course-description">
                    Розроблені уроки до кожної з 8 серій.
                  </p>
                  <p class="course-description">
                    Включені: <br>
                    Вправи до перегляду серії, та після перегляду. <br>
                    Вправи на відпрацювання лексики, та письма.<br>
                    Переклад нових слів.<br>
                    Ключі до всіх вправ.<br>
                  </p>
                  <p class="course-description">
                    Разом з вчителем ви пройдете курс, збагачуючи свій запас лексики врази, відпрацьовуючи граматику, прекрасно проводячи час.
                  </p>
                  <p class="course-description">
                    До курсу входить десять уроків - 1год. <br>
                    Вартість - 2400гривень/8 занять.<br>
                    Є можливість проходити в парі або в групі, ціна, в такому випадку, буде узгоджуватися
                  </p>
                  <p class="free-lesson">
                    Безкоштовный урок
                  </p>
                  <a href="#" class="btn-register">
                    Записатися
                  </a>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="course-left course-left-dash-lily d-none d-md-flex">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>


      <?php 
        include ('approach.php');
        include ('courses.php');
        

        include ('footer.php');
      ?>


      
    </body>
  </head>
</html>