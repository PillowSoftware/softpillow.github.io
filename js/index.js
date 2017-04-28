// $(document).on('click', 'a', function(event){
//     event.preventDefault();
    
//     $('html, body').animate({
//         scrollTop: $( $.attr(this, 'href') ).offset().top
//     }, 500);
// });

$('.scroll_link').click(function(){
    
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});
