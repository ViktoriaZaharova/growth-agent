$('.panel_heading .block_title').click(function () {
    $(this).toggleClass('in').next().slideToggle();
    $('.panel_heading .block_title').not(this).removeClass('in').next().slideUp();
});

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

var scene2 = document.getElementById('scene2');
var parallaxInstance = new Parallax(scene2);

var scene3 = document.getElementById('scene3');
var parallaxInstance = new Parallax(scene3);

var scene4 = document.getElementById('scene4');
var parallaxInstance = new Parallax(scene4);

var scene5 = document.getElementById('scene5');
var parallaxInstance = new Parallax(scene5);

var scene6 = document.getElementById('scene6');
var parallaxInstance = new Parallax(scene6);


$("form").submit(function () {
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
    }).done(function () {
        $(this).find("input").val("");
        alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
        $("form").trigger("reset");
    });
    return false;
});

$('.btn-burger__close, .overlay').click(function () {
   $('.mobile-menu').fadeOut();
    $('.overlay').fadeOut();
});

$('.btn-burger__open').click(function () {
    $('.overlay').fadeIn();
    $('.mobile-menu').fadeIn();
});

$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});

$('[name="phone"]').mask("+7 (999) 999-9999");

$('.go_to').click(function () {
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
        $('html, body').animate({
            scrollTop: $(scroll_el).offset().top
        }, 500);
    }
    $('.mobile-menu').fadeOut();
    $('.overlay').fadeOut();

    return false;

});

// модальные окна (несколько)
$(document).ready(function () {
    var overlay = $('.overlay2');
    var open_modal = $('.open_modal');
    var close = $('.modal__close, .overlay2');
    var modal = $('.modal__div');

    open_modal.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end

new WOW().init();