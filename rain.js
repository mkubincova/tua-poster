var noDrop = 458;

function randomNum(min, max) {
    return (Math.floor( Math.random() * (max - min + 1) ) + min);
}

function rain() {
    for (var i = 0; i < noDrop; i++) {
        var posLeft = randomNum(0, 421);
        var posTop = randomNum(-1000, 1000);

        $(".rain").append('<div class="drop" id="drop' + i + '"></div>');
        $("#drop" + i).css("left", posLeft);
        $("#drop" + i).css("top", posTop);
    }
}

function rainSound() {
    var audio = document.querySelector(".sound");
    audio.play();
    if (audio.muted == true) {
        audio.muted = false;
    } else if (audio.muted == false) {
        audio.muted = true;
    }

}
