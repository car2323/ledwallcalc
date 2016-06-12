$(document).on("page:load ready", function () {
     $(".js-calculate").on("click", function (event) {
       event.preventDefault();
       $(".level1led").empty();
       $(".level2screen").empty();
       $(".modal").modal("show");
    
       $(".js-ledlist").on("click", function (event) {
             $(".level1led").empty();
             
             var led_model_list = $(event.currentTarget);
             var led_model = led_model_list.data("ledmodel");
             $(".level1led").append("<strong class='colorblue'>LED Panel: </strong>");
             $(".level1led").append(led_model);
             $(".js-screenlist").on("click", function (event) {
                 $(".level2screen").empty();
                 var screen_width_list = $(event.currentTarget);
                 var screen_width = screen_width_list.data("screenwidth");

                 var screen_height_list = $(event.currentTarget);
                 var screen_height = screen_height_list.data("screenheight");
                 $(".level2screen").append("<strong class='colorblue'>Screen: </strong>");
                 $(".level2screen").append(screen_width);
                 $(".level2screen").append(" x ");
                 $(".level2screen").append(screen_height);
                 $(".js-calculatebtn").on("click", function (){
                      var resultvalid = select_validations();
                      if (resultvalid === false)
                      {
                          alert("hola tonto");
                      }
                      else
                      {
                          alert("paso bien");
                      }
                 });
             });

       });

       
  });
});