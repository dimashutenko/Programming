jQuery(document).ready(function ($) {
    setInterval(function () {
        moveRight();
    }, 6000);
  
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








    var elem_1=document.getElementById("my_input");
    elem_1.setAttribute('value','hi!');
    document.getElementById("input_2").value='ho!';
    
    elem_1.addEventListener('click', function(){
        elem_1.value='clicked';
    });
    
    function random_function(){
        elem_1.setAttribute('value','click me');
    }
    
    cool_function = () => {
        elem_1.setAttribute('value',elem_1.value+', please');
    }
    
    window.setTimeout(random_function, 2000);
    
    window.setTimeout(function() {
        console.log(0);
        cool_function();
    }, 5000);

});    

