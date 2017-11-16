(function($) {
	
  // Use Image Title as Overlay
  $('.et_pb_image').each( function() {
    var imageContainer = this;
    $(this).find('img').each(function(){
      var titleAttr = $(this).attr('title');
      if (titleAttr != undefined) {
        var titleAttrHTML = '<span class="design_work_title">';
        titleAttrHTML += titleAttr;
        titleAttrHTML += '</span>';
        $(imageContainer).find('a').append(titleAttrHTML);
      }
    })
  });

})( jQuery );