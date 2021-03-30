function calculateTotal()
{
  let unit_price={
    VIPSuite: 100,
    GeneralAdmission: 75,
    Frontrowseating: 50,
    Backrowseating: 25    
  };
  let item_price={}
  
  item_price.VIPSuite = ($("#qty_VIP Suite").val() * unit_price.VIPSuite )
  $("#price_VIP Suite").val(item_price.VIPSuite);
  
  item_price.GeneralAdmission = ($("#qty_General Admission").val() * unit_price.GeneralAdmission )
  $("#price_General Admission").val(item_price.GeneralAdmission);
  
  item_price.Frontrowseating = ($("#qty_Front row seating").val() * unit_price.Frontrowseating )
  $("#price_Front row seating").val(item_price.Frontrowseating);  
  
  item_price.Backrowseating = ($("#qty_Back row seating").val() * unit_price.Backrowseating )
  $("#price_Back row seating").val(item_price.Backrowseating);    
  
  let total = item_price.VIPSuite + item_price.GeneralAdmission + item_price.Frontrowseating + item_price.Backrowseating;

 
  $("#total_value").text(total);
  
}

$(function()
 {
    $(".qty").on("change keyup",calculateTotal)
})