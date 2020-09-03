jQuery(document).ready(function () {

    searchControl();
    //Nav Toggle
    function navToggle() {
        jQuery('.navbar-toggler').click(function () {
            jQuery('.nav-items').toggleClass('active');
            jQuery('.navbar').toggleClass('menu-active');
            jQuery(this).toggleClass('collapsed');
        });
    }
    navToggle();


    //Page scroll add class name
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $(".site-header").addClass("header-overlay");
        } else {
            $(".site-header").removeClass("header-overlay");
        }
    });
    

    // Faq
    function faqAccordian() {
        jQuery('.faq-lists').find('.faq-heading').click(function () {
            var isActive = jQuery(this).hasClass("active");
            jQuery('.faq-heading').removeClass('active');
            jQuery('.faq-lists').removeClass('faq-active');
            if (!isActive) {
                jQuery(this).toggleClass('active');
                jQuery(this).parents(".faq-lists").toggleClass('faq-active');
            }

            jQuery(this).next().slideToggle('fast');
            jQuery(".faq-content").not(jQuery(this).next()).slideUp('fast');

        });
    }
    faqAccordian();
    jQuery('.faq-lists:first').addClass('faq-active');
    jQuery('.faq-lists:first .faq-heading').addClass('active');
    jQuery('.faq-lists:first .faq-content').addClass('default');


    // jQuery(".search-body").click(function () {
    //     jQuery(".navbar").addClass("main");
    // });
    //searchControl
    function searchControl() {
        jQuery(".input-group").click(function (e) {
            jQuery(this)
                .parents(".header-fixed")
                .addClass("search-result");
            // jQuery('ul.navbar-nav').hide();
            jQuery(this)
                .children(".search-here")
                .focus();
            e.stopPropagation();
        });
        jQuery(document).on("click", function (e) {
            if (jQuery(e.target).is(".input-group") === false) {
                jQuery(".header-fixed").removeClass("search-result");
                jQuery("ul.navbar-nav").show(50);
            }
        });
        jQuery(".search-icon").on('click tap touchstart', function () {
            jQuery("input.search-here").focus('');
        });
    }
});