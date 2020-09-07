$(document).ready(function()
{

    // Nice Scroll 

    $("html").niceScroll();


    $('.carousel').carousel(
        {
        interval:5000
    });

    //Show Color Option Div When Click On The Gear

    $(".gear-check").click(function(){

        $(".color-option").fadeToggle();
    });
    
    // Change Theme Color On Click

    var colorLi = $(".color-option ul li");

    colorLi
    .eq(0).css("backgroundColor","#e41b17").end()
    .eq(1).css("backgroundColor","#e426d5").end()
    .eq(2).css("backgroundColor","#337ab7").end()
    .eq(3).css("backgroundColor","#ffd500").end()
    .eq(4).css("backgroundColor","#00ff40")

    colorLi.click(function(){

        $("link[href*='theme']").attr("href",$(this).attr("data-value"));

    });
    
    // Caching The Scroll Top Elemnt

    var scrollButton = $("#scroll-top");

    $(window).scroll(function(){

        console.log($(this).scrollTop() );

        if( $(this).scrollTop() >= 700  )
        {
            scrollButton.show();
        }
        else
        {
            scrollButton.hide();
        }

        

    });

    // Click On Button To Scroll Top

    scrollButton.click(function()
    {
        $("html,body").animate({scrollTop : 0},600);
    });

});

// Loading Screen
$(window).load(function()
{
    

    //Loading Elemnts
    $(".loading-overlay .sk-folding-cube").fadeOut(2000,
    function()
    {
        
        $("body").css("overflow","anto");

        $(this).parent().fadeOut(2000,
        function()
        {
            
            //Show The Scroll
            

            $(this).remove();
        });
    });

});