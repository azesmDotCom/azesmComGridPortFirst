$(document).ready(function () {

    const hamburger = document.querySelector('.hamburger'),
        overlay = document.querySelector('.menu__overlay'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close');
        

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    overlay.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
    });


    window.addEventListener("keydown", (e) => {
        if (e.key == 'Escape') {
            menu.classList.remove('active');
        }
    });

    window.addEventListener('click', (e) => {
        if (e.target == overlay) {
            menu.classList.remove('active');
        }
    });



    const counters = document.querySelectorAll('.skills__ratings-counter'),
        lines = document.querySelectorAll('.skills__ratings-line span');

    counters.forEach((item, i) => {
        lines[i].style.width = item.innerHTML;
    });


    $("form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            $(this).find("input").val("");
            //$('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;

    });


    //Scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1250) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").click(function () {
        const _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top + "px"
        });
        return false;
    });

    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #thanks').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    //-----------------------Petform----------------------------------
    //$('form').submit(function (e) {
    //    e.preventDefault();
    //    $.ajax({
    //        type: "POST",
    //        url: "mailer/smart.php",
    //        data: $(this).serialize()
    //    }).done(function () {
    //        $(this).find("input").val("");
    //        //$('#consultation, #order').fadeOut();
    //        $('.overlay, #thanks').fadeIn('slow');



    //        $('form').trigger('reset');
    //    });
    //    return false;
    //});


});




//$("form__php").submit(function() { //Change
//    var th = $(this);
//    $.ajax({
//        type: "POST",
//        url: "mail.php", //Change
//        data: th.serialize()
//    }).done(function() {
//        $(this).find("input").val("");
//        //$('#consultation, #order').fadeOut();
//        $('.overlay, #thanks').fadeIn('slow');
//        setTimeout(function() {
//            // Done Functions
//            th.trigger("reset");
//        }, 1000);
//    });
//    return false;

//});




//MODAL

//$('[data-modal=consultation]').on('click', function () {
//    $('.overlay, #thanks').fadeIn('slow');
//});
//$('.modal__close').on('click', function () {
//    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
//});

//$('.button_mini').each(function (i) {
//    $(this).on('click', function () {
//        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
//        $('.overlay, #order').fadeIn('slow');
//    });
//});

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