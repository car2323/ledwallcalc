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
             $(".level1led").append("<strong class='colorred'>"+ led_model +"</strong>");
             $(".js-screenlist").on("click", function (event) {
                 $(".level2screen").empty();
                 $(".js-elementslist").empty();

                 var screen_width_list = $(event.currentTarget);
                 var screen_width = screen_width_list.data("screenwidth");

                 var screen_height_list = $(event.currentTarget);
                 var screen_height = screen_height_list.data("screenheight");

                 var screen_list = $(event.currentTarget);
                 var screen_id = screen_list.data("screenid");

                 var screen_width_name = $(event.currentTarget);
                 var screen_name = screen_width_name.data("descriptionscreen");
            

                 $(".level2screen").append("<strong class='colorblue'>Screen: </strong>");
                 $(".level2screen").append("<strong class='colorred'>"+ screen_width +"</strong>");
                 $(".level2screen").append("<t class='colorblack'> x </t>");
                 $(".level2screen").append("<strong class='colorred'>"+ screen_height +"</strong>");
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
                                         getledwall(oneled_panel,screen_width,screen_height,all_bumpers,screen_name);
                                         
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






function getledwall(oneled_panel,screen_width,screen_height, all_bumpers, screen_name){
       $(".js-elementslist").empty();

       var panels_permitw = (screen_width / oneled_panel.panelsize_w).toFixed(2);
       panels_permitw = Math.floor(panels_permitw);

       var panels_permith = (screen_height / oneled_panel.panelsize_h).toFixed(2);
       panels_permith = Math.floor(panels_permith);

       var totalpanels_permit = (panels_permith * panels_permitw);

       var total_weigth = ((oneled_panel.panelweight)*(panels_permith * panels_permitw));
       var total_weigth1 = total_weigth;
       total_weigth1 = total_weigth1.toFixed(2);

       var total_poweramp = ((oneled_panel.poweramp110) * (panels_permith * panels_permitw)).toFixed(2);
       total_poweramp = Math.round(total_poweramp);

       var total_20amp = (total_poweramp / 20);
       total_20amp = Math.ceil(total_20amp + 1);

       var total_poweramp220 = ((oneled_panel.poweramp220) * (panels_permith * panels_permitw)).toFixed(2);
       total_poweramp220 = Math.round(total_poweramp220);

       var total_20amp220 = (total_poweramp220 / 20);
       total_20amp220 = Math.ceil(total_20amp220 + 1);

       var diference_w = ((oneled_panel.panelsize_w * panels_permitw)-(screen_width)).toFixed(2);
       var diference_h = ((oneled_panel.panelsize_h * panels_permith)-(screen_height)).toFixed(2);

       var actual_w = (oneled_panel.panelsize_w * panels_permitw).toFixed(2);
       var actual_h = (oneled_panel.panelsize_h * panels_permith).toFixed(2);

       var reallonger_wall_w = (oneled_panel.panelsize_w * panels_permitw).toFixed(2);

       var totalpixel_w = (oneled_panel.pixelmatrix_w * panels_permitw);
       var totalpixel_h = (oneled_panel.pixelmatrix_h * panels_permith);

       var aspectratio = (panels_permitw / panels_permith).toFixed(2); 

       $(".js-elementslist").append("<li class='letterresultlist form-control input-xl'>" +"Model:   "+"<strong><t class='colorred modelpanelpdf'>"+oneled_panel.model+" "+"</t></strong><br> Size or LED wall: <t class='js-screenname colorred'><strong>"+screen_name+"</strong></t></li>");

       $(".js-elementslist").append("<t class='form-inline letterresultlist1'>Number of panels in Width: </t>"+"<strong> &nbsp <a href='#' class='js-panels_w- colorred'> - </a> <input disabled='true' class='colorred input-xs' id='js-panels_w' value='"+panels_permitw+"'></input></strong>&nbsp<a href='#' class='js-panels_wp'>+ </a><br>");
       $(".js-elementslist").append("<t class='form-inline letterresultlist1'>Number of panels in Heigth: </t>"+"<strong>&nbsp<a href='#' class='js-panels_h- colorred'>- </a> <input disabled='true' class='colorred input-xs' id='js-panels_h' value='"+panels_permith+"'></input></strong>&nbsp<a href='#' class='js-panels_hp'>+ </a><br>");
      
       $(".js-elementslist").append("<li class='letterresultlist form-control'>" +"Total LED panels:  "+"<strong><t class='colorred' id='totalpanels_permit'>"+totalpanels_permit+"</t></strong></li>");

       $(".js-elementslist").append("<li class='letterresultlist form-control'>" +"Resolution LED wall:  "+"<strong><t class='colorred js-totalpixelwpdf'>"+totalpixel_w+"</t></strong>w  X  "+"<strong><t class='colorred js-totalpixelhpdf'>"+totalpixel_h+"</t></strong>h pixels</li>");
       $(".js-elementslist").append("<li class='letterresultlist form-control'>" +"Aspect Ratio:  "+"<strong><t class='colorred js-aspectratiopdf'>"+aspectratio+" </t></strong></li>");


       $(".js-elementslist").append("<li class='letterresultlist form-control'>" +"Actual Width size:  "+"<strong><t class='colorred js-actualsizepdf_w'>"+actual_w+" </t></strong>inch or "+"<strong><t class='colorred js-actualsize_feedpdf_w'>"+(actual_w/12).toFixed(2)+"</t></strong>"+" feet  diff. "+"<strong><t class='colorred js-actualsizepdfdiff_w'>"+diference_w+"</t></strong> inch</li>");
       $(".js-elementslist").append("<li class='letterresultlist form-control'>" +"Actual Heigth size:  "+"<strong><t class='colorred js-actualsizepdf_h'>"+actual_h+" </t></strong>inch or "+"<strong><t class='colorred js-actualsize_feedpdf_h'>"+(actual_h/12).toFixed(2)+"</t></strong>"+" feet diff. "+"<strong><t class='colorred js-actualsizepdfdiff_h'>"+diference_h+"</t></strong> inch</li>");
       
      
       $(".js-elementslist").append("<li class='letterresultlist form-control'>" +"Total power consuming 110V:  "+"<strong><t class='colorred js-totalamppdf'>"+total_poweramp+" </t></strong>amp</li>");
       $(".js-elementslist").append("<li class='letterresultlist form-control'>" +"Total feed 20 amp in 110V:  "+"<strong><t class='colorred js-totalamppdfnumber'>"+total_20amp+"</t></strong></li>");

       $(".js-elementslist").append("<li class='letterresultlist form-control'>" +"Total power consuming 220V:  "+"<strong><t class='colorred js-totalamppdf2'>"+total_poweramp220+" </t></strong>amp</li>");
       $(".js-elementslist").append("<li class='letterresultlist form-control'>" +"Total feed 20 amp in 220V:  "+"<strong><t class='colorred js-totalamppdfnumber2'>"+total_20amp220+"</t></strong></li>");

       $(".js-elementslist").append("<li class='letterresultlist form-control'>" +"Total Weight without bumpers:  "+"<strong><t class='colorred js-totalscreenpdfweigth'>"+total_weigth1+" </t></strong>Lbs</li>");


       getbumper(all_bumpers,reallonger_wall_w,total_weigth);

       
       $(".modal").modal("hide");   


       
       $(".js-panels_w-").on("click", function(){
              var new_jspanels_w = parseFloat($("#js-panels_w").val())-1;
              var new_jspanels_h = $("#js-panels_h").val();
          
              change_w_h(oneled_panel,screen_width,screen_height, all_bumpers, new_jspanels_w, new_jspanels_h, screen_name);
     });
     $(".js-panels_wp").on("click", function(){
              
              var new_jspanels_w = parseFloat($("#js-panels_w").val()) +1;
              console.log (new_jspanels_w);
              var new_jspanels_h = $("#js-panels_h").val();
      
              change_w_h(oneled_panel,screen_width,screen_height, all_bumpers, new_jspanels_w, new_jspanels_h, screen_name);
     });
     $(".js-panels_h-").on("click", function(){
              console.log($("#js-panels_h").val());
              var new_jspanels_w = $("#js-panels_w").val();
              var new_jspanels_h = parseFloat($("#js-panels_h").val())-1;
              console.log(new_jspanels_h);
        
              change_w_h(oneled_panel,screen_width,screen_height, all_bumpers, new_jspanels_w, new_jspanels_h, screen_name);
     });  
     $(".js-panels_hp").on("click", function(){
              var new_jspanels_w = $("#js-panels_w").val();
              var new_jspanels_h = parseFloat($("#js-panels_h").val())+1;
        
              change_w_h(oneled_panel,screen_width,screen_height, all_bumpers, new_jspanels_w, new_jspanels_h, screen_name);
     });                 

};





function getbumper(all_bumpers,reallonger_wall_w,total_weigth){

  if (all_bumpers.length=== 0)
  {
     alert("for a more complete info, add bumpers fos this LED panel");
  } 
  else
  {
   if (all_bumpers.length >= 2)
   {
    if(all_bumpers.length > 2) 
    {
       alert("You have registered more than 2 bumpers for this LED panel, The app, only using does 2 first at the data base");
    }  
       if (all_bumpers[0].height >= all_bumpers[1].height)
       {
           var number_bumperslong = (reallonger_wall_w / all_bumpers[0].height);
          
           if ((number_bumperslong % 1 ) === 0)
           {
                  number_bumperslong = Math.floor(number_bumperslong);
                  $(".js-elementslist").append("<li class='letterresultlist form-control'>" +"Total bumpers: "+ all_bumpers[0].description +" "+"<strong><t class='colorred js-bumperpdfnumberd'>"+number_bumperslong+"</t></strong></li>");
                  total_weigth = (total_weigth + (all_bumpers[0].weight * number_bumperslong));
                  $(".js-elementslist").append("<li class='letterresultlist form-control'>" +"Total Weight with bumpers:  "+"<strong><t class='colorred js-bumperpdfweigth'>"+total_weigth+" </t></strong>Lbs</li>");
           }
           else
           {   
                 number_bumperslong = Math.floor(number_bumperslong);
                 $(".js-elementslist").append("<li class='letterresultlist form-control'>" +"Total bumpers: "+ all_bumpers[0].description +" "+"<strong><t class='colorred js-bumperpdfnumberd'>"+number_bumperslong+"</t></strong></li>");
                 $(".js-elementslist").append("<li class='letterresultlist form-control'>" +"Total bumpers:  "+ all_bumpers[1].description +" "+"<strong><t class='colorred js-bumperpdfnumbers'>"+1+"</t></strong></li>");
                 total_weigth = (total_weigth + (all_bumpers[0].weight * number_bumperslong)+ all_bumpers[1].weight);
                 total_weigth = total_weigth.toFixed(2);
                 $(".js-elementslist").append("<li class='letterresultlist form-control'>" +"Total Weight with bumpers:  "+"<strong><t class='colorred js-bumperpdfweigth'>"+total_weigth+" </t></strong>Lbs</li>");
                
           }
       }
       else 
       {
          if (all_bumpers[1].height >= all_bumpers[0].height)
          {
             console.log ("entro por el segundo mayor que el primero");
             var number_bumperslong = (reallonger_wall_w / all_bumpers[1].height);
          
             if ((number_bumperslong % 1 ) === 0)
             {
                  number_bumperslong = Math.floor(number_bumperslong);
                  $(".js-elementslist").append("<li class='letterresultlist form-control'>" +"Total bumpers: "+ all_bumpers[1].description +" "+"<strong><t class='colorred js-bumperpdfnumberd'>"+number_bumperslong+"</t></strong></li>");
                  total_weigth = (total_weigth + (all_bumpers[1].weight * number_bumperslong));
                  total_weigth = total_weigth.toFixed(2);
                  $(".js-elementslist").append("<li class='letterresultlist form-control'>" +"Total Weight with bumpers:  "+"<strong><t class='colorred js-bumperpdfweigth'>"+total_weigth+" </t></strong>Lbs</li>");
             }
             else
             {   
                 number_bumperslong = Math.floor(number_bumperslong);
                 $(".js-elementslist").append("<li class='letterresultlist form-control'>" +"Total bumpers: "+ all_bumpers[1].description +" "+"<strong><t class='colorred js-bumperpdfnumberd'>"+number_bumperslong+"</t></strong></li>");
                 $(".js-elementslist").append("<li class='letterresultlist form-control'>" +"Total bumpers: "+ all_bumpers[0].description +" "+"<strong><t class='colorred js-bumperpdfnumbers'>"+1+"</t></strong></li>");
                 total_weigth = (total_weigth + (all_bumpers[1].weight * number_bumperslong)+ all_bumpers[0].weight);
                 total_weigth = total_weigth.toFixed(2);
                 $(".js-elementslist").append("<li class='letterresultlist form-control'>" +"Total Weight with bumpers:  "+"<strong><t class='colorred js-bumperpdfweigth'>"+total_weigth+" </t></strong>Lbs</li>");
                
             }
          }
      }  }
    
    if (all_bumpers.length === 1)
    {
       
       var number_bumperslong = (reallonger_wall_w / all_bumpers[0].height);
          
           if ((number_bumperslong % 1 ) === 0)
           {
                  number_bumperslong = Math.floor(number_bumperslong);
                  $(".js-elementslist").append("<li class='letterresultlist form-control'>" +"Total bumpers: "+ all_bumpers[0].description +" "+"<strong><t class='colorred js-bumperpdfnumberd'>"+number_bumperslong+"</t></strong></li>");
                  total_weigth = (total_weigth + (all_bumpers[0].weight * number_bumperslong));
                  total_weigth = total_weigth.toFixed(2);
                  $(".js-elementslist").append("<li class='letterresultlist form-control'>" +"Total Weight with bumpers:  "+"<strong><t class='colorred js-bumperpdfweigth'>"+total_weigth+" </t></strong>Lbs</li>");
           }
           else
           {   
                 number_bumperslong = Math.floor(number_bumperslong);
                 $(".js-elementslist").append("<li class='letterresultlist form-control'>" +"Total bumpers: "+ all_bumpers[0].description +" "+"<strong><t class='colorred js-bumperpdfnumbers'>"+number_bumperslong+"</t></strong></li>");
                 total_weigth = (total_weigth + (all_bumpers[0].weight * number_bumperslong));
                 total_weigth = total_weigth.toFixed(2);
                 $(".js-elementslist").append("<li class='letterresultlist form-control'>" +"Total Weight with bumpers:  "+"<strong><t class='colorred js-bumperpdfweigth'>"+total_weigth+" </t></strong>Lbs</li>");
                
           }
    }
  }
};

 