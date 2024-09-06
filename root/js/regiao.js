/* Função pra renderizar cards verdes dinamicamente */
function atualizaCardVerde() {
  const cards = document.querySelectorAll('section > div'); // Seleciona os <div> dentro de <section>, ou seja, os cards
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