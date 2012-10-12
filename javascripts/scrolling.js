$( function(){

  $('.navbar a').click( function(event){
    event.preventDefault();
    $('body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top
      },
      1000
    );
  });

})  
;
