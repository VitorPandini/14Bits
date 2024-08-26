/* Toggle pro menu de hambúrguer mobile */
document.addEventListener('DOMContentLoaded', function () {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navLinks = document.getElementById('nav-links');

  hamburgerBtn.addEventListener('click', function () {
    navLinks.classList.toggle('active'); // Alterna a classe 'active' no contêiner de links de navegação
  });
});

/* Função pra renderizar cards verdes dinamicamente */
function atualizaCardVerde() {
  const cards = document.querySelectorAll('a > article'); // Seleciona os <article> dentro de <a>, ou seja, os cards
  const larguraTela = window.innerWidth; // Largura atual da janela

  // Remove as classes 'card-verde' pra começar
  cards.forEach(card => card.classList.remove('card-verde'));

  if (larguraTela <= 576) {
    // Em telas menores, aplica 'card-verde' em cards com índice ímpar, com início em índice 0
    cards.forEach((card, indice) => {
      if (indice % 2 === 0) {
        card.classList.add('card-verde');
      }
    });
  } else {
    // Em telas maiores, aplica 'card-verde' em cards divisíveis por 4, com início em índice 0
    cards.forEach((card, indice) => {
      if (indice % 3 === 0) {
        card.classList.add('card-verde');
      }
    });
  }
}

// Chama a função ao carregar a página
atualizaCardVerde();

// Chama a função quando muda a largura da página
window.addEventListener('resize', atualizaCardVerde);