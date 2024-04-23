$('#botao-avaliacao').click(function() {
    $('html, body').animate({
        scrollTop: $('#form-contato').offset().top
    }, 1000);
});

$('a[href^="#"]').click(function() {
    var alvo = $($(this).attr('href'));
    $('html, body').animate({
        scrollTop: alvo.offset().top
    }, 1000);
    return false;
});

$(document).ready(function() {
    $(window).scroll(function() {
        $('#serviços').each(function() {
            var position = $(this).offset().top;
            var scrollPosition = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (position < scrollPosition + windowHeight - 50) {
                $(this).css('opacity', '1');
            }
        });

        $('#form-contato').each(function() {
            var position = $(this).offset().top;
            var scrollPosition = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (position < scrollPosition + windowHeight - 50) {
                $(this).css('opacity', '1');
            }
        });

        $('#footer').each(function() {
            var position = $(this).offset().top;
            var scrollPosition = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (position < scrollPosition + windowHeight - 50) {
                $(this).css('opacity', '1');
            }
        });
    });
});