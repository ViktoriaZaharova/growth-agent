var scroller = {};
scroller.e = document.getElementById("scroll");

if (scroller.e.addEventListener) {
    scroller.e.addEventListener("mousewheel", MouseWheelHandler, false);
    scroller.e.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
} else scroller.e.attachEvent("onmousewheel", MouseWheelHandler);

function MouseWheelHandler(e) {
    // cross-browser wheel delta
    var e = window.event || e;
    var delta = -30 * Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));

    var pst = $("#scroll").scrollLeft() + delta;

    if (pst < 0) {
        pst = 0;
    } else if (pst > $(".box-wrap").width()) {
        pst = $(".box-wrap").width();
    }

    $("#scroll").scrollLeft(pst);

    return false;
}

$("#scroll").off("mousewheel").on("mousewheel", function(ev) {
    var el = $(ev.currentTarget);
    return ev.originalEvent.deltaY > 0
        ? el[0].scrollWidth - el.scrollLeft() <= el.innerWidth()
        : el.scrollLeft() === 0;
});


const slider = $(".marketing-slider");
slider
    .slick({
        slidesToShow: 4,
        centerMode: true,
        arrows: false,
        variableWidth: true,
        infinite: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


$('.employees-slider').slick({
    slidesToShow: 2,
    infinite: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            breakpoint: 1150,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
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
    infinite: true,
    centerPadding: '0px',
    appendArrows: '.nav-slide',
    variableWidth: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]

});

$(".turnkey-marketing__slider").on('afterChange', function (event, slick, currentSlide) {
    $(".cp").text(currentSlide < 10 ? `0${currentSlide + 1}` : currentSlide + 1);
});

