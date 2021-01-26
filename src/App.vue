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
        :color="buttons[0].buttonColor"
        width="200"
        class="mx-auto mt-5"
        @click="arrow"
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
    return {
      buttons: [
        { complete: false, buttonColor: "primary" },
        { complete: false, buttonColor: "primary" },
      ],
    };
  },
  methods: {
    arrow: () => {
      if (arrowFunction() === 3) {
        alert("Bingo");
        this.buttons[0].buttonColor = "success";
      } else {
        alert("Try Again");
        this.buttons[0].buttonColor = "failure";
      }
    },
  },
};
</script>
