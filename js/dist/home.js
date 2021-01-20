$(function() {
    $('.skitter-large').skitter({
        fullscreen: true,
        dots: false
    });
  });



  


  $(window).scroll(function(){

    let top = $(window).scrollTop();

    if( top > 50 )
    {
        $(".navbar").css({"backgroundColor":"#007cba"} );

    }
    else
    {
            $(".navbar").css({"backgroundColor":"transparent"} );

    }
})
