(document).on("page:load ready", function () {

     $(".js-createpdf").on("click",function (event){

      event.preventDefault();

      var equipment_id_btn = $(event.currentTarget);
      var equipment_id = equipment_id_btn.data("equip");
      console.log(equipment_id);
       $.ajax({       
              url: "/api/equipments/"+ equipment_id,
              success: function (equipment){
                 create_PDFequip(equipment);
         
              },
              error:function (equipment) {
                  console.log("It failed. :( ");
                  console.log(theError.responseJSON);
              }
        }); 
   });
});
function create_PDFequip(one_equipment){

  var doc = new jsPDF();


  doc.addImage(imgData, 'JPEG', 0, 0, 210, 30);
  doc.setFont("helvetica");
  doc.setFontSize(30);
  /*doc.setLineWidth(1.5);
  doc.line(0, 35, 300, 35);*/

  doc.setFontSize(12);
  doc.text(10,30,"");
  doc.text(10,40,"");
  doc.text(10,50, "CATEGORY: ");
  doc.text(10,60, "NAME: ");
  doc.text(10,70, "MODEL: ");
  doc.text(10,80, "SERIAL: ");
  doc.text(10,90, "BRAND: ");
  doc.text(10,100, "PURCHASED DATE:");
  doc.text(10,110, "ORIGINAL PRICE:");
   doc.text(10,120,"");
  doc.text(10,130,"");
  doc.text(10,140, "Current Difference against original price: ");
  doc.text(10,150, "Current Difference against original price  plus cost of all maintenance: ");
  doc.text(10,160, "Price after depreciation: ");
 
  doc.text(10,190, "REPORT DATE: ");
  


  doc.setFontType("bold");
  doc.setTextColor(150);
    doc.text(55,50, one_equipment.category);
	doc.text(55,60, one_equipment.name);
    doc.text(55,70, one_equipment.model);

	doc.text(55,80, one_equipment.serial);
	doc.text(55,90, one_equipment.brand);
	var price=one_equipment.original_price.toString();
	doc.text(55,100, one_equipment.purchased_date);

    doc.text(175,140, $(".js-pricelessrental").text() +"$");
    doc.text(175,150, $(".js-priceplusmainte").text()+"$");
    doc.text(175,160, $(".js-depretaicioninfo").text()+"$");
  
    
    doc.text(175,190, $(".js-timenow").text());

	  doc.setTextColor(255, 0, 0);
        doc.text(55,110, price+" $");
        doc.text(175,170, $(".js-profit").text()+"$");
        doc.text(10,170, "PROFIT: ");
        

     doc.setTextColor(255, 122, 0)
        doc.text(10,180, "RUNNING TIME: ");
        doc.text(165,180, $(".js-runningtime").text()+" years");
        doc.text(185,180, $(".js-runningtimedays").text()+"days");
     doc.setTextColor(255, 255, 255);
     doc.setFontSize(30);
        doc.text(58,20,"payEquipment.com");
     

 doc.save(one_equipment.name +"_"+ one_equipment.serial);
};



