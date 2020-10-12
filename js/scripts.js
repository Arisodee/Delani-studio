//on hover portfolio-card display the portfolio-card-content


$(".portfolio-card").hover(function(){
    $(this).children(".portfolio-card-content").fadeToggle()
})

//on click what we do section is 

$(".what-we-do").click(function(){
    $(this).children(".we-do-content").slideToggle(1000)
})

function replyToCustomer(){
    // validate details entered

    let nameInput = document.getElementById("fullnames")
    if(nameInput.value === ""){
        alert("name is required")
        return
    }

    let emailInput = document.getElementById("email")

    if(emailInput.value === ""){
        alert("Please enter your email address")
        return
    }

    alert(nameInput.value +" we have received your message. Thank you for reaching out to us")
}