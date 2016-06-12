function select_validations(){
   var vali_var = true;
   if(($(".level2screen").val()==="")|| ($(".level1led").val()==="")){
      vali_var = false;
   }

  return vali_var
}