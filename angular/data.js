export default function (app) {
  app.factory("RecipeData", function () {
    return {
      items: [
        { name: "Panqueca", category: "Salgados" },
        { name: "Omelete", category: "Salgados" },
        { name: "Sanduíche", category: "Salgados" },
        { name: "Bolo de banana", category: "Doces" },
        { name: "Brigadeiro", category: "Doces" },
        { name: "Salada de frutas", category: "Doces" },
      ],
      faq: [
        {
          title: "Como escolher uma receita?",
          content: "Use a busca pelo nome ou escolha doces e salgados.",
        },
        {
          title: "Onde fica salvo o preparo?",
          content: "O botão de salvar guarda a etapa neste navegador.",
        },
      ],
      tabs: [
        {
          title: "Ingredientes",
          content: "Panqueca: 1 ovo, 1 xícara de leite e 1 xícara de farinha.",
        },
        {
          title: "Modo de preparo",
          content:
            "Misture os ingredientes, aqueça a frigideira e doure dos dois lados.",
        },
      ],
    };
  });
  app.service("NoticeService", [
    "$timeout",
    function ($timeout) {
      this.message = "";
      let timer;
      this.show = (message) => {
        $timeout.cancel(timer);
        this.message = message;
        timer = $timeout(() => (this.message = ""), 3500);
      };
      this.close = () => {
        $timeout.cancel(timer);
        this.message = "";
      };
    },
  ]);
}
