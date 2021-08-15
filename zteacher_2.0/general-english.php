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
    <title>General English - Zteacher Language School</title>
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
                    Загальна Англійська
                  </h2>
                  <div class="mobile-course-img course-left-general"></div>
                  <p class="course-description">
                    Кожен урок готується окремо, індивідуально для кожного студента, групи. Виходячи з його/їх інтересів. Бажання займатися з`явиться, якщо матеріал цікавий. Тому ми наполегливо готуємось до кожного уроку, заради наших студентів.
                  </p>
                  <p class="course-description">
                    Занурення в мову - запорука вільного володіння. Ми вважаємо, що максимальне занурення студента в мову -  найголовніше у вивченні. Вчитель, як путівник знайомить учня з найцікавішими ресурсами, адаптованими та оригінальними, щоб спонукати студента, не полишати поле англійської навіть, коли урок закінчився.
                  </p>
                  <p class="course-description">
                    Мовлення - перше! Граматика - друге! <br> Ми розуміємо, що спочатку з’явилася мова, а лише потім граматика. Тому ми не вивчаємо мову через граматику, а знайомимось з граматикою, вже розмовляючи. Тією граматикою, якою користуються носії, яку ми чуємо в фільмах та відео, на вулицях та вечірках, ділових зустрічах та курортах , а не тією, яка сухо, «бездушно» структурована в підручниках.
                  </p>
                  <p class="course-description">
                    Школярі - 250 гривень/година
                    <br>
                    Дорослі - 300 гривень/година
                  </p>
                  <?php 
                    include ('free-lesson.php');
                    include ('to-courses-btn.php');
                  ?>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="course-left course-left-general d-none d-md-flex">
                  
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