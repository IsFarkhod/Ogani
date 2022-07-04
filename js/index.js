$(document).ready(function () {
    var a = false;
    $("#btn").click(
        function () {
            if (a == false) {
                $(".icon-down").addClass("icon-down-second");
            }
            else {
                $(".icon-down").removeClass("icon-down-second");
            }
            a = !a;
        }
    );

    $("#bars-mobile, .bg-menu").click(function () {
        if (a == false) {
            $('.bg-menu').addClass("active-width1");
            $('.bg-menu').removeClass("active-width2");
            $('body').addClass('over-body-hidd');
            $('.mob-menu').addClass('display');
        }
        else {
            $('.bg-menu').removeClass("active-width1");
            $('.bg-menu').addClass("active-width2");
            $('body').removeClass('over-body-hidd');
            $('.mob-menu').removeClass('display')
        }
        a = !a;
    });




    var i = 0;
    $('#demo-plus').click(function () {
        ++i;
        document.getElementById('demo').innerHTML = i;
    });

    $('#demo-minus').click(function () {
        --i;
        document.getElementById('demo').innerHTML = i;
    });

    $('#demo-plus-second').click(function () {
        ++i;
        document.getElementById('demo-second').innerHTML = i;
    });

    $('#demo-minus-second').click(function () {
        --i;
        document.getElementById('demo-second').innerHTML = i;
    });

    $('#demo-plus-third').click(function () {
        ++i;
        document.getElementById('demo-third').innerHTML = i;
    });

    $('#demo-minus-third').click(function () {
        --i;
        document.getElementById('demo-third').innerHTML = i;
    });


    $('#mob-icon-down').click(function () {
        if (a == false) {
            $(".ul-block").removeClass('h-0')
            $(".ul-block").addClass('h-a');
        } else {
            $(".ul-block").removeClass('h-a');
            $(".ul-block").addClass('h-0');
        }
        a = !a;
    })

    $("#li").click(function () {
        $(".js1").addClass("mixit-border");
        $(".js2,.js5,.js4,.js3").removeClass("mixit-border");
    })

    $("#li1").click(function () {
        $(".js2").addClass("mixit-border");
        $(".js1,.js5,.js4,.js3").removeClass("mixit-border");
    })

    $("#li2").click(function () {
        $(".js3").addClass("mixit-border");
        $(".js2,.js1,.js4,.js5").removeClass("mixit-border");
    })

    $("#li3").click(function () {
        $(".js4").addClass("mixit-border");
        $(".js1,.js2,.js3,.js5").removeClass("mixit-border");
    })

    $("#li4").click(function () {
        $(".js5").addClass("mixit-border");
        $(".js2,.js1,.js4,.js3").removeClass("mixit-border");
    })

    $('#btn-nav').click(function () {
        $(".nav-btn").removeClass("color-nav");
        $(".nav-btn1, .nav-btn2").addClass("color-nav");
    })

    $('#btn-nav1').click(function () {
        $(".nav-btn1").removeClass("color-nav");
        $(".nav-btn, .nav-btn2").addClass("color-nav");
    })

    $('#btn-nav2').click(function () {
        $(".nav-btn2").removeClass("color-nav");
        $(".nav-btn1, .nav-btn").addClass("color-nav");
    })

    /*owl-Carousel*/


    $('.btn-carousel1').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        dots: false,
        smartSpeed: 1000,
        autoHeight: false,
        autoplay: true,
        navText: ['<i class="fas fa-arrow-left" aria-hidden="true"></i>',
            '<i class="fas fa-arrow-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            800: {
                items: 3
            },
            1000: {
                items: 4
            }
        }

    })

    $('.btn-carousel2').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        autoHeight: false,
        autoplay: true,
        navText: ['<i class="fas fa-arrow-left" aria-hidden="true"></i>',
            '<i class="fas fa-arrow-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            800: {
                items: 2
            },
            1000: {
                items: 3
            }
        }

    })

    $('.product-carousel').owlCarousel({
        loop: true,
        margin: 15,
        items: 1,
        nav: true,
        dots: false,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        navText: ['<i class="fas fa-arrow-left" aria-hidden="true"></i>',
            '<i class="fas fa-arrow-right" aria-hidden="true"></i>'],
    })

    $('.carousel-details').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        dots: false,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            0: {
                items: 4
            },
            600: {
                items: 4
            },
            800: {
                items: 4
            },
            1000: {
                items: 4
            }
        }
    })

    var containerEl = document.querySelector('[data-ref~="mixitup-container"]');

    var mixer = mixitup(containerEl, {
        selectors: {
            target: '[data-ref~="mixitup-target"]'
        }
    });

    $("#slider").slider({
        animate: "slow",
        range: true,
        min: 10,
        max: 540,
        values: [10, 540],
        slide: function (event, ui) {
            $("#rezult-polzunok").text("$" + ui.values[0] + " - " + "$" + ui.values[1]);
        }
    });
    $("#rezult-polzunok").text("$" + $("#slider").slider("values", 0) + " - " + "$" + $("#slider").slider("values", 1));
});