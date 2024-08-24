// Seleciona o Nav
let elementoNav = document.querySelector("nav");

// Adiciona uma classe para o Nav
elementoNav.className ="nav-menu";

// Aplica HTML do menu
const conteudoNav = elementoNav.innerHTML= `
<a href="./em-construcao.html">Norte</a>
<a href="./em-construcao.html">Nordeste</a>
<a href="./em-construcao.html">Centro-Oeste</a>
<a href="./index.html"
  ><img src="assets/images/14bits-nav-home.svg" alt="14-Bits"
/></a>
<a href="./regiao.html">Sudeste</a>
<a href="./em-construcao.html">Sul</a>
<a href="./sobre.html">Sobre</a>
<a href="./faq.html">FAQ</a>
`
// Seleciona a imagem
const elementoDivImg = document.querySelector(".img-gustavo");
//Adiciona o estilo Border Radius em 50%
elementoDivImg.style.borderRadius = '50%';

document.addEventListener('DOMContentLoaded', function(){

    // Seleciona todos os links dentro da <section>
    const elementoDivA = document.querySelectorAll("section a");
    
    // Aplica os estilos sobre todos os links
    elementoDivA.forEach(elementoDivA => {
        elementoDivA.style.textDecoration = 'none';
        elementoDivA.style.fontWeight = 'bold';

    })
});
