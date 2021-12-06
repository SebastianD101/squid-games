window.onload = function() {
    document.getElementById("button-even").style.display = "none";
    document.getElementById("button-odd").style.display = "none";

    var num; 
    var bet = 0;
    var marbles = 5;
    var appendmarbles = document.getElementById("marbles");
    var appendBet = document.getElementById("bet");
    var buttonStart = document.getElementById('button-start');
    var buttonMax = document.getElementById('button-max');
    var buttonMin = document.getElementById('button-min');
    var buttonIncrease = document.getElementById('button-increase');
    var buttonDecrease = document.getElementById('button-decrease');
    var buttonEven = document.getElementById('button-even');
    var buttonOdd = document.getElementById('button-odd');

    buttonIncrease.onclick = function() {
        if (bet < marbles) {
            bet = bet + 1;
            marbles = marbles - 1;
        }
        appendBet.innerHTML = bet;
        appendmarbles.innerHTML = marbles;
    }

    buttonDecrease.onclick = function() {
        if (bet > 0) {
            bet = bet - 1;
            marbles = marbles + 1;
        }
        appendBet.innerHTML = bet;
        appendmarbles.innerHTML = marbles;
    }

    buttonMax.onclick = function() {

        bet = bet + marbles;
        marbles = 0;

        appendBet.innerHTML = bet;
        appendmarbles.innerHTML = marbles;
    }

    buttonMin.onclick = function() {
        appendBet.innerHTML = bet;
        appendmarbles.innerHTML = marbles;

        if (marbles > 0) {
        marbles = marbles + bet - 1;
        bet = 1;
        }

        appendBet.innerHTML = bet;
        appendmarbles.innerHTML = marbles;
    }

    buttonStart.onclick = function() {
        document.getElementById("button-start").style.display = "none";
        document.getElementById("button-increase").style.display = "none";
        document.getElementById("button-decrease").style.display = "none";
        document.getElementById("button-max").style.display = "none";
        document.getElementById("button-min").style.display = "none";

        document.getElementById("button-even").style.display = "block";
        document.getElementById("button-odd").style.display = "block";

        num = Math.floor(Math.random() * 2);
    }

    buttonEven.onclick = function() {
        if (num % 2 == 0) {
            marbles = marbles + bet;
            appendmarbles.innerHTML = marbles;
        } else {
            bet = 0
            appendBet.innerHTML = bet;
        }

        document.getElementById("button-start").style.display = "block";
        document.getElementById("button-start").style.display = "inline";
        document.getElementById("button-increase").style.display = "block";
        document.getElementById("button-increase").style.display = "inline";
        document.getElementById("button-decrease").style.display = "block";
        document.getElementById("button-decrease").style.display = "inline";
        document.getElementById("button-max").style.display = "block";
        document.getElementById("button-max").style.display = "inline";
        document.getElementById("button-min").style.display = "block";
        document.getElementById("button-min").style.display = "inline";

        document.getElementById("button-even").style.display = "none";
        document.getElementById("button-odd").style.display = "none";

        if (marbles + bet >= 10) {
            document.getElementById("win").style.display = "block";
        }
        if (marbles + bet == 0) {
            document.getElementById("lose").style.display = "block";
        }
    }

    buttonOdd.onclick = function() {
        if (num % 2 != 0) {
            marbles = marbles + bet;
            appendmarbles.innerHTML = marbles;
        } else {
            bet = 0
            appendBet.innerHTML = bet;
        }
        document.getElementById("button-start").style.display = "block";
        document.getElementById("button-start").style.display = "inline";
        document.getElementById("button-increase").style.display = "block";
        document.getElementById("button-increase").style.display = "inline";
        document.getElementById("button-decrease").style.display = "block";
        document.getElementById("button-decrease").style.display = "inline";
        document.getElementById("button-max").style.display = "block";
        document.getElementById("button-max").style.display = "inline";
        document.getElementById("button-min").style.display = "block";
        document.getElementById("button-min").style.display = "inline";

        document.getElementById("button-even").style.display = "none";
        document.getElementById("button-odd").style.display = "none";

        if (marbles + bet >= 10) {
            document.getElementById("win").style.display = "block";
        }
        if (marbles + bet == 0) {
            document.getElementById("lose").style.display = "block";
        }
    }
}