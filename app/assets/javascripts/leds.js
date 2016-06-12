$(document).on("page:load ready", function () {
     $(".js-calculate").on("click", function (event) {
       event.preventDefault();
       $(".col-sm-9").empty();
       $(".modal").modal("show");
       console.log("afuera del click");
       $(".js-ledlist").on("click", function (event) {
             $(".col-sm-9").empty();
             console.log("adentro del click");
             var led_model_list = $(event.currentTarget);
             var led_model = led_model_list.data("ledmodel");
             $(".col-sm-9").append(led_model);
             $(".js-screenlist").on("click", function (event) {
                 console.log("adentro del 2click");
                 var screen_width_list = $(event.currentTarget);
                 var screen_width = screen_width_list.data("screenwidth");
                 console.log(screen_width);
                 $("col-sm-9").append(screen_width);


             });

       });

       
  });
});