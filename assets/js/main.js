$("#numberPeople").on("input", function (e) {
    let result = $("input[type='radio']:checked");
    let radioval = 0;
    let price = parseInt($("#numberBill").val());
    let people = parseInt($("#numberPeople").val());
    let all = price / people;
    let float = parseFloat(all).toFixed(2);
    $("#tipTotal").html("$" + float);
    if (result.length > 0) {
        radioval = parseFloat(result.val());
        let total = float * (radioval / 100);
        $("#tipAmount").html("$" + total.toFixed(2));
    } else {
        radioval = 0;

    }

    if ($("#tipTotal").text() == "$NaN" || $("#tipAmount").text() == "$NaN") {
        $("#tipAmount").text("$0.00");
        $("#tipTotal").text("$0.00");

    }
    if ($("#numberPeople").val() == 0 || $("#numberPeople").val() == "0") {
        $("#checkZero").text("can't be zero|empty");
        $("#checkZero").removeClass("d-none");
        $("#tipAmount").text("$0.00");
        $("#tipTotal").text("$0.00");
    }
    else {
        $("#checkZero").addClass("d-none");
    }

})

$(".btn-reset").click(function () {
    $("#numberBill").val("");
    $("#numberPeople").val("");
    $("#tipAmount").html("$0.00");
    $("#tipTotal").html("$0.00");
})