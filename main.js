
var x = $('.slt-dcs').change(function () {

    var vbl = $(this).attr('to');

    if ($(this).val() == 0) {
        $(vbl).show();
    } else {
        $(vbl).hide();
    }

})