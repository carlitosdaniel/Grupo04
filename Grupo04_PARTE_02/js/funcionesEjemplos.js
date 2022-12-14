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

//Navegacion

function navegar() 
{
  document.getElementById("id02").innerHTML = document.getElementById("id01").childNodes[0].nodeValue;
}

function nodo() {
  document.getElementById("id04").innerHTML = document.getElementById("id03").firstChild.nodeValue;
}

//ListadeNodos
function listaNodos() {
  const myNodelist = document.querySelectorAll("p");
  for (let i = 0; i < myNodelist.length; i++) {
    myNodelist[i].style.color = "blue";
  }
}

//Colecciones
function colecciones() {
  const myNodelist = document.querySelectorAll("h2");
  for (let i = 0; i < myNodelist.length; i++) {
    myNodelist[i].style.color = "purple";
  }
}