angular.module("ucsalApp").factory("AlunoService", function () {
  var alunos = [
    {
      matricula: "20262001",
      nome: "Beatriz Costa",
      curso: "Engenharia de Software",
      email: "beatriz@example.com",
      telefone: "71988880001",
      cep: "41740000",
      rua: "Rua Acadêmica, 25",
      bairro: "Pituaçu",
      cidade: "Salvador",
    },
    {
      matricula: "20262002",
      nome: "Aluno de Demonstração",
      curso: "Engenharia de Software",
      email: "aluno@example.com",
      telefone: "71999990002",
      cep: "40210000",
      rua: "Rua do Campus, 50",
      bairro: "Federação",
      cidade: "Salvador",
    },
  ];
  return {
    buscar: function (matricula) {
      return alunos.find(function (a) {
        return a.matricula === matricula;
      });
    },
    salvar: function (matricula, dados) {
      var aluno = this.buscar(matricula);
      ["email", "telefone", "cep", "rua", "bairro", "cidade"].forEach(
        function (campo) {
          aluno[campo] = dados[campo].trim();
        },
      );
      return aluno;
    },
  };
});
