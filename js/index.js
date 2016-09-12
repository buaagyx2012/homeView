/**
 * Created by yzz on 2016/9/12.
 */


$(function(){

    function init() {
        if ($.fn.makisu.enabled) {

            var $menu = $('.list');

            // Create Makisus

            $menu.makisu({
                selector: 'dd',
                overlap: 0.85,
                speed: 1.7
            });


            // Open all

            $menu.makisu('open');

            // Toggle on click

            $('.menu-toggle').on('click', function () {
                $(this).parent().makisu("toggle");
                //$('.list').makisu('toggle');
            });

            // Disable all links


        } else {

            $('.warning').show();
        }
    }

    init();

});