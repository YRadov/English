jQuery(document).ready(function() {
    jQuery(".fancybox").fancybox(
        {
            "padding" : 5,
            openEffect	: 'none',
            closeEffect	: 'none',
            nextEffect	: 'elastic',
            prevEffect	: 'elastic'
        });

    $.fancybox.hideLoading();

    $(".various").fancybox({
        padding     : 5,
        maxWidth	: 800,
        maxHeight	: 600,
        fitToView	: false,
        width		: '70%',
        height		: '70%',
        autoSize	: false,
        closeClick	: false,
        openEffect	: 'none',
        closeEffect	: 'none',
        helpers : {
            media : {}
        }
    });

    $('.fancybox-media').fancybox({
        openEffect  : 'none',
        closeEffect : 'none',
        helpers : {
            media : {}
        }
    });
});
