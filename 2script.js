appendBox = document.getElementById("box");
var crash;
var elim = 0;
var counter = 0;
function eliminated() {
    elim = 1;
    document.getElementById("lose").style.display = "block";
    document.getElementById("box").style.color = "red";
    document.getElementById("box").innerHTML = "X";
    document.getElementById("box").style.fontSize = "50px";
    document.getElementById("box").style.position = "fixed";
    document.getElementById('box').style.marginLeft  = (posLeft + 100) + "px";

}

document.onkeydown = detectKey;
function detectKey(e) {
    counter++;
    if (counter == 55) {
        if (elim == 0) {
          document.getElementById("win").style.display = "block";
        }
        elim = 1;
    }
    if (document.getElementById("redlight").style.display == "block") {
        eliminated();
        stopStopwatch();
    }
    var posLeft = document.getElementById('box').offsetLeft;
    e = e || window.event;
    if (e.keyCode == '39') {
       if (elim == 0) {
          crash = Math.floor(Math.random() * (4));
          document.getElementById('box').style.marginLeft  = (posLeft + 1) + "px";
       }
    }
    startStopwatch();

    let value = element.getAttribute("s_seconds");
    var appendGreenlight = document.getElementById("greenlight");
    appendGreenlight.innerHTML = value;
    if (value > crash) {
        document.getElementById("redlight").style.display = "none";
        document.getElementById("greenlight").style.display = "block";
    }

    render();
}

let offset = 0,
  paused = true;

render();
  
function startStopwatch(evt) {
  if (paused) {
    paused = false;
    offset -= Date.now();
    render();
  }
}


function stopStopwatch(evt) {
    if (!paused) {
      paused = true;
      offset += Date.now();
    }
  }

function resetStopwatch(evt) {
  if (paused) {
    offset = 0;
  } else {
    offset = -Date.now();
  }
}

function format(value, scale, modulo, padding) {
  value = Math.floor(value / scale) % modulo;
  return value.toString().padStart(padding, 0);
}

function render() {
    if (document.getElementById("redlight").style.display == "block") {
        document.addEventListener("keyup", function(event) {
            if (e.keyCode == '39') {
                document.getElementById("lose").style.display = "block";
            }
        });
        setTimeout(() => {  
            document.getElementById("greenlight").style.display = "block";
            document.getElementById("redlight").style.display = "none"; 
            resetStopwatch();
        }, 2000);
    }
  var value = paused ? offset : Date.now() + offset;

  document.querySelector('#s_ms').textContent = format(value, 1, 1000, 3);
  document.querySelector('#s_seconds').textContent = format(value, 1000, 60, 2);
  if (format(value, 1000, 60, 2) > crash) {
    document.getElementById("redlight").style.display = "block";
    document.getElementById("greenlight").style.display = "none";
  }
  document.querySelector('#s_minutes').textContent = format(value, 60000, 60, 2);
  
  if(!paused) {
    requestAnimationFrame(render);
  }
}