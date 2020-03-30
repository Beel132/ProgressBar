'use strict';

let current_width = 0;

$('.btn.add').click(function () {

    current_width += $(this).data('percentage');

    check_width();

    $('.bar--progress').css('width', `${current_width}%`);
});

$('.btn.remove').click(function () {

    current_width -= $(this).data('percentage');

    check_width();

    $('.bar--progress').css('width', `${current_width}%`);
});

const check_width = () => (current_width > 100) ? current_width = 100 : (current_width < 0) ? current_width = 0 : 0;


function toggle_mode() {
    $('.toggle--icon').toggleClass('dark');

    document.body.classList.toggle('dark-mode');
}