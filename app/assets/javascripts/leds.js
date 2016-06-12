$(document).on("page:load ready", function () {
     $(".js-calculate").on("click", function (event) {
       event.preventDefault();
       $(".col-sm-9").empty();
       $(".modal").modal("show");
       console.log("afuera del click");
       $(".js-ledlist").on("click", function (event) {
             $(".col-sm-9").empty();
             console.log("adentro del click");
             var led_id_list = $(".js-ledlist");
             var led_id = led_id_list.data("lediid");
             $(".col-sm-9").append(led_id);



       });

       
  });
});