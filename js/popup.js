(function () {
    var $button = $('[data-trigger="popup"]');
    var $show = $('[data-popup="show"]');
    var $hide = $('[data-popup="hide"]');
    var $checkbox = $('[data-trigger="checkbox"]');

    $button.on('click', function (e) {
        $show.css('display', 'block');
        $hide.css('display', 'none');
        e.stopPropagation();
    });

    $('body').on('click', function () {
        $hide.css('display', 'block');
        $show.css('display', 'none');
    });

    $show.on('click', function (e) {
        e.stopPropagation();
    });

    $checkbox.on('click', function () {
        $checkbox.toggleClass('checkbox__input--checked');
        $show.find('.popup-overlay').toggleClass('popup-overlay--hide');
    })
})();