document.onkeydown = detectKey;
var finished = false;
function detectKey(e) {
    var posLeft = document.getElementById('box').offsetLeft;
    e = e || window.event;
    if (!finished) {
        if (e.keyCode == '39') {
            document.getElementById('box').style.marginLeft  = (posLeft+10)+"px";
        }
        if (e.keyCode == '17') {
            document.getElementById('box').style.marginLeft  = (posLeft-27)+"px";
        }
    }

    if (posLeft < 50) {
        finished = true;
        document.getElementById('p2Lose').style.display = "block";
        document.getElementById('p1Win').style.display = "block";
    }

    if (posLeft > 1100) {
        finished = true;
        document.getElementById('p1Lose').style.display = "block";
        document.getElementById('p2Win').style.display = "block";
    }
}