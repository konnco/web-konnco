$(document).ready(function () {
    $('.testimonials').slick({
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
    });

    $('#fullpage').fullpage({
        menu: '#menu',
        autoScrolling: true,
        scrollHorizontally: true,
        sectionsColor: ['#fff', '#000', "#2f318b", "#0072bc", "#173d7a"],
        navigation: true,
        navigationPosition: 'right',
        onLeave: function (index, nextIndex, direction) {
            if (nextIndex.index > 0) {
                // $("#fp-nav").addClass("white");
                $(".navbar").addClass("white");
            } else {
                // $("#fp-nav").removeClass("white");
                $(".navbar").removeClass("white");
            }
            // var leavingSection = $(this);

            // //after leaving section 1
            // if (index == 1 && direction == 'down') {
            //     document.getElementById("navbar").style.background = "rgba(0, 0, 0, 0.2)";
            //     $(".logo a").css("color", "#ec008c");
            //     $(".box-shadow-menu").css("background-color", "#ec008c");
            //     $(".box-shadow-menu").css("box-shadow", "0 0.37em 0 0 #ec008c, 0 0.73em 0 0 #ec008c");
            // }
        }
    });

    new TypeIt('.type-effect', {
        strings: ["Made Your Idea", "Build Your Product", "Launch Your MVP", "Launch Your Dream"],
        typeSpeed: 10,
        deleteSpeed: 0,
        breakLines: false,
        nextStringDelay: [3000, 100],
        lifeLike: false,
        cursor: false,
        loop: true
    }).go();
});