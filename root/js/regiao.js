let titulo = document.createElement("h2");

// Manipulando o elemento
titulo.id = "titulo";
titulo.innerText = "Região Sudeste";

// Capturando o "elemento pai" dos elementos 'titulo' e 'produto'
let body = document.querySelector("body");

// Adicionando o elemento 'titulo' no DOM
body.appendChild(titulo);

//Criando elemento texto//
let texto = document.createElement("section");

// Manipulando o elemento
texto.innerHTML = `
<h2> Região Sudeste </h2>
<section>
 <p> O Índice FIEC de Inovação dos Estados revela que São Paulo é o estado com o maior potencial de inovação do Brasil, tanto no ranking geral quanto nos indicadores específicos.
O Rio de Janeiro ocupa a quarta colocação.
A região Sudeste também concentra empresas de software agrícola.
O Estudo do Mercado Brasileiro de Software para o Agronegócio, coordenado pela Embrapa Informática Agropecuária (Campinas, SP), aponta, em levantamento inicial, que existem no País 114 empresas desenvolvedoras de software para uso no setor agrícola. De acordo com o estudo, 60% delas estão concentradas na região Sudeste, especialmente em São Paulo e Minas Gerais.
Em segundo lugar, está a região Sul, com 25% das empresas.</p>
</section>
`;

// Adicionando o elemento no dom
body.appendChild(texto);
