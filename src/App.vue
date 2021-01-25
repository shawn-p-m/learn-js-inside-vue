<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="arrowFunction">Arrow function</button>

  </div>
</template>

<script>
import {arrowFunction} from "@/mixins/specifics";

export default {
  data: function() {
return {
    arrowFunction: arrowFunction
  };
},
  name: 'App',


}
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
