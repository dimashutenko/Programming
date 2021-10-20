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
    <title>Babies English - Zteacher Language School</title>
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
                    Англійська Для Малюків
                  </h2>
                  <div class="mobile-course-img course-left-babies"></div>
                  <p class="course-description">
                    Наші найменші студенти 5-7 років працюють, як індивідуально, так і в групах (4-5 учнів).
                  </p>
                  <p class="course-description">
                    Використовуємо найсучасніші інструменти, щоб діти із задоволенням вивчали мову, не помічаючи, що вони вчаться.
                  </p>
                  <p class="course-description">
                    В ігровій форміпрацюємо над всіма чотирма навичками: мовлення, читання, аудіювання, письмо.
                  </p>
                  <p class="course-description">
                    Індивідуально - 250 гривень/година <br>
                    В групі 1200 гривень/місяць
                  </p>
                  <?php 
                    include ('free-lesson.php');
                    include ('to-courses-btn.php');
                  ?>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="course-left course-left-babies d-none d-md-flex">
                  
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