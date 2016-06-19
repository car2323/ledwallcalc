$(document).on("page:load ready", function () {
     $(".js-calculate").on("click", function (event) {
       event.preventDefault();
       $(".level1led").empty();
       $(".level2screen").empty();
       $(".js-elementslist").empty();
       $(".modal").modal("show");
    
       $(".js-ledlist").on("click", function (event) {
             $(".level1led").empty();
             $(".js-elementslist").empty();
             
             var led_model_list = $(event.currentTarget);
             var led_model = led_model_list.data("ledmodel");
             
             var led_list = $(event.currentTarget);
             var led_id = led_list.data("ledid");

             $(".level1led").append("<strong class='colorblue'>LED Panel: </strong>");
             $(".level1led").append(led_model);
             $(".js-screenlist").on("click", function (event) {
                 $(".level2screen").empty();
                 $(".js-elementslist").empty();

                 var screen_width_list = $(event.currentTarget);
                 var screen_width = screen_width_list.data("screenwidth");

                 var screen_height_list = $(event.currentTarget);
                 var screen_height = screen_height_list.data("screenheight");

                 var screen_list = $(event.currentTarget);
                 var screen_id = screen_list.data("screenid");
            

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


                                  var string_url2= "/api/bumpers/"+led_id;
                                  $.ajax({     
                                      url: string_url2,
                                      success: function (all_bumpers){
                                         console.log("Success");
                                         getledwall(oneled_panel,screen_width,screen_height,all_bumpers);
                                         
                                      },
                                      error:function (all_bumpers) {
                                          console.log("It failed. :( ");
                                          console.log(theError.responseJSON);
                                      }
                                  });
                                     
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

function getledwall(oneled_panel,screen_width,screen_height, all_bumpers){
       $(".js-elementslist").empty();

       var panels_permitw = (screen_width / oneled_panel.panelsize_w).toFixed(2);
       panels_permitw = Math.floor(panels_permitw);

       var panels_permith = (screen_height / oneled_panel.panelsize_h).toFixed(2);
       panels_permith = Math.floor(panels_permith);

       var totalpanels_permit = (panels_permith * panels_permitw);

       var total_weigth = (oneled_panel.panelweight)*(panels_permith * panels_permitw);

       var total_poweramp = ((oneled_panel.poweramp110) * (panels_permith * panels_permitw)).toFixed(2);
       total_poweramp = Math.round(total_poweramp);

       var total_20amp = (total_poweramp / 20);
       total_20amp = Math.ceil(total_20amp + 1);

       var total_poweramp220 = ((oneled_panel.poweramp220) * (panels_permith * panels_permitw)).toFixed(2);
       total_poweramp220 = Math.round(total_poweramp220);

       var total_20amp220 = (total_poweramp220 / 20);
       total_20amp220 = Math.ceil(total_20amp220 + 1);

       var diference_w = ((oneled_panel.panelsize_w * panels_permitw)-(screen_width)).toFixed(2);
       var diference_h = ((oneled_panel.panelsize_w * panels_permith)-(screen_height)).toFixed(2);

       var reallonger_wall_w = (oneled_panel.panelsize_w * panels_permitw).toFixed(2);

       


       $(".js-elementslist").append("<li class='letterresultlist form-control'>" +"Model:   "+"<t class='colorred'>"+oneled_panel.model+"</t></li>");
       $(".js-elementslist").append("<li class='letterresultlist form-control'>" +"Width:  "+"<t class='colorred'>"+panels_permitw+" </t>panels</li>");
       $(".js-elementslist").append("<li class='letterresultlist form-control'>" +"Heigth:  "+"<t class='colorred'>"+panels_permith+" </t>panels</li>");

       $(".js-elementslist").append("<li class='letterresultlist form-control'>" +"Total LED panels:  "+"<t class='colorred'>"+totalpanels_permit+"</t></li>");

       $(".js-elementslist").append("<li class='letterresultlist form-control'>" +"Diference original Width size:  "+"<t class='colorred'>"+diference_w+" </t>inch</li>");
       $(".js-elementslist").append("<li class='letterresultlist form-control'>" +"Diference original Heigth size:  "+"<t class='colorred'>"+diference_h+" </t>inch</li>");
       
      

       $(".js-elementslist").append("<li class='letterresultlist form-control'>" +"Total power consuming 110V:  "+"<t class='colorred'>"+total_poweramp+" </t>amp</li>");
       $(".js-elementslist").append("<li class='letterresultlist form-control'>" +"Total feed 20 amp in 110V:  "+"<t class='colorred'>"+total_20amp+"</t></li>");

       $(".js-elementslist").append("<li class='letterresultlist form-control'>" +"Total power consuming 220V:  "+"<t class='colorred'>"+total_poweramp220+" </t>amp</li>");
       $(".js-elementslist").append("<li class='letterresultlist form-control'>" +"Total feed 20 amp in 220V:  "+"<t class='colorred'>"+total_20amp220+"</t></li>");
       getbumper(all_bumpers,reallonger_wall_w,total_weigth);


       $(".modal").modal("hide");                   
};
function getbumper(all_bumpers,reallonger_wall_w,total_weigth){

   if (all_bumpers.length > 2){
    alert("You have registered more than 2 bumpers for this LED panel, The app, only using does 2 first at the data base");
   }
   else{
       if (all_bumpers[0].height >= all_bumpers[1].height){
           var number_bumperslong = (reallonger_wall_w / all_bumpers[0].height);
          
           if ((number_bumperslong % 1 ) === 0)
           {
                  number_bumperslong = Math.floor(number_bumperslong);
                  $(".js-elementslist").append("<li class='letterresultlist form-control'>" +"Total bumpers:  "+ all_bumpers[0].description +" "+"<t class='colorred'>"+number_bumperslong+"</t></li>");
                  $(".js-elementslist").append("<li class='letterresultlist form-control'>" +"Total Weight:  "+"<t class='colorred'>"+total_weigth+" </t>Lbs</li>");
           }
           else
           {   
                 number_bumperslong = Math.floor(number_bumperslong);
                 $(".js-elementslist").append("<li class='letterresultlist form-control'>" +"Total bumpers:  "+ all_bumpers[0].description +" "+"<t class='colorred'>"+number_bumperslong+"</t></li>");
                 $(".js-elementslist").append("<li class='letterresultlist form-control'>" +"Total bumpers:  "+ all_bumpers[1].description +" "+"<t class='colorred'>"+1+"</t></li>");
                 total_weigth = (total_weigth + (all_bumpers[0].weight * number_bumperslong)+ all_bumpers[1].weight);
                 $(".js-elementslist").append("<li class='letterresultlist form-control'>" +"Total Weight:  "+"<t class='colorred'>"+total_weigth+" </t>Lbs</li>");
                
           }
       }
       else
       {

       }

   }
};

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
         
