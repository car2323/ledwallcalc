$(document).on("page:load ready", function () {

     $(".js-createpdf").on("click",function (event){

    
       var namefile = prompt("Please enter your file NAME: ", $(".modelpanelpdf").text()+" "+$(".js-screenname").text());
    
        if (namefile != null) 
        {
        
             create_PDFequip(namefile);
        }
       // else
       // {
       //     $(".js-createpdf").trigger("click");  
       // }
       
  
      
   });
});
function create_PDFequip(namefile){

  var doc = new jsPDF();


  
  doc.setFont("helvetica");
  doc.setFontSize(30);
  doc.setFontSize(12);
  doc.text(10,30,"");
  doc.text(10,40,"");
  doc.text(10,50, "Model: ");
  doc.text(10,60, "Number of panels in Width: ");
  doc.text(10,70, "Number of panels in Heigth: ");
  doc.text(10,80, "Total LED panels: ");
  doc.text(10,90, "Resolution LED wall: ");
  doc.text(10,100, "Aspect Ratio:");
  doc.text(10,110, "Actual Width size: ");
  doc.text(10,120, "Actual Heigth size:  ");
  doc.text(10,130, "Total power consuming 110V: ");
  doc.text(10,140, "Total feed 20 amp in 110V: ");
  doc.text(10,150, "Total power consuming 220V: ");
  doc.text(10,160, "Total feed 20 amp in 220V: ");
  doc.text(10,170, "Total Weight without bumpers: ");
  doc.text(10,180, "Total bumpers: Factory Bumper Double: ");
  doc.text(10,190, "Total bumpers: Factory Bumper Single: ");
  doc.text(10,200, "Total Weight with bumpers: ");
  


  doc.setFontType("bold");
  doc.setTextColor(150);
    doc.text(35,50, $(".modelpanelpdf").text()+" Size or LED wall: "+ $(".js-screenname").text());
    doc.text(65,60, $("#js-panels_w").val());
	  doc.text(65,70, $("#js-panels_h").val());
    doc.text(65,80, $("#totalpanels_permit").text());
    doc.text(65,90, $(".js-totalpixelwpdf").text()+"w X "+$(".js-totalpixelhpdf").text()+"h pixels");
    doc.text(65,100, $(".js-aspectratiopdf").text());
    doc.text(45,110, $(".js-actualsizepdf_w").text()+" inch or "+ $(".js-actualsize_feedpdf_w").text()+" feet diff. "+ $(".js-actualsizepdfdiff_w").text() + " inch:");
    doc.text(46,120, $(".js-actualsizepdf_h").text()+" inch or "+ $(".js-actualsize_feedpdf_h").text()+" feet diff. "+ $(".js-actualsizepdfdiff_h").text() + " inch:");

    doc.text(70,130, $(".js-totalamppdf").text()+" amp");
    doc.text(70,140, $(".js-totalamppdfnumber").text());
    doc.text(70,150, $(".js-totalamppdf2").text()+" amp");
    doc.text(70,160, $(".js-totalamppdfnumber2").text());
    doc.text(70,170, $(".js-totalscreenpdfweigth").text()+" Lbs");
    doc.text(90,180, $(".js-bumperpdfnumberd").text());
    doc.text(90,190, $(".js-bumperpdfnumbers").text());
    doc.text(70,200, $(".js-bumperpdfweigth").text()+" Lbs");
  
    

	// doc.text(55,80, one_equipment.serial);
	// doc.text(55,90, one_equipment.brand);
	// var price=one_equipment.original_price.toString();
	// doc.text(55,100, one_equipment.purchased_date);

 //    doc.text(175,140, $(".js-pricelessrental").text() +"$");
 //    doc.text(175,150, $(".js-priceplusmainte").text()+"$");
 //    doc.text(175,160, $(".js-depretaicioninfo").text()+"$");
  
    
 //    doc.text(175,190, $(".js-timenow").text());

	//   doc.setTextColor(255, 0, 0);
 //        doc.text(55,110, price+" $");
 //        doc.text(175,170, $(".js-profit").text()+"$");
 //        doc.text(10,170, "PROFIT: ");
        

 //     doc.setTextColor(255, 122, 0)
 //        doc.text(10,180, "RUNNING TIME: ");
 //        doc.text(165,180, $(".js-runningtime").text()+" years");
 //        doc.text(185,180, $(".js-runningtimedays").text()+"days");
 //     doc.setTextColor(255, 255, 255);
 //     doc.setFontSize(30);
 //        doc.text(58,20,"payEquipment.com");
     

 //doc.save(one_equipment.name +"_"+ one_equipment.serial);
    doc.save(namefile);
};



