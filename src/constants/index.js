  export const navLists = ["@imanav07", "About", "Experience", "Contact"];
  
  export var $root = $('html, body');
  $('a[href^="#"]').click(function () {
      $root.animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
  
      return false;
  });

  
