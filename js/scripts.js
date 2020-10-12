//on hover portfolio-card display the portfolio-card-content


$(".portfolio-card").hover(function(){
    $(this).children(".portfolio-card-content").fadeToggle()
})

//on click what we do section is 

$(".what-we-do").click(function(){
    $(this).children(".we-do-content").slideToggle(1000)
})
