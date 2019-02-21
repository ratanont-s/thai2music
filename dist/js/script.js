$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $("#header").addClass("show");
    } else {
        $("#header").removeClass("show");
    }
});

$(function () {
    // $("header").sticky({
    //     zIndex: 1020,
    // });
    $('#artistsHotSlide').slick({
        dots: true,
        // autoplay: true,
        // autoplaySpeed: 8000,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
            }
        }]
    });
    var $grid = $('#categoryArtists .grid').imagesLoaded(function () {
        $grid.isotope({
            itemSelector: '.element-item',
            percentPosition: true,
            layoutMode: 'fitRows',
        });
        $grid.isotope({
            filter: '.wedding'
        });
        $grid.isotope({
            filter: '.party'
        });
        $grid.isotope({
            filter: '.events'
        });
        $grid.isotope({
            filter: '*'
        });
        $('.filter-button-group').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
    });
    $(".popover-forget-pass").each(function (i, obj) {

        $(this).popover({
            html: true,
            placement: 'bottom',
            trigger: 'focus',
            content: function () {
                var id = $(this).attr('id')
                return $('#popover-content-' + id).html();
            }
        });

    });

    $(".card-menu-category").each(function (i, obj) {

        $(this).popover({
            container: '#menuCategory',
            html: true,
            placement: 'bottom',
            trigger: 'focus',
            content: function () {
                var id = $(this).attr('id')
                return $('#submenuCategory-' + id).html();
            }
        });

    });
    $('.card-header-share').popover({
        container: '.grid',
        html: true,
        placement: 'bottom',
        trigger: 'focus',
        content: function () {
            var id = $(this).attr('id')
            return $('#popoverShare').html();
        }
    })
    $('#menuCategory').slick({
        slidesToShow: 4,
        infinite: false,
        arrows: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }]
    });

    // 
    var $grid = $('.grid').imagesLoaded(function () {
        $grid.isotope({
            itemSelector: '.element-item',
            percentPosition: true,
            layoutMode: 'fitRows',
        });
    });
    $('.work-schedule-slide').slick();
    $('.artists-slide').slick({
        arrows: false,
        dots: true
    });
    $('.video-slide .slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.video-slide .slider-nav').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }]
    });
});