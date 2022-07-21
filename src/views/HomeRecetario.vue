<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/plato-logo.png" />
    <HolaRecetas msg="Buscador de recetas" />

    <div v-for="category in categories" :key="category.idCategory">
      <img v-bind:src="category.strCategoryThumb" alt="Comida" />
      <h6>{{ category.strCategory }}</h6>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HolaRecetas from "../components/HolaRecetas.vue";
import axios from "axios";
//idCategory, srtCategory, strCategoryDescription, strCategoryThumb

export default {
  name: "HomeRecetario",
  components: {
    HolaRecetas,
  },

  data: () => ({
    categories: null,
  }),

  methods: {
    async getTodos() {
      try {
        let response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        this.result = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getTodos();
    //this.modifyPost();
  },

  /* data () {
  return {
  categories:[]
  };
},



  methods: {
    async getCategory() {
      try {
        let response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        this.categories = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    
  },
  created() {
    this.getCategory();
    
  }, */
};
</script>
<style scoped>
</style>
