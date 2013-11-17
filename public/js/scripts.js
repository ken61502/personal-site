jQuery(document).ready(function ($) {


    $(window).stellar();

    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');
    var menu_drop_max = '100%';
    var menu_drop_min = '15%';

    slide.waypoint(function (event, direction) {

        dataslide = $(this).attr('data-slide');

        if (direction === 'down') {
            $('.navigation li[data-slide="1"]').removeClass('active');
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        else {
            $('.navigation li[data-slide="' + (dataslide-1) + '"]').addClass('active').next().removeClass('active');
        }

    });
 
    if (mywindow.scrollTop() == 0) {
        $('.navigation li[data-slide="1"]').addClass('active');
        $('.navigation li[data-slide="2"]').removeClass('active');
    }
    mywindow.scroll(function () {
        //console.log(mywindow.scrollTop());
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
            $('.menu').addClass('drop-down').removeClass('roll-up');
            $('#ch-name').removeClass('small').addClass('large');
            $('#profile-img-1').addClass('img-none');
            $('#profile-img-2').removeClass('img-none');
            $('#arrow').removeClass('img-none');
            $('#name').addClass('grid_4').removeClass('grid_3');
        }
        else {//if (mywindow.scrollTop() > $('#slide2').position().top - 1) {
            $('.menu').addClass('roll-up').removeClass('drop-down');
            $('#ch-name').addClass('small').removeClass('large');
            $('#profile-img-2').addClass('img-none');
            $('#profile-img-1').removeClass('img-none');
            $('#arrow').addClass('img-none');
            $('#name').addClass('grid_3').removeClass('grid_4');
        }
       /* else if (mywindow.scrollTop() > 0) {
            $('.menu').addClass('drop-down').removeClass('roll-up');
            $('#ch-name').addClass('large').removeClass('small');
        }*/
    });

    function goToByScroll(dataslide) {
        //console.log(mywindow.scrollTop()+" "+ (Math.ceil($('.slide[data-slide="' + dataslide + '"]').offset().top) + 1 )+" "+dataslide);
        if (dataslide == 1) {
            htmlbody.animate({
                scrollTop: Math.ceil($('.slide[data-slide="' + dataslide + '"]').offset().top) 
            }, 1000, 'easeOutQuint');  
        }
        else {
            htmlbody.animate({
                scrollTop: Math.ceil($('.slide[data-slide="' + dataslide + '"]').offset().top) + 5 
            }, 1000, 'easeOutQuint');
        }
    }

    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });

    $('.menu').attr("style","transition-timing-function: ease-out;-moz-transition-timing-function: ease-out;-webkit-transition-timing-function: ease-out;-o-transition-timing-function: ease-out;transition-duration: .3s;-moz-transition-duration: .3s;-webkit-transition-duration: .3s;-o-transition-duration: .3s;");
    $('#arrow').attr("style","transition-timing-function: linear;-moz-transition-timing-function: ease-out;-webkit-transition-timing-function: linear;-o-transition-timing-function: ease-out;transition-duration: 50ms;-moz-transition-duration: 50ms;-webkit-transition-duration: 50ms;-o-transition-duration: 50ms;");    
});
