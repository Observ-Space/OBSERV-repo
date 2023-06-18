

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

    $(".bookButton").click(function () {
        $("#bookingInfo").show()
        $("section").not("#bookingInfo").hide()
    })

    $(".paymentButton").click(function () {
        $("#paymentInfo").show()
        $("section").not("#paymentInfo").hide()
    })

    $("#bookingsButton").click(function () {
        $("#bookings").show()
        $("section").not("#bookings").hide()
    })

    $("#payButton").click(function () {
        $("#bookingConfirmed").show()
        $("section").not("#bookingConfirmed").hide()
    })
})