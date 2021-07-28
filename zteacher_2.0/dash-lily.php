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
    <title>Dash&Lily course - Zteacher Language School</title>
    <body>

      <?php include ('trial_lesson_modal.php'); // запись на пробный modal ?>

      <?php include ('navigation.php'); ?>
      <header class="header" id="header" data-aos="fade-in">
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
                  <?php include ('free-lesson.php'); ?>
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