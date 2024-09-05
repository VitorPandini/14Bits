// Criando subtítulo e atribuindo conteúdo
let subtitulo = document.createElement("h2");
subtitulo.id = "região-sudeste";

// Criando parágrafo e atribuindo conteúdo
let paragrafo = document.createElement("p");
paragrafo.innerText = `A região Sudeste do Brasil é composta pelos estados de São Paulo, Rio de Janeiro, Minas Gerais e Espírito Santo. É a mais industrializada e economicamente desenvolvida do país, abrigando importantes centros urbanos, culturais e financeiros. E é considerada uma das mais desenvolvidas tecnologicamente do Brasil, juntamente com a região Sul. Segundo o Ranking Connected Smart Cities, 58 das 100 cidades mais inteligentes e conectadas do país estão localizadas na região Sudeste.

Além disso, é um polo tecnológico com diversas startups, centros de inovação e grandes empresas de tecnologia. A região Sudeste também é a mais rica do Brasil e possui a maior concentração populacional do país. A industrialização do país teve início na região Sudeste, e o estado de São Paulo é o principal centro industrial do Brasil.

Alguns dos ramos industriais mais importantes da região Sudeste são: Automobilística, Siderúrgica, Petroquímica, Naval, Petrolífera. Concentram-se 70% das despesas com desenvolvimento de tecnologias realizadas pelas empresas brasileiras. Somando-se as regiões Sudeste e Sul, esse percentual eleva-se para 90% (Braga e Matesco, 1986).

Clique nos links abaixo para descobrir mais sobre os estados da região Sudeste.`;

// Selecionando e adicionando elementos no DOM
let section = document.getElementById("regiao-sudeste");
section.appendChild(subtitulo);
section.appendChild(paragrafo);



