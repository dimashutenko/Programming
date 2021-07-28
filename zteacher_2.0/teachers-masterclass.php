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
    <title>Masterclass for Teachers - Zteacher Language School</title>
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
                    Для Вчителів Від Засновниці Школи
                  </h2>
                  <p class="course-description">Вебінар для вчителів по Інтернет ресурсах «Уроки, які не забуваються»<br>250 гривень</p>
                  <p class="course-description">Розробки до 10 серій Young Sheldon <br> 300 гривень</p>
                  <p class="course-description">Розробки до 8 серій Dash and Lily <br> 300 гривень</p>
                  <p class="course-description">Закрита група у Facebook для обміну досвідом та обговорення актуальних тем.</p>
                  <?php include ('free-lesson.php'); ?>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="course-left course-left-teachers d-none d-md-flex">
                  
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