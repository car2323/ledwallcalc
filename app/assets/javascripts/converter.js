$(document).on("page:load ready", function () {
     $(".js-converter").on("click", function (event) {

     $(".modal-title").append("<h3 class='colororange'>Converter Units</h3>");
     $(".modal-body").append("<input class='form-control' placeholder='feet'></input>");
     $(".modal-body").append("<h3>TO:</h3>");
     $(".modal-body").append("<input class='form-control' placeholder='inches'></input>");
     $(".modal").modal("show");

     });



});
  