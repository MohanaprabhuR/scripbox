jQuery(document).ready(function () {
    //Nav Toggle
    function navToggle() {
        jQuery('.navbar-toggler').click(function () {
            jQuery('.navbar-collapse').toggleClass('active');
            jQuery(this).toggleClass('collapsed');
        });
    }
    navToggle();

    

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
});