var step1;
var step2;
var step3;
var step4;
var step5;
var step6;

function myFunction() {
    step1 = Math.floor(Math.random() * 2);
    step2 = Math.floor(Math.random() * 2);
    step3 = Math.floor(Math.random() * 2);
    step4 = Math.floor(Math.random() * 2);
    step5 = Math.floor(Math.random() * 2);
    step6 = Math.floor(Math.random() * 2);

    document.getElementById("1").style.backgroundColor = "yellow";
    document.getElementById("7").style.backgroundColor = "yellow";
}

function one() {
    if (step1 == 0) {
        document.getElementById("1").style.visibility = "hidden";
        document.getElementById("7").style.backgroundColor = "green";
        document.getElementById("eliminated").style.display = "block";
        document.getElementById("id1").style.color = "red";
        document.getElementById("revive").style.display = "block";
    } else {
        document.getElementById("1").style.backgroundColor = "rgba(168, 204, 215, 0.75)";
        document.getElementById("7").style.backgroundColor = "rgba(168, 204, 215, 0.75)";
        document.getElementById("2").style.backgroundColor = "yellow";
        document.getElementById("8").style.backgroundColor = "yellow";
    }
}

function seven() {
    if (step1 == 1) {
        document.getElementById("7").style.visibility = "hidden";
        document.getElementById("1").style.backgroundColor = "green";
        document.getElementById("eliminated").style.display = "block";
        document.getElementById("id1").style.color = "red";
        document.getElementById("revive").style.display = "block";
    } else {
        document.getElementById("1").style.backgroundColor = "rgba(168, 204, 215, 0.75)";
        document.getElementById("7").style.backgroundColor = "rgba(168, 204, 215, 0.75)";
        document.getElementById("2").style.backgroundColor = "yellow";
        document.getElementById("8").style.backgroundColor = "yellow";
    }
}

function two() {
    if (step2 == 0) {
        document.getElementById("2").style.visibility = "hidden";
        document.getElementById("8").style.backgroundColor = "green";
        document.getElementById("eliminated").style.display = "block";
        document.getElementById("id1").style.color = "red";
        document.getElementById("revive").style.display = "block";
    } else {
        document.getElementById("2").style.backgroundColor = "rgba(168, 204, 215, 0.75)";
        document.getElementById("8").style.backgroundColor = "rgba(168, 204, 215, 0.75)";
        document.getElementById("3").style.backgroundColor = "yellow";
        document.getElementById("9").style.backgroundColor = "yellow";
    }
}

function eight() {
    if (step2 == 1) {
        document.getElementById("8").style.visibility = "hidden";
        document.getElementById("2").style.backgroundColor = "green";
        document.getElementById("eliminated").style.display = "block";
        document.getElementById("id1").style.color = "red";
        document.getElementById("revive").style.display = "block";
    }
    else {
        document.getElementById("2").style.backgroundColor = "rgba(168, 204, 215, 0.75)";
        document.getElementById("8").style.backgroundColor = "rgba(168, 204, 215, 0.75)";
        document.getElementById("3").style.backgroundColor = "yellow";
        document.getElementById("9").style.backgroundColor = "yellow";
    }
}

function three() {
    if (step3 == 0) {
        document.getElementById("3").style.visibility = "hidden";
        document.getElementById("9").style.backgroundColor = "green";
        document.getElementById("eliminated").style.display = "block";
        document.getElementById("id1").style.color = "red";
        document.getElementById("revive").style.display = "block";
    }
    else {
        document.getElementById("3").style.backgroundColor = "rgba(168, 204, 215, 0.75)";
        document.getElementById("9").style.backgroundColor = "rgba(168, 204, 215, 0.75)";
        document.getElementById("4").style.backgroundColor = "yellow";
        document.getElementById("10").style.backgroundColor = "yellow";
    }
}

function nine() {
    if (step3 == 1) {
        document.getElementById("9").style.visibility = "hidden";
        document.getElementById("3").style.backgroundColor = "green";
        document.getElementById("eliminated").style.display = "block";
        document.getElementById("id1").style.color = "red";
        document.getElementById("revive").style.display = "block";
    }
    else {
        document.getElementById("3").style.backgroundColor = "rgba(168, 204, 215, 0.75)";
        document.getElementById("9").style.backgroundColor = "rgba(168, 204, 215, 0.75)";
        document.getElementById("4").style.backgroundColor = "yellow";
        document.getElementById("10").style.backgroundColor = "yellow";
    }
}

function four() {
    if (step4 == 0) {
        document.getElementById("4").style.visibility = "hidden";
        document.getElementById("10").style.backgroundColor = "green";
        document.getElementById("eliminated").style.display = "block";
        document.getElementById("id1").style.color = "red";
        document.getElementById("revive").style.display = "block";
    }
    else {
        document.getElementById("4").style.backgroundColor = "rgba(168, 204, 215, 0.75)";
        document.getElementById("10").style.backgroundColor = "rgba(168, 204, 215, 0.75)";
        document.getElementById("5").style.backgroundColor = "yellow";
        document.getElementById("11").style.backgroundColor = "yellow";
    }
}

