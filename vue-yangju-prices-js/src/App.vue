<template>
  <div id="app">
    <Prices />
  </div>
</template>

<script>
import Prices from "@/components/Prices";

export default {
  name: "App",
  components: {
    Prices,
  },
};
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
