$(document).ready(function(){
    $(".feedback a").click(function(){
        var clicked = $(this).attr("class");
        console.log(clicked);
        $('#'+clicked).slideToggle();
    });

    /* to avoid CKE partial loading... */
    $('.form-wrapper').slideToggle();
});
