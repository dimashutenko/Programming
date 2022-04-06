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
    <title>Марафон Dash&Lily - Zteacher Language School</title>
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
                    Онлайн марафон по серіалу "Dash and Lily"
                  </h2>
                  <div class="mobile-course-img course-left-travel"></div>
                  <p class="course-description">
                    Онлайн марафон з вивчення англійської мови за найсвіжішою різдвяною новинкою NETFLIX. Най-найсвіжіша прем’єра цього року, а у нас вже розроблений курс до неї 
                    <span class="emoji fire ml-1"></span>
                    <span class="emoji fire"></span>
                    <span class="emoji fire"></span>
                  </p>
                  <p class="course-description">
                    Dash &amp; Lily - романтичний, комедійний, телевізійний серіал.
                    Прем'єра із 8 серій на Netflix відбулася 10 листопада 2020 року.
                  </p>
                  <p class="course-description">
                    Нью Йорк, Різдво, закоханості, вечірки, розчарування, розставання, гумор
                  </p>
                  <p class="course-description">
                    Це просто mind blowing
                    <i class="fas fa-grin-hearts ml-1" aria-hidden="true"></i>
                  </p>
                  <p class="course-description">
                      Розпочинаємо 10.01.21, але доєднатися можна і пізніше.
                  </p>
                  <p class="course-description">
                    Проводьте перші дні нового року, не в підготовці до уроків, а насолоджуючись NETFLIX новинкою та різдвяними святами!
                  </p>
                  <?php 
                    include ('free-lesson.php');
                    include ('to-courses-btn.php');
                  ?>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="course-left course-left-dash-lily d-none d-md-flex"></div>
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