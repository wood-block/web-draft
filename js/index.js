$(function () {
    var trigger = $('#trigger')
    var menu = $('.nav__inner');
    $(trigger).on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();
    })
})