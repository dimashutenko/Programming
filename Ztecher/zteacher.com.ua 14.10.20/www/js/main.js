function menu_opener_click(){
    document.querySelectorAll('.menu_opener')[0].classList.toggle('menu-clicked');
    document.querySelectorAll('.menu-extended')[0].classList.toggle('block');
	document.querySelectorAll('.hidden-menu')[0].classList.toggle('block');
    if(document.querySelectorAll('.menu-extended')[0].classList.contains("block")){
        document.querySelectorAll('.menu-extended')[0].classList.add('fadeInDown');
		if( $.contains( document.body, $(".offer")[0]) ){
        	$(".offer").css("opacity","0");
			window.setTimeout(document.querySelectorAll('.offer')[0].classList.remove('d-flex'), 500);
			$(".offer").css("display","none");
		}
    }else{
        document.querySelectorAll('.menu-extended')[0].classList.remove('fadeInDown');
		if($.contains( document.body, $(".offer")[0])){
			document.querySelectorAll('.offer')[0].classList.add('d-flex');
			$(".offer").css("opacity","1");
		}
    }
	if($.contains( document.body, $(".offer")[0])){
    	document.querySelectorAll('.offer')[0].classList.toggle('fadeInUp');
	}
}

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
if(window.innerHeight < 470){
	$('.gradient').css('display', 'none');
}else{
	$('.gradient').css('display', 'flex');
}

$(document).ready( function() {

	/* -------slider------- */

    // setInterval(function () {
    //     moveRight();
    // }, 10000);

    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#slider').css({ width: slideWidth, height: slideHeight });

    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('.control_prev').click(function () {
        moveLeft();
    });

    $('.control_next').click(function () {
        moveRight();
    });
    /* -------slider------- */

    if($(window).width() < 960)
    {
		$(window).scroll(function() {
    	    $('.go-section__left').each(function(){
    	        var imagePos = $(this).offset().top;

    	        var topOfWindow = $(window).scrollTop();
    	        if (imagePos < topOfWindow+650) {
    	            $(this).addClass("fadeInLeft");
    	        }
    	    });
    	});
    	$(window).scroll(function() {
    	    $('.go-section__right').each(function(){
    	        var imagePos = $(this).offset().top;

    	        var topOfWindow = $(window).scrollTop();
    	        if (imagePos < topOfWindow+700) {
    	            $(this).addClass("fadeInRight");
    	        }
    	    });
    	});
    	$(window).scroll(function() {
    	    $('.go-section__description span').each(function(){
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

		const menu__items = $('.menu__item');
        menu__items[0].addEventListener("mouseleave", function() {
            menu__items[0].style.animation='myframes10 0.25s ease-in-out 0s forwards';
        });
        menu__items[0].addEventListener("mouseover", function() {
            menu__items[0].style.animation='myframes1 0.25s ease-in-out 0s forwards';
        });
        menu__items[1].addEventListener("mouseleave", function() {
            menu__items[1].style.animation='myframes10 0.25s ease-in-out 0s forwards';
        });
        menu__items[1].addEventListener("mouseover", function() {
            menu__items[1].style.animation='myframes1 0.25s ease-in-out 0s forwards';
        });
        menu__items[2].addEventListener("mouseleave", function() {
            menu__items[2].style.animation='myframes10 0.25s ease-in-out 0s forwards';
        });
        menu__items[2].addEventListener("mouseover", function() {
            menu__items[2].style.animation='myframes1 0.25s ease-in-out 0s forwards';
        });
        menu__items[3].addEventListener("mouseleave", function() {
            menu__items[3].style.animation='myframes10 0.25s ease-in-out 0s forwards';
        });
        menu__items[3].addEventListener("mouseover", function() {
            menu__items[3].style.animation='myframes1 0.25s ease-in-out 0s forwards';
        });

		$(window).scroll(function() {
    	    $('.go-section__left').each(function(){
    	        var imagePos = $(this).offset().top;

    	        var topOfWindow = $(window).scrollTop();
    	        if (imagePos < topOfWindow+500) {
    	            $(this).addClass("fadeInLeft");
    	        }
    	    });
    	});
    	$(window).scroll(function() {
    	    $('.go-section__right').each(function(){
    	        var imagePos = $(this).offset().top;

    	        var topOfWindow = $(window).scrollTop();
    	        if (imagePos < topOfWindow+550) {
    	            $(this).addClass("fadeInRight");
    	        }
    	    });
    	});
    	$(window).scroll(function() {
    	    $('.go-section__description span').each(function(){
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