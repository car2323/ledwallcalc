$(document).on("page:load ready", function () {
     $(".js-converter").on("click", function (event) {

     $(".modal-title").append("<h3 class='colororange'>Converter Units</h3>");
     $(".modal-body").append("<input onkeypress='return event.charCode >= 48 && event.charCode <= 57 || event.charCode === 44 || event.charCode === 46' class='form-control' placeholder='feet'></input>");
     $(".modal-body").append("<h3>TO:</h3>");
     $(".modal-body").append("<input disabled='true' onkeypress='return event.charCode >= 48 && event.charCode <= 57 || event.charCode === 44 || event.charCode === 46' class='form-control' placeholder='inches'></input>");
     $(".modal").modal("show");

     });



});
  