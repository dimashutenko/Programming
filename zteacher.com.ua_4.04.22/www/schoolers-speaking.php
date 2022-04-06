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
    <title>Speaking - Zteacher Language School</title>
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
                    Speaking для школярів
                  </h2>
                  <div class="mobile-course-img course-left-schoolers-speaking"></div>
                  <p class="course-description">Наші неймовірно цікаві, динамічні недільні спікінг-зустрічі.</p>
                  <p class="course-description" style="padding-left: 1rem";><i class="far fa-circle" style="padding-right: 0.5rem"></i> початок зустрічі щонеділі о 10:30</p>
                  <p class="course-description" style="padding-left: 1rem";><i class="far fa-circle" style="padding-right: 0.5rem"></i> тривалість - 1.5 години</p>
                  <p class="course-description" style="padding-left: 1rem";><i class="far fa-circle" style="padding-right: 0.5rem"></i> рівень - нижче середнього та середній</p>
                  <p class="course-description" style="padding-left: 1rem";><i class="far fa-circle" style="padding-right: 0.5rem"></i> вартість - 50 гривень</p>
                  <p class="course-description d-flex mt-3">Найактуальніші теми!</p>
                  <p class="course-description">Цікаві ігри!</p>
                  <p class="course-description">Тепле спілкування!</p>
                  <p class="course-description">Добрі, відкриті, щирі викладачі!</p>
                  <p class="course-description d-flex mt-3">Запрошуємо долучатися!</p>
                  
                  <?php 
                    include ('free-lesson.php');
                    include ('to-courses-btn.php');
                  ?>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="course-left course-left-schoolers-speaking d-none d-md-flex">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>


      <?php         

        include ('footer.php');
      ?>


      
    </body>
  </head>
</html>