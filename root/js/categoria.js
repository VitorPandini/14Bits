// Seleciona a imagem
const elementoDivImg = document.querySelector(".img-gustavo");
//Adiciona o estilo Border Radius em 50%
elementoDivImg.style.borderRadius = '50%';

// Efeito ao passar o mouse sobre a imagem
document.addEventListener('DOMContentLoaded', () => {
  const img = document.querySelector('.img-gustavo');

  img.addEventListener('mouseover', () => {
      // Aplicar os efeitos ao passar o mouse
      img.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.5)';
      img.style.transform = 'scale(1.1)';
      img.style.filter = 'brightness(1.0) contrast(1.2)';
  });

  img.addEventListener('mouseout', () => {
      // Remover os efeitos quando o mouse sai
      img.style.boxShadow = 'none';
      img.style.transform = 'scale(1)';
      img.style.filter = 'none';
  });
});

document.addEventListener('DOMContentLoaded', function(){

    // Seleciona todos os links dentro da <section>
    const elementoDivA = document.querySelectorAll("section a");
    
    // Aplica os estilos sobre todos os links
    elementoDivA.forEach(elementoDivA => {
        elementoDivA.style.textDecoration = 'none';
        elementoDivA.style.fontWeight = 'bold';

    })
});

// Adiciona o efeito no menu nav cor ao passar o mouser
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = '#FFD23F'; // var(--amarelo)
  });
  link.addEventListener('mouseout', () => {
    link.style.color = ''; // Voltar à cor original
  });
});

