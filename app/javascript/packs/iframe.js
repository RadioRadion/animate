$('.ClassCSS')
    .click(function(){
            $(this).find('iframe').addClass('clicked')})
    .mouseleave(function(){
            $(this).find('iframe').removeClass('clicked')});

// document.querySelectorAll(".ClassCSS").forEach(lector => lector.addEventListener('click', event => {
//   console.log(event.currentTarget);
// }));
