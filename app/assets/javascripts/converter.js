$(document).on("page:load ready", function () {
	
    $(".js-converterpanelsizew").on("click", function (event) {
     
	     $(".modal-title").empty();
	     $(".modal-body").empty();
	     $(".modal-title").append("<h3 class='colororange'>Converter Units</h3>");
	     $(".modal-body").append("<input onkeypress='return event.charCode >= 48 && event.charCode <= 57 || event.charCode === 44 || event.charCode === 46' class='form-control js-feetnumber' placeholder='feet'></input>");
	     $(".modal-body").append("<h3>TO:</h3>");
	     $(".modal-body").append("<input disabled='true' onkeypress='return event.charCode >= 48 && event.charCode <= 57 || event.charCode === 44 || event.charCode === 46' class='form-control js-inchesnumber' placeholder='inches'></input>");
	     $(".modal").modal("show");
	     $(".js-convert").on("click",function (event){
             var feet_number = $(".js-feetnumber").val();
             var inches_number = (feet_number * 12).toFixed(2);
             $(".js-inchesnumber").val(inches_number);
             $(".js-apply").on("click",function(){
             	$(".js-panelsizew").val(inches_number);
             	 $(".modal").modal("hide");
             	  $(".modal-title").empty();
	              $(".modal-body").empty();
             }) 
         });
     });

	 $(".js-converterpanelsizeh").on("click", function (event) {
	     
		     $(".modal-title").empty();
		     $(".modal-body").empty();
		     $(".modal-title").append("<h3 class='colororange'>Converter Units</h3>");
		     $(".modal-body").append("<input onkeypress='return event.charCode >= 48 && event.charCode <= 57 || event.charCode === 44 || event.charCode === 46' class='form-control js-feetnumber' placeholder='feet'></input>");
		     $(".modal-body").append("<h3>TO:</h3>");
		     $(".modal-body").append("<input disabled='true' onkeypress='return event.charCode >= 48 && event.charCode <= 57 || event.charCode === 44 || event.charCode === 46' class='form-control js-inchesnumber' placeholder='inches'></input>");
		     $(".modal").modal("show");
		     $(".js-convert").on("click",function (event){
	             var feet_number = $(".js-feetnumber").val();
	             var inches_number = (feet_number * 12).toFixed(2);
	             $(".js-inchesnumber").val(inches_number);
	             $(".js-apply").on("click",function(){
	             	$(".js-panelsizeh").val(inches_number);
	             	 $(".modal").modal("hide");
	             	  $(".modal-title").empty();
		              $(".modal-body").empty();
	             }) 
	         });
	     });








     $(".js-converter2").on("click", function (event) {
     	
	     $(".modal-title").empty();
	     $(".modal-body").empty();
	     $(".modal-title").append("<h3 class='colororange'>Converter Units</h3>");
	     $(".modal-body").append("<input onkeypress='return event.charCode >= 48 && event.charCode <= 57 || event.charCode === 44 || event.charCode === 46' class='form-control js-kilo' placeholder='Kilograms'></input>");
	     $(".modal-body").append("<h3>TO:</h3>");
	     $(".modal-body").append("<input disabled='true' onkeypress='return event.charCode >= 48 && event.charCode <= 57 || event.charCode === 44 || event.charCode === 46' class='form-control js-lbs' placeholder='Lbs'></input>");
	     $(".modal").modal("show");
	     $(".js-convert").on("click",function (event){
             var kilo_number = $(".js-kilo").val();
             var lbs_number = (kilo_number * 2.204).toFixed(3);
             $(".js-lbs").val(lbs_number);
         });
     });
});
  