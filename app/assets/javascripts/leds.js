$(document).on("page:load ready", function () {
   $(".modal-body").empty();
   $(".modal_title").empty(); 
  $(".js-calculate").on("click", function (event) {
      $(".modal").modal("show");
        
      
      var string_url= "/equipments/"+ equipment_id +"/rentals/"+ rental_id;
       $.ajax({     
              url: string_url,
              success: function (rental){
                 display_rental(rental, string_url);
                 console.log("Success");
              },
              error:function (rental) {
                  console.log("It failed. :( ");
                  console.log(theError.responseJSON);
              }
            }); 
     
  });
});