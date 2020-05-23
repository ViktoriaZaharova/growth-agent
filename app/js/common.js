// scroll horizontal
let scrollSpeed = 30;
let scroller = document.getElementById("scroll");

scroller.addEventListener("mousewheel", e=>{
    // block if e.deltaY==0
    if( !e.deltaY ) return;
    // Set scrollDirection (-1 = up // 1 = down)
    let scrollDirection = (e.deltaY > 0) ? 1 : -1;
    // convert vertical scroll into horizontal
    scroller.scrollLeft += scrollSpeed * scrollDirection;
    let scrollLeft = Math.round(scroller.scrollLeft);
    // calculate box total vertical scroll
    let maxScrollLeft = Math.round( scroller.scrollWidth - scroller.clientWidth );
    // if element scroll has not finished scrolling
    // prevent window to scroll
    if(
        (scrollDirection === -1  && scrollLeft > 0) ||
        (scrollDirection === 1 && scrollLeft < maxScrollLeft )
    ) e.preventDefault()
    // done!
    return true;
}, false);

// position block
var postion = $('.tools-slider').offset().top,
    height = $('.tools-slider').height();
$(document).on('scroll', function (){
    var scroll = $(document).scrollTop();
    if(scroll  > postion && scroll < (postion + height) ) {
        $('.tools-slider').addClass('maxHeight')
    }else {
        $('.tools-slider').removeClass('maxHeight')
    }
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

