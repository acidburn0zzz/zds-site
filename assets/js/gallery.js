/* ===== Zeste de Savoir ====================================================
   Author: Sandhose / Quentin Gliech
   ---------------------------------
   Gallery
   ========================================================================== */

(function($) {
  "use strict";

  var $btn = $(".toggle-gallery-view"),
      $galleryView = $(".gallery");

  var updateBtn = function() {
    if($galleryView.hasClass("list-view")) {
      $btn.text("Vue grille");
    }
    else {
      $btn.text("Vue liste");
    }
  };

  if($btn.length > 0) {
    $btn.on("click", function() {
      if($galleryView.hasClass("list-view")) 
        $galleryView.removeClass("list-view").addClass("grid-view");
      else 
        $galleryView.removeClass("grid-view").addClass("list-view");
      updateBtn();
    });

    updateBtn();
  }

  var updateCheckbox = function() {
    if(this.checked) $(this).parents(".gallery-item").addClass("selected");
    else $(this).parents(".gallery-item").removeClass("selected");
  };

  if($galleryView.length > 0) {
    $(".gallery-checkbox input[type=checkbox]").on("change", updateCheckbox).each(updateCheckbox);
  }
})(jQuery);