function ten() {
    if (step4 == 1) {
        document.getElementById("10").style.visibility = "hidden";
        document.getElementById("4").style.backgroundColor = "green";
        document.getElementById("eliminated").style.display = "block";
        document.getElementById("id1").style.color = "red";
        document.getElementById("revive").style.display = "block";
    }
    else {
        document.getElementById("4").style.backgroundColor = "rgba(168, 204, 215, 0.75)";
        document.getElementById("10").style.backgroundColor = "rgba(168, 204, 215, 0.75)";
        document.getElementById("5").style.backgroundColor = "yellow";
        document.getElementById("11").style.backgroundColor = "yellow";
    }
}

function five() {
    if (step5 == 0) {
        document.getElementById("5").style.visibility = "hidden";
        document.getElementById("11").style.backgroundColor = "green";
        document.getElementById("eliminated").style.display = "block";
        document.getElementById("id1").style.color = "red";
        document.getElementById("revive").style.display = "block";
    }
    else {
        document.getElementById("5").style.backgroundColor = "rgba(168, 204, 215, 0.75)";
        document.getElementById("11").style.backgroundColor = "rgba(168, 204, 215, 0.75)";
        document.getElementById("6").style.backgroundColor = "yellow";
        document.getElementById("12").style.backgroundColor = "yellow";
    }
}

function eleven() {
    if (step5 == 1) {
        document.getElementById("11").style.visibility = "hidden";
        document.getElementById("5").style.backgroundColor = "green";
        document.getElementById("eliminated").style.display = "block";
        document.getElementById("id1").style.color = "red";
        document.getElementById("revive").style.display = "block";
    }
    else {
        document.getElementById("5").style.backgroundColor = "rgba(168, 204, 215, 0.75)";
        document.getElementById("11").style.backgroundColor = "rgba(168, 204, 215, 0.75)";
        document.getElementById("6").style.backgroundColor = "yellow";
        document.getElementById("12").style.backgroundColor = "yellow";
    }
}

function six() {
    if (step6 == 0) {
        document.getElementById("6").style.visibility = "hidden";
        document.getElementById("12").style.backgroundColor = "green";
        document.getElementById("eliminated").style.display = "block";
        document.getElementById("id1").style.color = "red";
        document.getElementById("revive").style.display = "block";
    }
    else {
        document.getElementById("id1").style.color = "green";
        document.getElementById("win").style.display = "block";
    }
}

function twelve() {
    if (step6 == 1) {
        document.getElementById("12").style.visibility = "hidden";
        document.getElementById("6").style.backgroundColor = "green";
        document.getElementById("eliminated").style.display = "block";
        document.getElementById("id1").style.color = "red";
        document.getElementById("revive").style.display = "block";
    }
    else {
        document.getElementById("id1").style.color = "green";
        document.getElementById("win").style.display = "block";
    }
}

function reset() {
    document.getElementById("id1").style.color = "white";
    document.getElementById("win").style.display = "none";
    document.getElementById("eliminated").style.display = "none";
    document.getElementById("revive").style.display = "none";

    document.getElementById("1").style.visibility = "visible";
    document.getElementById("2").style.visibility = "visible";
    document.getElementById("3").style.visibility = "visible";
    document.getElementById("4").style.visibility = "visible";
    document.getElementById("5").style.visibility = "visible";
    document.getElementById("6").style.visibility = "visible";
    document.getElementById("7").style.visibility = "visible";
    document.getElementById("8").style.visibility = "visible";
    document.getElementById("9").style.visibility = "visible";
    document.getElementById("10").style.visibility = "visible";
    document.getElementById("11").style.visibility = "visible";
    document.getElementById("12").style.visibility = "visible";

    document.getElementById("1").style.backgroundColor = "rgba(168, 204, 215, 0.75)";
    document.getElementById("2").style.backgroundColor = "rgba(168, 204, 215, 0.75)";
    document.getElementById("3").style.backgroundColor = "rgba(168, 204, 215, 0.75)";
    document.getElementById("4").style.backgroundColor = "rgba(168, 204, 215, 0.75)";
    document.getElementById("5").style.backgroundColor = "rgba(168, 204, 215, 0.75)";
    document.getElementById("6").style.backgroundColor = "rgba(168, 204, 215, 0.75)";
    document.getElementById("7").style.backgroundColor = "rgba(168, 204, 215, 0.75)";
    document.getElementById("8").style.backgroundColor = "rgba(168, 204, 215, 0.75)";
    document.getElementById("9").style.backgroundColor = "rgba(168, 204, 215, 0.75)";
    document.getElementById("10").style.backgroundColor = "rgba(168, 204, 215, 0.75)";
    document.getElementById("11").style.backgroundColor = "rgba(168, 204, 215, 0.75)";
    document.getElementById("12").style.backgroundColor = "rgba(168, 204, 215, 0.75)";

    myFunction();
}

