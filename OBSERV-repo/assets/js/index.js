

$(document).ready(function() {
    $(".mobileBody").fadeIn(1000)

    $(".card").click(function() {
        $("#home").hide()
        $("#product").show()
    })

    $("#homeNav").click(function () {
        $("#home").show()
        $("section").not("#home").hide()
    })

    
})