function select_validations(){
   var vali_var = true;
   console.log("llego a la funcion de validacion");

   if(($(".level2screen").text()==="")|| ($(".level1led").text()==="")){
      vali_var = false;
   }
  return vali_var
}