# 608 Flores - Vitrine digital

Um front-end responsivo e sofisticado desenvolvido para a boutique floral 608 Flores. O projeto funciona como um catálogo digital de alto padrão que foca no atendimento humanizado: em vez de um checkout tradicional, o site utiliza JavaScript para capturar o arranjo selecionado e redirecionar o cliente para o WhatsApp com uma mensagem de compra pré-preenchida.


# Veja o site aqui!

https://aalexdev.github.io/608-Flores/


## Funcionalidades

- **Seção Hero:** Apresentação da marca com elementos visuais customizados.
- **Catálogo de Produtos:** Cards padronizados para exibição de plantas e arranjos, com fotos cortadas proporcionalmente e alinhamento automático de botões de ação.
- **Sobre Nós:** Seção dedicada à história da empresa, valores e detalhamento da localização no DF.
- **Avaliações de Clientes:** Apresentação de depoimentos com classificação em estrelas e link para o Google Maps.
- **Seção de Localização:** Informações completas de endereço e horário de funcionamento, acompanhadas de integração com mapa.
- **Efeitos Visuais Interativos:** Animação customizada em JavaScript/CSS com queda contínua de folhas em segundo plano.

## Tecnologias Utilizadas

- **HTML5:** Estruturação semântica das páginas.
- **CSS3:** Estilização moderna utilizando Flexbox, gradientes, animações em keyframes e corte inteligente de imagens via `object-fit`.
- **JavaScript:** Controle dinamizado da geração e movimentação dos elementos animados da página.
- **Google Fonts:** Tipografia serifada baseada na fonte Playfair Display.

## Estrutura do Projeto

```text
├── index.html           # Página inicial do site
├── localizacao          # Página sobre a localização e como chegar até o local da floricultura
├── avaliacoes.html      # Página das avaliações que a floricultura tem no google
├── plantas.html         # Vitrine digital dos produtos da floricultura
├── sobre.html           # Página detalhada sobre a história da empresa
├── style.css            # Arquivo principal de estilos da aplicação
├── script.js            # Script responsável pelas animações interativas
├── fontes.css           # Arquivo principal das fontes utilizadas no site
└── src                  # Pasta para organização de recursos do projeto
      └── imagens        # Pasta para imagens e arquivos de mídia do projeto
