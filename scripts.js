$(document).ready(function() {
    $(".image .item").each(function(index) {
        $(this).attr('data-index', index);
        $(this).attr('data-img', $(this).attr("src"));

        var dot = "";
        if (index == 0) {
            dot = '<div class="dot active" data-index="' + index + '"></div>';
        } else {
            dot = '<div class="dot" data-index="' + index + '"></div>';
        }

        $(".dots-wrap .dots").append(dot);

        $(".text-wrap .text-item").each(function(item) {
            if (item == index) {
                $(this).attr('data-index', index);
            }
        });
    });

    $(window).on("scroll resize", function() {

        var $window = $(window),
            hitbox_top = $window.scrollTop() + $window.height() * .3,
            hitbox_bottom = $window.scrollTop() + $window.height() * .6;
        $(".text-wrap .text-item").each(function() {
            var $element = $(this),
                element_top = $element.offset().top,
                element_bottom = $element.offset().top + $element.height();
            //$element.toggleClass("middle-viewport", hitbox_top < element_bottom && hitbox_bottom > element_top);
            if (hitbox_top < element_bottom && hitbox_bottom > element_top) {

                var imgSrc = $(this).attr('data-index');
                imgSrc = $('.image .item[data-index="' + imgSrc + '"]').attr("data-img");
                $(".image .item.active").attr("src", imgSrc);

                $('.dots .dot').removeClass("active");
                var dotSrc = $(this).attr('data-index');
                $('.dots .dot[data-index="' + dotSrc + '"]').addClass("active");

            }

        });
    });

    $('.dots .dot').click(function() {
        $('.dots .dot').removeClass("active");
        var imgSrc = $(this).attr('data-index');
        imgSrc = $('.image .item[data-index="' + imgSrc + '"]').attr("data-img");
        $(".image .item.active").attr("src", imgSrc);
        $(this).addClass("active");
    });

});