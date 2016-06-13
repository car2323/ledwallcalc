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
             
             var led_list = $(event.currentTarget);
             var led_id = led_list.data("ledid");

             $(".level1led").append("<strong class='colorblue'>LED Panel: </strong>");
             $(".level1led").append(led_model);
             $(".js-screenlist").on("click", function (event) {
                 $(".level2screen").empty();

                 var screen_width_list = $(event.currentTarget);
                 var screen_width = screen_width_list.data("screenwidth");

                 var screen_height_list = $(event.currentTarget);
                 var screen_height = screen_height_list.data("screenheight");

                 var screen_list = $(event.currentTarget);
                 var screen_id = screen_list.data("screenid");
                 console.log (screen_id);

                 $(".level2screen").append("<strong class='colorblue'>Screen: </strong>");
                 $(".level2screen").append(screen_width);
                 $(".level2screen").append(" x ");
                 $(".level2screen").append(screen_height);
                 $(".js-calculatebtn").on("click", function (event){
                      var resultvalid = select_validations();
                      if (resultvalid === false)
                      {
                          alert("Select one LED Panel, then one screen size");
                      }
                      else
                      { 
                           var string_url= "/leds/"+led_id;
                           $.ajax({     
                                  url: string_url,
                                  success: function (oneled_panel){
                                     console.log("Success");
                                  },
                                  error:function (oneled_panel) {
                                      console.log("It failed. :( ");
                                      console.log(theError.responseJSON);
                                  }

                            });
                        //conectarme con ajax, 
                          alert("paso bien");
                      }
                 });
             });

       });       
  });
});