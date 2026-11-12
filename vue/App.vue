<script>
import Accordion from "./components/Accordion.vue";
import Pagination from "./components/Pagination.vue";
import ProgressBar from "./components/ProgressBar.vue";
import Tabs from "./components/Tabs.vue";
import Dropdown from "./components/Dropdown.vue";
import Toast from "./components/Toast.vue";
export default {
  components: { Accordion, Pagination, ProgressBar, Tabs, Dropdown, Toast },
  data() {
    return {
      search: "",
      category: "Todas",
      page: 1,
      progress: 0,
      message: "",
      timer: null,
      categories: ["Todas", "Salgados", "Doces"],
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
  },
  computed: {
    filtered() {
      return this.items.filter(
        (i) =>
          (this.category === "Todas" || i.category === this.category) &&
          i.name.toLowerCase().includes(this.search.toLowerCase()),
      );
    },
    pages() {
      return Math.max(1, Math.ceil(this.filtered.length / 2));
    },
    visible() {
      return this.filtered.slice((this.page - 1) * 2, this.page * 2);
    },
  },
  mounted() {
    try {
      this.progress = Math.min(
        100,
        Math.max(0, Number(localStorage.getItem("biaReceitaVue")) || 0),
      );
    } catch {}
  },
  beforeUnmount() {
    clearTimeout(this.timer);
  },
  methods: {
    select(value) {
      this.category = value;
      this.page = 1;
    },
    close() {
      clearTimeout(this.timer);
      this.message = "";
    },
    save() {
      this.close();
      try {
        localStorage.setItem("biaReceitaVue", this.progress);
        this.message = "Etapa do preparo guardada!";
      } catch {
        this.message = "Não foi possível salvar neste navegador.";
      }
      this.timer = setTimeout(() => (this.message = ""), 3500);
    },
  },
};
</script>
<template>
  <main>
    <a href="/">Início</a>
    <h1>Receitas da Bia - Vue.js</h1>
    <section>
      <h2>Ajuda</h2>
      <Accordion :items="faq" />
    </section>
    <section>
      <h2>Receitas</h2>
      <label>Pesquisar <input v-model="search" @input="page = 1" /></label
      ><Dropdown :options="categories" @select="select" />
      <p>Filtro: {{ category }}</p>
      <ul>
        <li v-for="item in visible" :key="item.name">
          {{ item.name }} — {{ item.category }}
        </li>
      </ul>
      <p v-if="!filtered.length">Nenhuma receita encontrada.</p>
      <Pagination :total="pages" :current="page" @change="page = $event" />
    </section>
    <section>
      <h2>Preparo da panqueca</h2>
      <p>Quatro etapas: separar, misturar, cozinhar e servir.</p>
      <button @click="progress = 0">Recomeçar</button
      ><button
        :disabled="progress >= 100"
        @click="progress = Math.min(100, progress + 25)"
      >
        Concluir etapa</button
      ><ProgressBar :value="progress" />
    </section>
    <section>
      <h2>Receita de exemplo</h2>
      <Tabs :items="tabs" />
    </section>
    <button @click="save">Guardar etapa</button
    ><Toast :message="message" @close="close" />
  </main>
</template>
