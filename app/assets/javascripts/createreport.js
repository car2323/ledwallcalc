$(document).on("page:load ready", function () {

     $(".js-createpdf").on("click",function (event){
       console.log($(".modelpanelpdf").text());
       js-panels_w
       js-panels_h
       create_PDFequip();
      
   });
});
function create_PDFequip(){

  var doc = new jsPDF();


  
  doc.setFont("helvetica");
  doc.setFontSize(30);
  doc.setFontSize(12);
  doc.text(10,30,"");
  doc.text(10,40,"");
  doc.text(10,50, "Model:: ");
  doc.text(10,60, "Number of panels in Width: ");
  doc.text(10,70, "Number of panels in Heigth: ");
  doc.text(10,80, "Total LED panels: ");
  doc.text(10,90, "Resolution LED wall: ");
  doc.text(10,100, "Aspect Ratio:");
  doc.text(10,110, "Actual Width size: 59.07 inch or 4.92 feet diff. -12.93 inch:");
   doc.text(10,120,"Actual Heigth size: 78.76 inch or 6.56 feet diff. -17.24 inch");
  doc.text(10,130, "Total power consuming 110V: 15 amp");
  doc.text(10,140, "Total feed 20 amp in 110V: 2");
  doc.text(10,150, "Current Difference against original price  plus cost of all maintenance: ");
  doc.text(10,160, "Price after depreciation: ");
 
  doc.text(10,190, "REPORT DATE: ");
  


  doc.setFontType("bold");
  doc.setTextColor(150);
    doc.text(55,50, $(".modelpanelpdf").text());
	doc.text(55,60, );
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



