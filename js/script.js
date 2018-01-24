// total number of panels
var numPanels = $(".panel").length;
var sectionImages = ['images/001.jpeg', 
                     "images/002.jpeg", 
                     "images/003.jpg", 
                     "images/004.jpg",
                     "images/005.jpg"];

/*
 * Set default width of panels and assign correct image
 */
$(".panel").each( function(index){
    $(this).css("width", 100/numPanels + "%");
    
    $(this).css("background", "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)), url(" + sectionImages[index] + ") no-repeat center center")
    .css("background-size", "cover");
});

/*
 * Expand the panel when it is hovered over
 */
$(".panel").hover(
    function(){
        $(".panel").each(function(){
            $(this).css("width", 100/(numPanels+1) + "%");
        });
        
        $(this).css("width", (100/(numPanels+1))*2 + "%")
        .addClass("panel_active");
    }, function(){
        $(".panel").each(function(){
            $(this).css("width", 100/(numPanels) + "%")
            .removeClass("panel_active");
        });
    }
);
