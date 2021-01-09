/*
$('a').on('click', function (e) {
  if (this.hash !== '') {
  	const hash = this.hash;
	if(hash=='#reviews'){
		e.preventDefault();
		$('html, body').animate({scrollTop: $(hash).offset().top},2200);
	}else if (hash=='#merits'){
		e.preventDefault();
    	$('html, body').animate({scrollTop: $(hash).offset().top},1000);
	}else if (hash=='#products'){
		e.preventDefault();
    	$('html, body').animate({scrollTop: $(hash).offset().top},500);
	}
  }
});
*/

$(document).ready( function() {

    var video_slider_interval = 6000;

	/* -------slider------- */
    
    $("#mycarousel").carousel( { interval: 20000 } );

    /* -------slider------- */

    /* -------menu------- */

    $('.nav-link').on( "click", function() {
        $('#navbarMenu').removeClass('show');
    });
    
    // $(window).scroll(function() {
    //     $('.navbar').each(function(){
    //         var position = $(this).offset().top;
    //         var topOfWindow = $(window).scrollTop();
    //         if (position < topOfWindow+1) {
    //             $(this).toggleClass("bg-dark");
    //         }
    //     });
    // });
    var myNav = $('.navbar');
    window.onscroll = function () { 
        "use strict";
        if (document.body.scrollTop >= 1 ) {
            myNav.addClass("bg-dark");
            myNav.removeClass("bg-dark-primary");
        } 
        else {
            myNav.addClass("bg-dark-primary");
            myNav.removeClass("bg-dark");
        }
    };

    /* -------menu------- */

    /* ----------videos--------*/

    $("#videoSlider").carousel( { interval: video_slider_interval } );
    $("#videoSlider").on('mouseover', function(){
        $("#videoSlider").carousel('pause')
    });
    // $("#videoSlider").on('mouseleave', function(){
    //     $("#videoSlider").carousel('cycle')
    // });


    if($(window).width() < 560){
        $("#videoSlider").on('hover', function(){
            $("#videoSlider").carousel('pause')
        });
    }

    // const htmlCollection = document.getElementsByTagName("video");
    // let videos = Array.from(htmlCollection);


    // $(".carousel-control-prev").on('click', function(){
    //     all_videos_pause();
        
    // });
    // $(".carousel-control-next").on('click', function(){
    //     all_videos_pause();
    // });


    // function all_videos_pause() {
    //     for(let i=0; i<videos.length; i++){
    //         videos[i].pause();
    //     }
    // }

    // setInterval(function(){
    //     for(let i=0; i<videos.length; i++){
    //         if (videos[i].currentTime > 0){
    //             $("#videoSlider").carousel('pause')
    //     };
    //     }
    // }, video_slider_interval-500);

    $(".carousel-control-prev").on('click', function(){
        all_youtube_videos_pause();
    });

    $(".carousel-control-next").on('click', function(){
        all_youtube_videos_pause();
    });

    function all_youtube_videos_pause() {
        player1.pauseVideo();
        player2.pauseVideo();
        player3.pauseVideo();
        player4.pauseVideo();
        player5.pauseVideo();
        player6.pauseVideo();
        player7.pauseVideo();
        //player8.pauseVideo();
    };
    /* ----------videos--------*/


    /* ----------secret box--------*/
    var message_to_show = $(".secret-message")[0];
    $(".school-advantage").on("mouseover", function (){
        if($("#digital-approach h4").is(':hover')){
            message_to_show.classList.remove('opacity-to-one');
            message_to_show.classList.add('opacity-to-zero');
            setTimeout(() => {
                message_to_show.innerHTML = "Сучасні студенти потребують сучасного підходу до навчання :)";
                message_to_show.classList.remove('opacity-to-zero');
                message_to_show.classList.add('opacity-to-one');
            }, 500);
            
            
        } 
        if($("#students_interests h4").is(':hover')){ 
            message_to_show.classList.remove('opacity-to-one');
            message_to_show.classList.add('opacity-to-zero');
            setTimeout(() => {
                message_to_show.innerHTML = `Бажання студентів знаходяться в центрі нашої уваги, ми flexible — тому і такі круті!`;
                message_to_show.classList.remove('opacity-to-zero');
                message_to_show.classList.add('opacity-to-one');
            }, 500);
            
        } 
        if($("#creative_teachers h4").is(':hover')){ 
            message_to_show.classList.remove('opacity-to-one');
            message_to_show.classList.add('opacity-to-zero');
            setTimeout(() => {
                message_to_show.innerHTML = `Навчаємо з завдоволенням, а не заставляємо "зубрити".`;
                message_to_show.classList.remove('opacity-to-zero');
                message_to_show.classList.add('opacity-to-one');
            }, 500);
            
        }
        if($("#horison_expansion h4").is(':hover')){ 
            message_to_show.classList.remove('opacity-to-one');
            message_to_show.classList.add('opacity-to-zero');
            setTimeout(() => {
                message_to_show.innerHTML = `Ми віримо, що нашою ціллю є дещо більше ніж вивчення миви.`;
                message_to_show.classList.remove('opacity-to-zero');
                message_to_show.classList.add('opacity-to-one');
            }, 500);
            
        }
        if($("#modern_trends h4").is(':hover')){ 
            message_to_show.classList.remove('opacity-to-one');
            message_to_show.classList.add('opacity-to-zero');
            setTimeout(() => {
                message_to_show.innerHTML = `Змінюється світ, разом з ним і мова. Ми проти академізму, використовуємо сленг та слідкуємо за сучасними трендами.`;
                message_to_show.classList.remove('opacity-to-zero');
                message_to_show.classList.add('opacity-to-one');
            }, 500);
            
        }
        
    });


    /* ----------secret box--------*/

    if($(window).width() < 960)
    {
        


		$(window).scroll(function() {
    	    $('.lessons__left').each(function(){
    	        var imagePos = $(this).offset().top;

    	        var topOfWindow = $(window).scrollTop();
    	        if (imagePos < topOfWindow+650) {
    	            $(this).addClass("fadeInLeft");
    	        }
    	    });
    	});
    	$(window).scroll(function() {
    	    $('.lessons__right').each(function(){
    	        var imagePos = $(this).offset().top;

    	        var topOfWindow = $(window).scrollTop();
    	        if (imagePos < topOfWindow+700) {
    	            $(this).addClass("fadeInRight");
    	        }
    	    });
    	});
    	$(window).scroll(function() {
    	    $('.lessons__description span').each(function(){
    	        var imagePos = $(this).offset().top;

    	        var topOfWindow = $(window).scrollTop();
    	        if (imagePos < topOfWindow+450) {
    	            $(this).addClass("highlighted");
    	        }
    	    });
    	});
    	$(window).scroll(function() {
    	    $('.section__title').each(function(){
    	        var imagePos = $(this).offset().top;
    	        var topOfWindow = $(window).scrollTop();
    	        if (imagePos < topOfWindow+700) {
    	            $(this).addClass("fadeInUp");
    	        }
    	    });
    	});
        $(window).scroll(function() {
            $('.product-0-bg-part').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+700) {
                    $(this).addClass("fadeInRight");
                }
            });
        });
        $(window).scroll(function() {
            $('.product-1-bg-part').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+700) {
                    $(this).addClass("fadeInRight");
                }
            });
        });
        $(window).scroll(function() {
            $('.product-2-bg-part').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+700) {
                    $(this).addClass("fadeInRight");
                }
            });
        });
        $(window).scroll(function() {
            $('.product-3-bg-part').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+700) {
                    $(this).addClass("fadeInRight");
                }
            });
        });
        $(window).scroll(function() {
            $('.product-4-bg-part').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+700) {
                    $(this).addClass("fadeInRight");
                }
            });
        });
        $(window).scroll(function() {
            $('.product-5-bg-part').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+700) {
                    $(this).addClass("fadeInRight");
                }
            });
        });
        $(window).scroll(function() {
            $('.product-6-bg-part').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+700) {
                    $(this).addClass("fadeInRight");
                }
            });
        });
        $(window).scroll(function() {
            $('.product-7-bg-part').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+700) {
                    $(this).addClass("fadeInRight");
                }
            });
        });
        $(window).scroll(function() {
            $('.product-8-bg-part').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+700) {
                    $(this).addClass("fadeInRight");
                }
            });
        });

        $(window).scroll(function() {
            $('.list__item-1-left').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+700) {
                    $(this).addClass("fadeInLeft");
                }
            });
        });
        $(window).scroll(function() {
            $('.list__item-1-right').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+700) {
                    $(this).addClass("fadeInRight");
                    $('.list__item-1-right').removeClass("animated");
                }
            });
        });
        $(window).scroll(function() {
            $('.list__item-2-left').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+700) {
                    $(this).addClass("fadeInLeft");

                    setTimeout(function(){
                      $('.list__item-2-left').removeClass("animated");
                    }, 1000);
                }
            });
        });
        $(window).scroll(function() {
            $('.list__item-2-right').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+700) {
                    $(this).addClass("fadeInRight");
                }
            });
        });
        $(window).scroll(function() {
            $('.list__item-3-left').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+700) {
                    $(this).addClass("fadeInLeft");
                }
            });
        });
        $(window).scroll(function() {
            $('.list__item-3-right').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+700) {
                    $(this).addClass("fadeInRight");

                    setTimeout(function(){
                      $('.list__item-3-right').removeClass("animated");
                    }, 1000);
                }
            });
        });
    	$(window).scroll(function() {
    	    $('.list__item-4').each(function(){
    	        var imagePos = $(this).offset().top;

    	        var topOfWindow = $(window).scrollTop();
    	        if (imagePos < topOfWindow+700) {
    	            $(this).addClass("fadeInUp");
    	        }
    	    });
    	});
        $(window).scroll(function() {
            $('.list__item-5-left').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+700) {
                    $(this).addClass("fadeInLeft");

                    setTimeout(function(){
                      $('.list__item-5-left').removeClass("animated");
                    }, 1000);
                }
            });
        });
        $(window).scroll(function() {
            $('.list__item-5-right').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+700) {
                    $(this).addClass("fadeInRight");
                }
            });
        });
    	$(window).scroll(function() {
    	    $('.list__item-6').each(function(){
    	        var imagePos = $(this).offset().top;

    	        var topOfWindow = $(window).scrollTop();
    	        if (imagePos < topOfWindow+700) {
    	            $(this).addClass("fadeInUp");
    	        }
    	    });
    	});
        $(window).scroll(function() {
            $('.buttons').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("fadeIn");
                }
            });
        });
		$(window).scroll(function() {
            $('#reviews').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+700) {
                    $(this).addClass("fadeInUp");
                }
            });
        });
    	$(window).scroll(function() {
    	    $('.footer').each(function(){
    	        var imagePos = $(this).offset().top;

    	        var topOfWindow = $(window).scrollTop();
    	        if (imagePos < topOfWindow+750) {
    	            $(this).addClass("fadeIn");
    	        }
    	    });
    	});

	}else{ //more tham 960px

		$(window).scroll(function() {
    	    $('.lessons__left').each(function(){
    	        var imagePos = $(this).offset().top;

    	        var topOfWindow = $(window).scrollTop();
    	        if (imagePos < topOfWindow+500) {
    	            $(this).addClass("fadeInLeft");
    	        }
    	    });
    	});
    	$(window).scroll(function() {
    	    $('.lessons__right').each(function(){
    	        var imagePos = $(this).offset().top;

    	        var topOfWindow = $(window).scrollTop();
    	        if (imagePos < topOfWindow+550) {
    	            $(this).addClass("fadeInRight");
    	        }
    	    });
    	});
    	$(window).scroll(function() {
    	    $('.lessons__description span').each(function(){
    	        var imagePos = $(this).offset().top;

    	        var topOfWindow = $(window).scrollTop();
    	        if (imagePos < topOfWindow+350) {
    	            $(this).addClass("highlighted");
    	        }
    	    });
    	});
    	$(window).scroll(function() {
    	    $('.section__title').each(function(){
    	        var imagePos = $(this).offset().top;

    	        var topOfWindow = $(window).scrollTop();
    	        if (imagePos < topOfWindow+550) {
    	            $(this).addClass("fadeInUp");
    	        }
    	    });
    	});
        $(window).scroll(function() {
            $('.product-0-bg-part').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+500) {
                    $(this).addClass("fadeInRight");
                }
            });
        });
        $(window).scroll(function() {
            $('.product-1-bg-part').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+500) {
                    $(this).addClass("fadeInRight");
                }
            });
        });
        $(window).scroll(function() {
            $('.product-2-bg-part').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+500) {
                    $(this).addClass("fadeInRight");
                }
            });
        });
        $(window).scroll(function() {
            $('.product-3-bg-part').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+500) {
                    $(this).addClass("fadeInRight");
                }
            });
        });
        $(window).scroll(function() {
            $('.product-4-bg-part').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+500) {
                    $(this).addClass("fadeInRight");
                }
            });
        });
        $(window).scroll(function() {
            $('.product-5-bg-part').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+500) {
                    $(this).addClass("fadeInRight");
                }
            });
        });
        $(window).scroll(function() {
            $('.product-6-bg-part').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+500) {
                    $(this).addClass("fadeInRight");
                }
            });
        });
        $(window).scroll(function() {
            $('.product-7-bg-part').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+500) {
                    $(this).addClass("fadeInRight");
                }
            });
        });
        $(window).scroll(function() {
            $('.product-8-bg-part').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+500) {
                    $(this).addClass("fadeInRight");
                }
            });
        });
    	$(window).scroll(function() {
    	    $('.list__item-1-left').each(function(){
    	        var imagePos = $(this).offset().top;

    	        var topOfWindow = $(window).scrollTop();
    	        if (imagePos < topOfWindow+500) {
    	            $(this).addClass("fadeInLeft");
    	        }
    	    });
    	});
        $(window).scroll(function() {
            $('.list__item-1-right').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+500) {
                    $(this).addClass("fadeInRight");

                    setTimeout(function(){
                      $('.list__item-1-right').removeClass("animated");
                    }, 1000);
                }
            });
        });
        $(window).scroll(function() {
            $('.list__item-2-right').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+500) {
                    $(this).addClass("fadeInRight");
                }
            });
        });
        $(window).scroll(function() {
            $('.list__item-2-left').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+500) {
                    $(this).addClass("fadeInLeft");

                    setTimeout(function(){
                      $('.list__item-2-left').removeClass("animated");
                    }, 1000);
                }
            });
        });
        $(window).scroll(function() {
            $('.list__item-3-left').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+500) {
                    $(this).addClass("fadeInLeft");
                }
            });
        });
        $(window).scroll(function() {
            $('.list__item-3-right').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+500) {
                    $(this).addClass("fadeInRight");

                    setTimeout(function(){
                      $('.list__item-3-right').removeClass("animated");
                    }, 1000);
                }
            });
        });
    	$(window).scroll(function() {
    	    $('.list__item-4').each(function(){
    	        var imagePos = $(this).offset().top;

    	        var topOfWindow = $(window).scrollTop();
    	        if (imagePos < topOfWindow+500) {
    	            $(this).addClass("fadeInUp");
    	        }
    	    });
    	});
        $(window).scroll(function() {
            $('.list__item-5-right').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+500) {
                    $(this).addClass("fadeInRight");
                }
            });
        });
        $(window).scroll(function() {
            $('.list__item-5-left').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+500) {
                    $(this).addClass("fadeInLeft");

                    setTimeout(function(){
                      $('.list__item-5-left').removeClass("animated");
                    }, 1000);
                }
            });
        });
    	$(window).scroll(function() {
    	    $('.list__item-6').each(function(){
    	        var imagePos = $(this).offset().top;

    	        var topOfWindow = $(window).scrollTop();
    	        if (imagePos < topOfWindow+500) {
    	            $(this).addClass("fadeInUp");
    	        }
    	    });
    	});
        $(window).scroll(function() {
            $('.buttons').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+500) {
                    $(this).addClass("fadeIn");
                }
            });
        });
		$(window).scroll(function() {
            $('#reviews').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+600) {
                    $(this).addClass("fadeInUp");
                }
            });
        });
    	$(window).scroll(function() {
    	    $('.footer').each(function(){
    	        var imagePos = $(this).offset().top;

    	        var topOfWindow = $(window).scrollTop();
    	        if (imagePos < topOfWindow+700) {
    	            $(this).addClass("fadeIn");
    	        }
    	    });
    	});
	}



})