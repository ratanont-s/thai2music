$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $("#header").addClass("show");
    } else {
        $("#header").removeClass("show");
    }
});

$(function () {
    // Icons
    $(".icon-close").html('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.034,11.034,0,22.069,11.034,11.034,0,0,11.034,11.034,22.069,0,11.034,11.034,22.069,22.069Z" transform="translate(0.965 0.965)" fill="none" stroke="#5c55e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.931"/></svg>');
    $(".icon-menu-home").html('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20.007" viewBox="0 0 20 20.007"><path d="M20-16.25V-2.5A2.1,2.1,0,0,1,18.906-.723,4.711,4.711,0,0,1,16.25,0a4.711,4.711,0,0,1-2.656-.723A2.1,2.1,0,0,1,12.5-2.5a2.1,2.1,0,0,1,1.094-1.777A4.711,4.711,0,0,1,16.25-5a5.469,5.469,0,0,1,1.25.156V-12.07l-10,2.93V0A2.1,2.1,0,0,1,6.406,1.777,4.711,4.711,0,0,1,3.75,2.5a4.711,4.711,0,0,1-2.656-.723A2.1,2.1,0,0,1,0,0,2.1,2.1,0,0,1,1.094-1.777,4.711,4.711,0,0,1,3.75-2.5,5.469,5.469,0,0,1,5-2.344v-10.2a1.288,1.288,0,0,1,.234-.762,1.148,1.148,0,0,1,.625-.449l12.5-3.711a1.3,1.3,0,0,1,1.133.215A1.172,1.172,0,0,1,20-16.25Z" transform="translate(0 17.507)" fill="#2584d9"/></svg>');
    $(".icon-menu-category").html('<svg xmlns="http://www.w3.org/2000/svg" width="25.022" height="17.511" viewBox="0 0 25.022 17.511"><path d="M2.07-15.9a.79.79,0,0,1,.293-.293.528.528,0,0,1,.371-.059L12.5-15,8.906-9.062a.635.635,0,0,1-.312.273.508.508,0,0,1-.391,0L.469-10.977a.6.6,0,0,1-.43-.352.585.585,0,0,1,.039-.547Zm22.852,4.023a.585.585,0,0,1,.039.547.6.6,0,0,1-.43.352L16.8-8.789a.508.508,0,0,1-.391,0,.635.635,0,0,1-.312-.273L12.5-15l9.766-1.25a.528.528,0,0,1,.371.059.79.79,0,0,1,.293.293ZM16.641-7.5a1.6,1.6,0,0,0,.508-.078L22.5-9.1v6.953a1.164,1.164,0,0,1-.273.762,1.349,1.349,0,0,1-.664.449L13.086,1.172a2.385,2.385,0,0,1-1.211,0L3.438-.937a1.349,1.349,0,0,1-.664-.449A1.164,1.164,0,0,1,2.5-2.148V-9.1L7.852-7.578a1.6,1.6,0,0,0,.508.078A1.81,1.81,0,0,0,9.3-7.754,2.23,2.23,0,0,0,10-8.4l2.5-4.18L15-8.4a2.23,2.23,0,0,0,.7.645A1.81,1.81,0,0,0,16.641-7.5Z" transform="translate(0.011 16.261)" fill="#2584d9"/></svg>');
    $(".icon-menu-artists").html('<svg xmlns="http://www.w3.org/2000/svg" width="13.75" height="20" viewBox="0 0 13.75 20"><path d="M6.875-3.75A3.616,3.616,0,0,1,4.219-4.844,3.616,3.616,0,0,1,3.125-7.5v-6.25a3.616,3.616,0,0,1,1.094-2.656A3.616,3.616,0,0,1,6.875-17.5a3.616,3.616,0,0,1,2.656,1.094,3.616,3.616,0,0,1,1.094,2.656V-7.5A3.616,3.616,0,0,1,9.531-4.844,3.616,3.616,0,0,1,6.875-3.75ZM13.125-10a.608.608,0,0,1,.449.176.608.608,0,0,1,.176.449V-7.5a6.66,6.66,0,0,1-.781,3.184A6.856,6.856,0,0,1,10.82-1.895,6.87,6.87,0,0,1,7.813-.7V.625H10a.6.6,0,0,1,.625.625v.625A.6.6,0,0,1,10,2.5H3.75a.6.6,0,0,1-.625-.625V1.25A.6.6,0,0,1,3.75.625H5.938V-.7a6.55,6.55,0,0,1-3.047-1.25A7,7,0,0,1,.762-4.512,7.357,7.357,0,0,1,0-7.812V-9.375a.608.608,0,0,1,.176-.449A.608.608,0,0,1,.625-10H1.25a.608.608,0,0,1,.449.176.608.608,0,0,1,.176.449v1.641a5.314,5.314,0,0,0,.586,2.441A5.189,5.189,0,0,0,4.082-3.4a4.594,4.594,0,0,0,2.285.859A4.753,4.753,0,0,0,9.1-3.027a5.151,5.151,0,0,0,2.012-1.836A4.8,4.8,0,0,0,11.875-7.5V-9.375a.608.608,0,0,1,.176-.449A.608.608,0,0,1,12.5-10Z" transform="translate(0 17.5)" fill="#2584d9"/></svg>');
    $(".icon-menu-contact-us").html('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="17.5" viewBox="0 0 20 17.5"><path d="M10-16.25A9.7,9.7,0,0,1,15.02-14.9a10.12,10.12,0,0,1,3.633,3.633A9.7,9.7,0,0,1,20-6.25v1.875a1.232,1.232,0,0,1-.2.664,1.253,1.253,0,0,1-.508.469l-.547.273A4.287,4.287,0,0,1,17.4.02a4.2,4.2,0,0,1-3.027,1.23h-.937a.9.9,0,0,1-.664-.273A.9.9,0,0,1,12.5.313V-6.562a.9.9,0,0,1,.273-.664.9.9,0,0,1,.664-.273h.938a4.181,4.181,0,0,1,1.7.352,4.636,4.636,0,0,1,1.426.977V-6.25A7.239,7.239,0,0,0,16.484-10a7.643,7.643,0,0,0-2.734-2.734A7.239,7.239,0,0,0,10-13.75a7.239,7.239,0,0,0-3.75,1.016A7.643,7.643,0,0,0,3.516-10,7.239,7.239,0,0,0,2.5-6.25v.078a4.636,4.636,0,0,1,1.426-.977,4.181,4.181,0,0,1,1.7-.352h.938a.9.9,0,0,1,.664.273.9.9,0,0,1,.273.664V.313a.9.9,0,0,1-.273.664.9.9,0,0,1-.664.273H5.625A4.2,4.2,0,0,1,2.6.02,4.287,4.287,0,0,1,1.25-2.969L.7-3.242A1.253,1.253,0,0,1,.2-3.711,1.232,1.232,0,0,1,0-4.375V-6.25a9.7,9.7,0,0,1,1.348-5.02A10.12,10.12,0,0,1,4.98-14.9,9.7,9.7,0,0,1,10-16.25Z" transform="translate(0 16.25)" fill="#2584d9"/></svg>');

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
    $("#popoverForgetPass").each(function (i, obj) {

        $(this).popover({
            container: '.form-group-help',
            html: true,
            placement: 'bottom',
            trigger: 'click',
            content: function () {
                var id = $(this).attr('id')
                return $('#popoverForgetPassForm').html();
            }
        });
    });
    $("#popoverForgetPassMobile").each(function (i, obj) {

        $(this).popover({
            container: '.form-group-help-mobile',
            html: true,
            placement: 'bottom',
            trigger: 'click',
            content: function () {
                var id = $(this).attr('id')
                return $('#popoverForgetPassMobileForm').html();
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
    });
    $('.btn-share').popover({
        html: true,
        placement: 'bottom',
        trigger: 'focus',
        content: function () {
            var id = $(this).attr('id')
            return $('#popoverShare').html();
        }
    });
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