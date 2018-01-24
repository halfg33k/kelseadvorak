// total number of panels
var numPanels = $(".panel").length;
var hoverBreakpoint = 520;

/*
 * Expand the panel when it is hovered over
 */
$(".panel").hover(
    function(){
        if($(window).width() > hoverBreakpoint && $(window).height() < $(window).width()){
            $(".panel").each(function(){
                $(this).css("width", 100/(numPanels+1) + "%");
            });
            
            $(this).css("width", (100/(numPanels+1))*2 + "%")
            .addClass("panel_active");
        }
    }, function(){
        if($(window).width() > hoverBreakpoint && $(window).height() < $(window).width()){
            $(".panel").each(function(){
                $(this).css("width", 100/(numPanels) + "%")
                .removeClass("panel_active");
            });
        }
    }
);
