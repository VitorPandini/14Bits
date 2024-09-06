/* Toggle pro menu de hambúrguer mobile */
document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;
  const nav = document.getElementsByTagName('nav')[0];
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const linksWrapper = document.getElementById('nav-links');
  const links = document.querySelectorAll('#nav-links a');

  hamburgerBtn.addEventListener('click', function () {
    nav.classList.toggle('open');
    linksWrapper.classList.toggle('active');
    body.classList.toggle('no-scroll');
  });

  links.forEach(link => {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      linksWrapper.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  });
});

/* Esconde o menu de navegação em janelas maiores que 768px */
window.addEventListener('resize', function () {
  const nav = document.getElementsByTagName('nav')[0];
  const linksWrapper = document.getElementById('nav-links');

  if (window.innerWidth > 768) {
    nav.classList.remove('open');
    linksWrapper.classList.remove('active');
  }
});