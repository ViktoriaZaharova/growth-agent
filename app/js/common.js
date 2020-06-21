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