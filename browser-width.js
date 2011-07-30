/**
 *
 * Author: Thomas Davis
 * Twitter: @TEDavis
 * Homepage: http://designedbythomas.co.uk/
 * Code in action: http://designedbythomas.co.uk/what-is-my-browser-width
 * 
 **/


(function($){
  //detect the width on page load
  $(document).ready(function(){
    var current_width = $(window).width();
    $(".width-value").text(current_width);
  });

  //update the width value when the browser is resized
  $(window).resize(function(){
    /**
     *
     * Here you could do width calculations such as
     * adding a "smallest" body class when the width
     * reaches below 400px.
     * 
     **/
    var current_width = $(window).width();
    $(".width-value").text(current_width);
  });

})(jQuery);