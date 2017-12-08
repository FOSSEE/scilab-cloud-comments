(function($) {
$(document).ready(function(){
    /* to avoid CKE partial loading... */
//    $('.formwrapper').slideToggle();

    /* reply button action */
    $(".btn-reply a").click(function(){
        var clicked = $(this).attr("class");
        $('#'+clicked).slideToggle();
        console.log($(this).html());
        if ($(this).html() == "Reply") {
            $(this).html("Close");
        } else {
            $(this).html("Reply");
        }
    });

    /* delete link */
    $(".delete").click(function(e){
        sure = confirm("Are you sure ?");
        console.log(sure);
        if (sure) {
            window.location.href = $(this).attr("href");
        }
        else {
            console.log("nopees");
        }
        e.preventDefault();
    });
});
})(jQuery);
