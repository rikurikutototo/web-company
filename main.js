$(function () {

    // トップボタン表示、非表示
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 300) {
            $('#pagetop').fadeIn(400);
        } else {
            $('#pagetop').fadeOut(400);
        }
    });


    // ヘッダースクロール背景色追加
    jQuery(window).on('scroll', function () {
        if (100 < jQuery(this).scrollTop()) {
            jQuery('.l-header').addClass('u-header-color');
        } else {
            jQuery('.l-header').removeClass('u-header-color');
        }
    });

    // ドロワーメニュー開閉
    $('.navbar_toggle').on('click', function () {
        $(this).toggleClass('open');
        $('.menu').toggleClass('open');
        $('.menu').toggleClass('u-disappear');
    });
});


