$('.tools-slider').slick({
    slidesToShow: 3,
    centerMode: true,
    infinite: true,
    variableWidth: true,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 1500,
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
        // autoplay: true,
        autoplaySpeed: 1500,
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
    prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
        '\t viewBox="0 0 384.97 384.97" style="enable-background:new 0 0 384.97 384.97;" xml:space="preserve">\n' +
        '<g>\n' +
        '\t<g id="Chevron_Down_Circle">\n' +
        '\t\t<path d="M192.485,0C86.185,0,0,86.173,0,192.485c0,106.3,86.185,192.485,192.485,192.485\n' +
        '\t\t\tc106.312,0,192.485-86.185,192.485-192.485C384.97,86.173,298.797,0,192.485,0z M192.485,360.909\n' +
        '\t\t\tc-92.874,0-168.424-75.55-168.424-168.424S99.611,24.061,192.485,24.061s168.797,75.55,168.797,168.424\n' +
        '\t\t\tS285.359,360.909,192.485,360.909z"/>\n' +
        '\t\t<path d="M268.276,149.092l-75.61,74.528l-75.61-74.54c-4.74-4.704-12.439-4.704-17.191,0c-4.74,4.704-4.74,12.319,0,17.011\n' +
        '\t\t\tl84.2,83.009c4.62,4.572,12.56,4.584,17.191,0l84.2-82.997c4.74-4.704,4.74-12.319,0-17.011\n' +
        '\t\t\tC280.715,144.4,273.028,144.4,268.276,149.092z"/>\n' +
        '\t</g>\n' +
        '</g>\n' +
        '\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
        '\t viewBox="0 0 384.97 384.97" style="enable-background:new 0 0 384.97 384.97;" xml:space="preserve">\n' +
        '<g>\n' +
        '\t<g id="Chevron_Down_Circle">\n' +
        '\t\t<path d="M192.485,0C86.185,0,0,86.173,0,192.485c0,106.3,86.185,192.485,192.485,192.485\n' +
        '\t\t\tc106.312,0,192.485-86.185,192.485-192.485C384.97,86.173,298.797,0,192.485,0z M192.485,360.909\n' +
        '\t\t\tc-92.874,0-168.424-75.55-168.424-168.424S99.611,24.061,192.485,24.061s168.797,75.55,168.797,168.424\n' +
        '\t\t\tS285.359,360.909,192.485,360.909z"/>\n' +
        '\t\t<path d="M268.276,149.092l-75.61,74.528l-75.61-74.54c-4.74-4.704-12.439-4.704-17.191,0c-4.74,4.704-4.74,12.319,0,17.011\n' +
        '\t\t\tl84.2,83.009c4.62,4.572,12.56,4.584,17.191,0l84.2-82.997c4.74-4.704,4.74-12.319,0-17.011\n' +
        '\t\t\tC280.715,144.4,273.028,144.4,268.276,149.092z"/>\n' +
        '\t</g>\n' +
        '</g>\n' +
        '\n' +
        '</svg>\n</button>',
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
    variableWidth: true,
    centerPadding: '0px',
    appendArrows: '.nav-slide',
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

$('.panel_heading .block_title').click(function () {
    $(this).toggleClass('in').next().slideToggle();
    $('.panel_heading .block_title').not(this).removeClass('in').next().slideUp();
});

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);


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