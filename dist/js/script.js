$(function () {
    $("header").sticky({
        zIndex: 1020
    });
})

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

$(function () {
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
})