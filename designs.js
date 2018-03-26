function makeGrid() {
    const height = $("#inputHeight").val();
    const width = $("#inputWidth").val();
    const table = $("#pixelCanvas").html("");

    for (let x = 0; x < height; x++) { // set grid height
        table.append("<tr></tr>");
    }
    for (let y = 0; y < width; y++) { // set grid width
        $("tr").each(function () {
            $(this).append("<td></td>");
        });
    }
};

$("#sizePicker").on("submit", function (evt) { // make grid
    makeGrid();
    evt.preventDefault();
});

let table = $("#pixelCanvas"); //draw canvas with default color value black
let color = $("#colorPicker").val();


table.on("click", "td", function () { //draw only click by click
    $(this).css("background-color", color);
});

table.on("mousemove", "td", function (evt) { // draw continuously with mouse move
    if (evt.buttons == 1) {
        $(this).css("background-color", color);
    }
});

$("#colorPicker").change(function () { // listen color picker value change
    let colorNow = $(this).val();

    table.on("click", "td", function () { //draw canvas with new value(click)
        $(this).css("background-color", colorNow);
    });

    table.on("mousemove", "td", function (evt) { //draw canvas with new value(mouse move)
        if (evt.buttons == 1) {
            $(this).css("background-color", colorNow);
        }
    });

});

table.on("contextmenu", "td", function () { //delete clicked color
    $(this).css("background-color", "#ffffff")
})