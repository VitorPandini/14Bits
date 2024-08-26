let titulo = document.createElement("h1");

// Manipulando o elemento
titulo.id = "titulo";
titulo.innerText = "Região Sudeste";

// Capturando o "elemento pai" dos elementos 'titulo' e 'produto'
let body = document.querySelector("body");

// Adicionando o elemento 'titulo' no DOM
body.appendChild(titulo);

let texto = document.createElement("section");

// Manipulando o elemento
texto.innerHTML = `
<section>
 <p>A região Sudeste do Brasil é composta pelos estados de São Paulo, Rio de Janeiro, Minas Gerais e Espírito Santo. 
    <br>É a mais industrializada e economicamente desenvolvida do país, abrigando importantes centros urbanos, culturais e financeiros. 
    <br>Além disso, é um polo tecnológico com diversas startups, centros de inovação e grandes empresas de tecnologia.</p>
    <p>Também, é considerada um polo de inovação e conectividade, com 58 das 100 cidades mais inteligentes e conectadas do país.
    <br>O estado de São Paulo é considerado o estado com o maior potencial de inovação no Brasil, tanto no ranking geral quanto nos indicadores específicos. 
    <br>Outras cidades da região que se destacam no desenvolvimento tecnológico e urbano são Niterói e Barueri.</p>
</section>
`;

// Adicionando o elemento no dom
body.appendChild(texto)