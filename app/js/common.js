$('.tools-slider').slick({
    slidesToShow: 3,
    arrows: false,
    infinite: true,
    asNavFor: '.marketing-slider'
});


const slider = $(".marketing-slider");
slider
    .slick({
        slidesToShow: 4,
        centerMode: true,
        arrows: false,
        variableWidth: true,
        infinite: true,
        asNavFor: '.tools-slider'
    });

slider.on('wheel', (function(e) {
    e.preventDefault();

    if (e.originalEvent.deltaY < 0) {
        $(this).slick('slickNext');
    } else {
        $(this).slick('slickPrev');
    }
}));

$('.employees-slider').slick({
    slidesToShow: 2,
    infinite: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
});

$('.portfolio-image__slider').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    asNavFor: '.portfolio-slider',
});

$('.portfolio-slider').slick({
    slidesToShow: 1,
    asNavFor: '.portfolio-image__slider',
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.png" alt=""><span class="text">Назад</span></button>',
    nextArrow: '<button type="button" class="slick-next"><span class="text">Следующий кейс</span><img src="img/arrow-right.png" alt=""></button>',
    appendArrows: '.portfolio-nav'
});


$('.turnkey-marketing__slider').slick({
    slidesToShow: 7,
    centerMode: true,
    // infinite: true,
    centerPadding: '',
    appendArrows: '.nav-slide',
});

$(".turnkey-marketing__slider").on('afterChange', function(event, slick, currentSlide){
    $(".cp").text(currentSlide<10?`0${currentSlide+1}`:currentSlide+1);
});

