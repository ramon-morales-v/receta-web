<template>
  <div class="home">
    <HomeRecetario msg="Bienvenido al recetario" />
  </div>
</template>

<script>
// @ is an alias to /src

import HomeRecetario from "./HomeRecetario.vue";

export default {
  name: "HomeView",
  components: {
    HomeRecetario,
  },
};
</script>
