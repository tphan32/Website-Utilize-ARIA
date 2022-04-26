function changeDMStyle (htmlColor, htmlBg, h2Color) {
    let html = $("html");    
    html.css('color', htmlColor);
    html.css('background-color', htmlBg);
    $("h2").each(function() {
        $(this).css("color", h2Color);
    });
}

function Darkmode() {
    let isDM = localStorage.getItem("isDM");
    if (!isDM || isDM == "false") {
        changeDMStyle("antiquewhite", "dimgray", "coral");
        localStorage.setItem("isDM", "true");
    }
    else {
        changeDMStyle("black", "#f1f4f60c", "black");
        localStorage.setItem("isDM", "false");
    }
}

$(document).ready(function() {
    $("#dark-mode").on("click", Darkmode);
    let isDM = localStorage.getItem("isDM");
    if(isDM === "true") {
        changeDMStyle("antiquewhite", "dimgray", "coral");
    }
})
