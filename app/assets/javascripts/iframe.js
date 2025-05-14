// Utilisation de jQuery (en supposant qu'il est déjà chargé)
(function($) {
  $(document).ready(function() {
    $('.ClassCSS')
      .click(function(){
        $(this).find('iframe').addClass('clicked');
      })
      .mouseleave(function(){
        $(this).find('iframe').removeClass('clicked');
      });
  });
})(jQuery);