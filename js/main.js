;$(function () {
    "use strict";

    var sidebar=$('.sidebar'),
        backButton=$(".back-to-top"),
        mask=$('.mask'),
        sidebar_trigger=$("#sidebar_trigger"),
        more=$(".more");
    /*     showFeedImgButton = $("#feed");
        feedImg=$("#feed-img");
        showFeedImgButton.on('mouseover',function () {
            feedImg.setAttribute("class",hide);
        });
        showFeedImgButton.on("mouseout", function() {
          feedImg.setAttribute("class", hover);
        }); */
        window.onload=function () {
           more.animate({"margin-top":80+'px'});
        }
        function showSidebar(){    
        sidebar.css("right",0);       
        mask.fadeIn();
        
        
        
        }
        function hideSidebar() {
        mask.fadeOut();
        sidebar.css("right",-sidebar.width());
        }
        sidebar_trigger.on("click", showSidebar);
        mask.on('click',hideSidebar);

        backButton.on('click',function () {
            $('html,body').animate({
                scrollTop:0
            },800)
        });
        $(window).on('scroll',function () {
            if($(window).scrollTop()>$(window).height())
                backButton.fadeIn();
            else
            backButton.fadeOut();
        })
        $(window).trigger('scroll');
       
})       