$(function(){ 
  $('#userSignInput').on('keyup', function(e) {
    
  var inputLength = $(this).val().length
  $('#tiles').text(inputLength);
  updatePrice(inputLength)
 
  })
   
  $('#userFontInput').on('click', function(e) {
    
    inputFont = $(this).is(':checked'); 
    inputColor = $('#userColorInput').is(':checked');   

      updatePrice($('#userSignInput').val().length, inputFont, inputColor)
  })
  

  $('#userColorInput').on('click', function(e) {
    
    inputColor = $(this).is(':checked');
    inputFont = $('#userFontInput').is(':checked'); 
   
      updatePrice($('#userSignInput').val().length, inputFont, inputColor)
  })
  
  $('#confirmOrder').on('click', function(e) {
    event.preventDefault();

    
    var previewMsg =  $('#userSignInput').val();

    
    $('#defaultMsg').html(previewMsg);
    
    if(
    $('#userFontInput').is(':checked')
      ) { $('#defaultMsg')
       .addClass('deluxeFont');}
    else { $('#defaultMsg')
       .removeClass('deluxeFont');}
    
    
    if(
    $('#userColorInput').is(':checked')
      ) { $('#defaultMsg')
       .addClass('deluxeColor');}
    
    else { $('#defaultMsg')
       .removeClass('deluxeColor');}
    
    $('#previewScreen').toggle();
    

    
  })
  
  $('#cancelPreview').on('click', function(e) {
    event.preventDefault();
   
    $('#previewScreen').toggle();
    
  })
  
  
  $('#confirmPreview').on('click', function(e) {
    event.preventDefault();

    $('#previewScreen').text("Thanks for your purchase!");
    
    { $('#previewScreen')
       .addClass('thanksForPurchase');}
    
  })
  
})

function updatePrice(signLength, fontUpgrade, colorUpgrade) {

  var costPerTile = 5;
  
  if (fontUpgrade && colorUpgrade) { costPerTile = 8; }
  else if (fontUpgrade) { costPerTile = 6; }
  else if (colorUpgrade) { costPerTile = 7; ;}
  else { costPerTile = 5; }
  
  var subTotal = signLength * costPerTile;
  var shipping = 7;
  
  if(signLength !=0) { shipping = 7; }
  else { shipping = 0; }
  
  var grandTotal = subTotal + shipping;
  
  $('#subTotal').text('$'+subTotal);
  $('#shipping').text('$'+shipping);
  $('#grandTotal').text('$'+grandTotal);
  
  return grandTotal;
}