# Receitas da Bia — Atividade III

Projeto de Beatriz com AngularJS (parte principal) e Vue.js (desafio extra).
Tema: um caderno de receitas simples.

## Executar

Abra o terminal na pasta que contém package.json.
No Windows: npm.cmd install e depois npm.cmd run dev.
No Codespaces: npm install e npm run dev, abrindo a porta 5173.
O endereço inicial permite escolher AngularJS ou Vue.js.
Para gerar a versão de produção: npm.cmd run build.

## Componentes e demonstração

1. Ajuda: abra e feche as dúvidas do acordeão.
2. Receitas: busque por nome e filtre Doces/Salgados pelo dropdown.
3. Use Anterior, Próxima e os números da paginação.
4. No preparo, avance as quatro etapas e veja a barra preencher.
5. Nas abas, alterne os ingredientes e o modo de preparo da panqueca.
6. Guarde a etapa: a notificação aparece e some após 3,5 segundos.

## Código

AngularJS: app.js reúne o módulo e controlador; data.js contém factory e serviço;
directives.js define as seis diretivas, com atributos e callbacks.
Vue: App.vue organiza dados, computed, métodos e mounted.
components contém os seis componentes com props e eventos.
O progresso usa localStorage e fica salvo apenas neste navegador.
As receitas são conteúdo demonstrativo.

Os vídeos explicativos obrigatórios ainda precisam ser gravados pela aluna.
