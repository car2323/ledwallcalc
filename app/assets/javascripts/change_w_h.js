$(document).on("page:load ready", function () {


     $(".js-updateresultcol").on("click", function(){

     	var original_panels_w = $("#js-panels_w").val();
        var original_panels_h = $("#js-panels_h").val();
     	console.log(original_panels_w);
     	console.log(original_panels_h);
        var totalpanels_permit = (original_panels_w * original_panels_h);
        console.log(totalpanels_permit);
        console.log($("#totalpanels_permit").val());  
       


     });

     
});