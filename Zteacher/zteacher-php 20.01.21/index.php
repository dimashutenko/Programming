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
    <link rel="stylesheet" href="https://res.cloudinary.com/dxfq3iotg/raw/upload/v1569006288/BBBootstrap/choices.min.css?version=7.0.0">
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
    <link rel="stylesheet" href="https://res.cloudinary.com/dxfq3iotg/raw/upload/v1569006288/BBBootstrap/choices.min.css?version=7.0.0">
    <script src="https://res.cloudinary.com/dxfq3iotg/raw/upload/v1569006273/BBBootstrap/choices.min.js?version=7.0.0"></script>
    <body>

      <div class="modal fade" tabindex="-1" role="dialog" id="trial-lesson-modal">
        <div class="modal-dialog"> <!-- role="document" -->
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Запис на пробний урок</h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body modal-body-lg">
              <form role="form" class="needs-validation" novalidate method="POST" action="./php/mail.php" id="trial-lesson-form">
                    <input type="hidden" name="_token" value="">
                    <div class="form-group">
                        <!-- <label class="control-label">Ім'я</label> -->
                        <div>
                            <input type="text" class="form-control" id="form-input-user-name" name="user_name" placeholder="Ім'я *" required="true">
                            <div class="invalid-feedback">
                              Будь ласка, введіть ваше ім'я
                            </div>
                        </div>
                    </div>
                    <div class="w-100"> 
                      <select id="choices-multiple-remove-button" placeholder="Виберіть, що вас зацікавило" name="products-select[]" multiple>
                        <option value="Загальна англійська">Загальна англійська</option>
                        <option value="Розмовна англійська">Розмовна англійська</option>
                        <option value="Підготовка до іспитів">Підготовка до іспитів</option>
                        <option value="Онлайн марафон по серіалу Dash and Lily">Онлайн марафон по серіалу "Dash and Lily"</option>
                        <option value="Курс по серіалу Young Sheldon">Курс по серіалу "Young Sheldon"</option>
                        <option value="Вебінари від засновниці школи Nina Zelinska для вчителів">Вебінари від засновниці школи Nina Zelinska для вчителів</option>
                        <option value="Курс Подорожі з легкістю">Курс "Подорожі з легкістю"</option>
                        <option value="Курс по серіалу Dash and Lily">Курс по серіалу "Dash and Lily"</option>
                        <option value="Уроки для юних IT-шників">Уроки для юних IT-шників</option>
                        <option value="Гарячі дискусії">Гарячі дискусії</option>
                        <option value="Курс з математики та логіки для дітей">Курс з математики та логіки для дітей</option>
                    </select>

                    </div>
                    <!-- <div class="form-group">
                        <h5 class="mb-2">Що вас зацікавило?</h5>
                        <div class="courses-list">
                          <div class="row">
                            <div class="col-12 col-sm-6 col-lg-4">
                              <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="course_general_english">
                                <label for="course_general_english" class="form-check-label">Загальна англійська</label>
                              </div>
                            </div>
                            <div class="col-12 col-sm-6 col-lg-4">
                              <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="course_spoken_english">
                                <label for="course_spoken_english" class="form-check-label">Розмовна англійська</label>
                              </div>
                            </div>
                            <div class="col-12 col-sm-6 col-lg-4">
                              <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="course_exams_preparation">
                                <label for="course_exams_preparation" class="form-check-label">Підготовка до іспитів</label>
                              </div>
                            </div>
                            <div class="col-12 col-sm-6 col-lg-4">
                              <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="hot_discussions">
                                <label for="hot_discussions" class="form-check-label">Гарячі дискусії</label>
                              </div>
                            </div>
                            <div class="col-12 col-lg-6">
                              <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="course_young_it">
                                <label for="course_young_it" class="form-check-label">Уроки для юних IT-шників</label>
                              </div>
                            </div>
                            <div class="col-12 col-lg-6">
                              <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="marathon_dash_and_lily">
                                <label for="marathon_dash_and_lily" class="form-check-label">Онлайн марафон по серіалу "Dash and Lily"</label>
                              </div>
                            </div>
                            <div class="col-12 col-lg-6">
                              <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="course_young_sheldon">
                                <label for="course_young_sheldon" class="form-check-label">Курс по серіалу "Young Sheldon"</label>
                              </div>
                            </div>
                            <div class="col-12 col-lg-6">
                              <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="course_travel_with_ease">
                                <label for="course_travel_with_ease" class="form-check-label">Курс "Подорожі з легкістю"</label>
                              </div>
                            </div>
                            <div class="col-12 col-lg-6">
                              <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="course_dash_and_lily">
                                <label for="course_dash_and_lily" class="form-check-label">Курс по серіалу "Dash and Lily"</label>
                              </div>
                            </div>
                            <div class="col-12 col-lg-6">
                              <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="course_math_logics">
                                <label for="course_math_logics" class="form-check-label">Курс з математики та логіки для дітей</label>
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="vebinars_nina_zelinska">
                                <label for="vebinars_nina_zelinska" class="form-check-label">Вебінари від засновниці школи Nina Zelinska для вчителів</label>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div> -->
                    <h5 class="mb-2 mt-3">Як з вами зв'язатись? *</h5>
                    <div class="">
                      <div class="btn-group" data-toggle="buttons">
                        <label class="btn btn-outline-secondary mr-1">
                          <input type="radio" name="radio_options" class="radio_communication" id="radio_viber" onclick="display_user_choice(this.id)"> <span class="d-none d-md-inline">Viber</span><i class="d-inline d-md-none fab fa-viber"></i>
                        </label>
                        <label class="btn btn-outline-secondary mr-1">
                          <input type="radio" name="radio_options" class="radio_communication" id="radio_telegram" onclick="display_user_choice(this.id)"> <span class="d-none d-md-inline">Telegram</span><i class="d-inline d-md-none fab fa-telegram-plane"></i>
                        </label>
                        <label class="btn btn-outline-secondary mr-1">
                          <input type="radio" name="radio_options" class="radio_communication" id="radio_whatsapp" onclick="display_user_choice(this.id)"> <span class="d-none d-md-inline">WhatsApp</span> <i class="d-inline d-md-none fab fa-whatsapp"></i>
                        </label>
                        <label class="btn btn-outline-secondary mr-1">
                          <input type="radio" name="radio_options" class="radio_communication" id="radio_phone" onclick="display_user_choice(this.id)"> 
                          <i class="fas fa-phone"></i></button>
                        </label>
                        <label class="btn btn-outline-secondary">
                          <input type="radio" name="radio_options" class="radio_communication" id="radio_email" onclick="display_user_choice(this.id)"> 
                          <i class="fas fa-envelope"></i>
                        </label>
                      </div>
                      <div class="invalid-feedback" id="communication-method-not-chosen">
                        Будь ласка, виберіть спосіб зв'язку
                      </div>
                    </div>

                    <!-- <div>
                      <div class="form-check form-check-inline">
                        <div class="form-row">
                          <div class="col">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="radio_viber" value="radio_viber" required onchange="display_user_choice(this.id)">
                            <label class="form-check-label" for="radio_viber">Viber</label>
                          </div>
                          <div class="col">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="radio_telegram" value="radio_telegram" onchange="display_user_choice(this.id)">
                            <label class="form-check-label" for="radio_telegram">Telegram</label>
                          </div>
                          <div class="col">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="radio_whatsapp" value="radio_whatsapp" onchange="display_user_choice(this.id)">
                            <label class="form-check-label" for="radio_whatsapp">WhatsApp</label>
                          </div>
                          <div class="col">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="radio_phone" value="radio_phone" onchange="display_user_choice(this.id)">
                        <label class="form-check-label" for="radio_phone">Телефон</label>
                          </div>
                          <div class="col">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="radio_email" value="radio_email" onchange="display_user_choice(this.id)">
                        <label class="form-check-label" for="radio_email">email</label>
                          </div>
                        </div>
                      </div>
                    </div> -->

                    <!-- <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                      <div class="btn-group mr-2" role="group" aria-label="First group">
                        <button type="button" class="btn btn-outline-secondary" onclick="display_user_choice(this.id)">
                          <i class="fab fa-viber"></i>
                        </button>
                      </div>
                      <div class="btn-group mr-2" role="group" aria-label="First group">
                        <button type="button" class="btn btn-outline-secondary" onclick="display_user_choice(this.id)"><i class="fab fa-telegram-plane"></i></button>
                      </div>
                      <div class="btn-group mr-2" role="group" aria-label="First group">
                        <button type="button" class="btn btn-outline-secondary" onclick="display_user_choice(this.id)"><i class="fab fa-whatsapp"></i></button>
                      </div>
                      <div class="btn-group mr-2" role="group" aria-label="Second group">
                        <button type="button" class="btn btn-outline-secondary" onclick="display_user_choice(this.id)"><i class="fas fa-phone"></i></button>
                      </div>
                      <div class="btn-group" role="group" aria-label="Third group">
                        <button type="button" class="btn btn-outline-secondary" onclick="display_user_choice(this.id)"><i class="fas fa-envelope"></i></button>
                      </div>
                        <div class="form-row">
                          <div class="invalid-feedback">
                            Будь ласка, виберіть спосіб зв'язку
                          </div>
                        </div>
                    </div> -->
                    <div class="form-group mt-2">
                      <input type="text" class="form-control input-for-user-contact d-none" id="user_telegram" name="user_telegram" placeholder="Ваш номер телефону або акаунт в Telegram *">
                      <input type="text" class="form-control input-for-user-contact d-none" id="user_viber" name="user_viber" placeholder="Ваш номер телефону або акаунт у Viber *">
                      <input type="text" class="form-control input-for-user-contact d-none" id="user_whatsapp" name="user_whatsapp" placeholder="Ваш номер телефону або акаунт в WhatsApp *">
                      <input type="phone" class="form-control input-for-user-contact d-none" id="user_phone" name="user_phone" placeholder="Ваш номер телефону *">
                      <input type="email" class="form-control input-for-user-contact d-none" id="user_email" name="user_email" placeholder="Ваш email *">
                      <div class="invalid-feedback"> Введіть контактні дані, будь ласка </div>
                    </div>
                    <!-- <div class="checkbox mt-2">
                      <input type="checkbox" class="input" id="customCheck1" value="Yes" name="user_write">
                      <label class="label" for="customCheck1">Краще написати ніж подзвонити</label>
                    </div> -->
                    <div class="checkbox mt-1">
                      <input type="checkbox" class="input" id="user_agreement" checked="true" required="true" name="user_write">
                      <label class="label mb-0" for="user_agreement">Згода на обробку персональних даних *</label>
                      <div class="invalid-feedback"> Ви маєте поговдитись, щоб ми обробили вашу заявку </div>
                    </div>
                    <div class="form-group mt-4">
                        <div>
                            <button type="submit" class="btn btn-primary">Надіслати</button>
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
        <h2 class="hard-to-see" id="here">#Zteacher rocks</h2>
      </header>
      <!-- <section class="d-flex justify-content-center"> 
        <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#trial-lesson-modal">
          Launch modal
        </button>
      </section> -->


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