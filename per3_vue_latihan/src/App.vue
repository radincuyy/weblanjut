<template>
  <div>
    <h1>Selamat Datang</h1>
    <ButtonComponent />
    <CounterComponent />

    <h1>Contoh Props di Vue</h1>
    <CardComponent title="Artikel 1" description="Ini adalah artikel pertama" />
    <CardComponent title="Artikel 2" description="Ini adalah artikel kedua" />
    <CardComponent title="Artikel 3" description="Ini adalah artikel ketiga" />
  </div>
</template>

<script>
import ButtonComponent from './components/ButtonComponent.vue'
import CounterComponent from './components/CounterComponent.vue'
import CardComponent from './components/CardComponent.vue'

export default {
  name: 'App',
  components: {
    ButtonComponent,
    CounterComponent,
    CardComponent 
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
