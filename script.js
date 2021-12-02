

function redlight() {
    // var appendGreenlight = document.getElementById("greenlight");
    // var crash = Math.floor(Math.random() * (2) + 1);
    // appendGreenlight.innerHTML = crash;
}

document.onkeydown = detectKey;
function detectKey(e) {
    if (document.getElementById("redlight").style.display == "block") {
        document.getElementById("lose").style.display = "block";
    }
    var posLeft = document.getElementById('box').offsetLeft;
    e = e || window.event;
    if (e.keyCode == '39') {
       // right arrow
        document.getElementById('box').style.marginLeft  = (posLeft + 1) + "px";
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
  var crash = Math.floor(Math.random() * (5) + 1);
  if (format(value, 1000, 60, 2) > crash) {
    document.getElementById("redlight").style.display = "block";
    document.getElementById("greenlight").style.display = "none";
  }
  document.querySelector('#s_minutes').textContent = format(value, 60000, 60, 2);
  
  if(!paused) {
    requestAnimationFrame(render);
  }
}