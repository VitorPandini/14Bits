// Criando subtítulo e atribuindo conteúdo
let subtitulo = document.createElement("h2");
subtitulo.id = "indices-sudeste";
subtitulo.innerText = "Tecnologia no Agronegócio";

// Criando parágrafo e atribuindo conteúdo
let paragrafo = document.createElement("p");
paragrafo.innerText = `O Índice FIEC de Inovação dos Estados revela que São Paulo é o estado com o maior potencial de inovação do Brasil, tanto no ranking geral quanto nos indicadores específicos.
O Rio de Janeiro ocupa a quarta colocação.
A região Sudeste também concentra empresas de software agrícola.
O Estudo do Mercado Brasileiro de Software para o Agronegócio, coordenado pela Embrapa Informática Agropecuária (Campinas, SP), aponta, em levantamento inicial, que existem no País 114 empresas desenvolvedoras de software para uso no setor agrícola. De acordo com o estudo, 60% delas estão concentradas na região Sudeste, especialmente em São Paulo e Minas Gerais.
Em segundo lugar, está a região Sul, com 25% das empresas.
`;

// Selecionando e adicionando elementos no DOM
let section = document.getElementById("regiao-sudeste");
section.appendChild(subtitulo);
section.appendChild(paragrafo);
