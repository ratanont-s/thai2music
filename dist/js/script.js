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

$(document).ready(function () {
    $("header").sticky({
        zIndex: 1020
    });
});