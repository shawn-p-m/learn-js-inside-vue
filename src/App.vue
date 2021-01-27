<template>
  <div id="app">
    <v-app>
      <img
        width="200"
        class="mx-auto mt-5"
        alt="Vue logo"
        src="./assets/logo.png"
      />
      <v-btn
        :color="buttonColor"
        width="200"
        class="mx-auto mt-5"
        @click="buttonColor = arrow()"
      >
        Arrow Function
      </v-btn>
    </v-app>
  </div>
</template>

<script>
import { arrowFunction } from "@/mixins/specifics";

export default {
  name: "App",

  data: () => {
    return { clicked: false, buttonColor: "primary" };
  },
  methods: {
    arrow: () => {
      return arrowFunction() === 3 ? "success" : "error";
    },
  },
};
</script>
