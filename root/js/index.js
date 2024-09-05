// Seleciona o modal
var modal = document.getElementById("modal");

var mapa = document.getElementById("mapa-brasil");

// Seleciona o span que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Ao passar por cima do mapa, abre o modal
mapa.onclick = function() {
  modal.style.display = "block";
}

// Ao clicar no x, fecha o modal
span.onclick = function() {
  modal.style.display = "none";
}

// Ao clicar fora do modal, fecha o modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}