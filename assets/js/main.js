$(function() {
    // Select Menu
    $('.select-form').hover(function() {
        $(this).find('.select-list').addClass('show');
    }, function() {
        $(this).find('.select-list').removeClass('show');
    });
    $('.select-item').click(function() {
        $(this).parent().prev().text($(this).text());
        $(this).parent().toggleClass('show');
    });

    // Navbar
    $(window).scroll(function() {
        if($('html, body').scrollTop() > 50) {
            $('.header-home').removeClass('header-transparent');
        } else {
            $('.header-home').addClass('header-transparent');
        }
    })
});