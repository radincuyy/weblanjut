<template>
  <div style="padding: 20px">
    <HeaderComponent :tampilkan="tampilkan" />
    <ButtonComponent :tampilkan="tampilkan" @toggle="handleToggle" />
    <CardComponent v-if="tampilkan" judul="Moving (2023)" deskripsi="A supernatural people fighting together to save the world" />
    <CardComponent v-if="tampilkan" judul="Can This Love Be Translated (2025)" deskripsi="A story about a man who can translate any language" />
    <CardComponent v-if="tampilkan" judul="All of us are dead (2024)" deskripsi="Zombie in school" />
  </div>
</template>

<script>
import ButtonComponent from './components/ButtonComponent.vue'
import CardComponent from './components/CardComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
    ButtonComponent,
    CardComponent,
    HeaderComponent
  },
  data() {
    return {
      tampilkan: true
    }
  },
  methods: {
    handleToggle() {
      this.tampilkan = !this.tampilkan
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
