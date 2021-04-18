(function ($) {

const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});


$('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow');
});
$('.modal__close').on('click', function () {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
});

$('.button_mini').each(function (i) {
    $(this).on('click', function () {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
    });
});



})(jQuery);

//$('form').submit(function (e) {
//    e.preventDefault();
//    $.ajax({
//        type: "POST",
//        url: "mailer/smart.php",
//        data: $(this).serialize()
//    }).done(function () {
//        $(this).find("input").val("");
//        $('#consultation, #order').fadeOut();
//        $('.overlay, #thanks').fadeIn('slow');



//        $('form').trigger('reset');
//    });
//    return false;
//});