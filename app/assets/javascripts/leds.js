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
                           var string_url= "/api/leds/"+led_id;
                           $.ajax({     
                                  url: string_url,
                                  success: function (oneled_panel){
                                     console.log("Success");
                                     getledwall(oneled_panel,screen_width,screen_height);
                                  },
                                  error:function (oneled_panel) {
                                      console.log("It failed. :( ");
                                      console.log(theError.responseJSON);
                                  }
                            });
                           
                      }
                 });
             });

       });       
  });
});

function getledwall(oneled_panel,screen_width,screen_height){



       $(".js-elementslist").append("<li>" +oneled_panel.model+"</li>");

       $(".modal").modal("hide");                   
}


                        // <strong class="colorblue"> Model: </strong><%=@one_ledpanel.model%><br>
                        //  <br>
                        //  <strong class="colorblue"> Brand: </strong><%=@one_ledpanel.brand%><br>
                        //  <br>
                        //  <strong class="colorblue"> Panel size Width: </strong><%=@one_ledpanel.panelsize_w%> inch<br>
                        //  <br>
                        //  <strong class="colorblue"> Panel size Heigth: </strong><%=@one_ledpanel.panelsize_h%> inch<br>
                        //  <br>
                        //  <strong class="colorblue"> Panel Weight: </strong><%=@one_ledpanel.panelweight%> lbs<br>
                        //  <br>
                        //  <strong class="colorblue"> Pixel Matrix Width: </strong><%=@one_ledpanel.pixelmatrix_w%> px <br>
                        //  <br>
                        //  <strong class="colorblue"> Pixel Matrix Heigth: </strong><%=@one_ledpanel.pixelmatrix_h%> px <br>
                        //  <br>
                        //  <strong class="colorblue"> Power AMP 110 V: </strong><%=@one_ledpanel.poweramp110%> AMP<br>
                        //  <br>
                        //  <strong class="colorblue"> Power AMP 220 V: </strong><%=@one_ledpanel.poweramp220%> AMP<br>
                        //  <br>
                         
