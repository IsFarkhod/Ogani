$(document).ready(function () {


    $("#slider").slider({
        animate: "slow",
        range: true,
        min: 10,
        max: 540,
        values: [10, 540],
        slide: function (event, ui) {
            $("#rezult-polzunok").text("$" + ui.values[0] + " - " + "$" + ui.values[1]);
        }
    });
    $("#rezult-polzunok").text("$" + $("#slider").slider("values", 0) + " - " + "$" + $("#slider").slider("values", 1));

});
