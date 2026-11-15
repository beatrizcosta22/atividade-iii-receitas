angular.module("ucsalApp").factory("NoticiasService", function () {
  var publicacoes = [
    {
      id: 1,
      titulo: "Atualize seus contatos acadêmicos",
      data: "2026-11-12",
      categoria: "Notícia",
      imagem: "img/campus.svg",
      texto:
        "Exemplo acadêmico: mantenha e-mail e telefone atualizados para receber comunicados acadêmicos. Este comunicado é fictício e não representa um calendário oficial.",
    },
    {
      id: 2,
      titulo: "Extensão: tecnologia para a comunidade",
      data: "2026-11-13",
      categoria: "Evento",
      imagem: "img/evento.svg",
      texto:
        "Exemplo acadêmico: alunos dos campi Pituaçu e Federação organizam oficinas de informática para a comunidade. Programação demonstrativa, sem inscrições reais.",
    },
    {
      id: 3,
      titulo: "Biblioteca: orientação para trabalhos",
      data: "2026-11-14",
      categoria: "Notícia",
      imagem: "img/campus.svg",
      texto:
        "Exemplo acadêmico: a biblioteca apresenta orientações sobre pesquisa bibliográfica e organização de referências. Consulte os canais oficiais para horários reais.",
    },
    {
      id: 4,
      titulo: "SEMOC: mostra de projetos estudantis",
      data: "2026-11-15",
      categoria: "Evento",
      imagem: "img/evento.svg",
      texto:
        "Exemplo acadêmico: mostra de projetos de Engenharia de Software com apresentações e debates. Evento fictício no campus Federação.",
    },
  ];
  return {
    listar: function () {
      return publicacoes;
    },
    categorias: function () {
      return ["Notícia", "Evento"];
    },
    buscar: function (id) {
      return publicacoes.find(function (n) {
        return n.id === Number(id);
      });
    },
  };
});
