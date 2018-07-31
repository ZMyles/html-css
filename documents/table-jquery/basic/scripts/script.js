"use strict"

$(document).ready(() => {
    let table;

        $(".open-seat").on("click", (e) => {
            table = $(e.target);
            $("form").show();
        })

        //-displays hidden text box --//
        $("button").click(function() {
            $("form").hide();  
            $(this).removeClass("open-seat").addClass("reserved");
        });

        $(".escape").click(function() {
            $("form").hide();
        })

});
