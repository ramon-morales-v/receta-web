<template>
<div class="recetas">
  <div id="nav" v-if="$store.state.user">
    <router-link to="/Recetas">Mis Recetas</router-link> |
    <router-link to="/about">Mi Perfil</router-link> |
    <button @click="$store.dispatch('logout')">Logout</button>
    Bienvenido:  {{ $store.state.user.email }}
  </div>
  <router-view/>
  </div>
</template>

<script>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
  }
}
</script>

<style>

</style>
