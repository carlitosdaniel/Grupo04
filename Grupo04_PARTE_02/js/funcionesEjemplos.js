//Animaciones
function myMove() {
    let id = null;
    const elem = document.getElementById("animate");   
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
        elem.style.right = pos + "px"; 
      }
    }
  }

//Eventos
function mOver(obj) {
  obj.innerHTML = "Gracias"
}

function mOut(obj) {
  obj.innerHTML = "Pon el Raton sobre mi"
}

function mDown(obj) {
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "Liberame";
}

function mUp(obj) {
  obj.style.backgroundColor="#D94A38";
  obj.innerHTML="Gracias!!";
}