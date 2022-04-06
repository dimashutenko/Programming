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
    <title>Exams - Zteacher Language School</title>
    <body>

      <?php include ('trial_lesson_modal.php'); // запись на пробный modal ?>

      <?php include ('navigation.php'); ?>
      <header class="header" id="header" data-aos="fade-in">
        <div class="header-wrapper d-flex">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6">
                <div class="course-right d-flex">
                  <h2 class="course-page-title">Підготовка До Іспитів</h2>
                  <div class="mobile-course-img course-left-exams"></div>
                  <p class="course-description">Наші студенти, які готуються до складання ЗНО та міжнародних іспитів досягають своєї мети.</p>
                  <p class="course-description">Ми ставимо за мету не лише найкращий результат при складанні, але й вільне володіння мовою після підготовки.</p>
                  <p class="course-description">Адже тренуватися проходити тести не є нашою ціллю при підготовці, а вивчення мови у всій багатогранності плюс тренування складання іспиту - наша мета.</p>
                  <?php 
                    include ('free-lesson.php');
                    include ('to-courses-btn.php');
                  ?>
                </div>
              </div>
              <div class="col-md-6">
                <div class="course-left course-left-exams d-none d-md-flex">
                  
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