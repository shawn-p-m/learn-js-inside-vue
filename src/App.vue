<template>
  <div id="app">
    <v-app>
      <img alt="Vue logo" src="./assets/logo.png" />
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="info" v-bind="attrs" v-on="on"> Instructions </v-btn>
        </template>

        <v-card>
          <v-card-title class="headline grey lighten-2"> Instructions </v-card-title>

          <v-card-text
            ><br />
            Click the buttons below after implementing the functions inside specifics.js to check if
            you implemented them correctly!
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="secondary" text @click="dialog = false"> Got it! 😎 </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-btn :color="arrowButtonColor" @click="arrowButtonColor = arrow()"> Arrow </v-btn>
      <v-btn :color="mapButtonColor" @click="mapButtonColor = map()"> Map </v-btn>
      <v-btn :color="reduceButtonColor" @click="reduceButtonColor = reduce()"> Reduce </v-btn>
    </v-app>
  </div>
</template>

<script>
import { arrowGivesThree, numsWithOddOrEven, averageDollaz } from "@/mixins/specifics";

const giveSuccessOrError = (condition) => {
  if (condition) {
    return "success";
  } else {
    return "error";
  }
};

export default {
  name: "App",
  created: function () {
    if (this.arrowButtonColor === "error" || this.arrowButtonColor === "success") this.arrow();
    this.arrowButtonColor = this.$store.state.arrowButtonColor;

    if (this.mapButtonColor === "error" || this.mapButtonColor === "success") this.map();
    this.mapButtonColor = this.$store.state.mapButtonColor;

    if (this.reduceButtonColor === "error" || this.reduceButtonColor === "success") this.map();
    this.reduceButtonColor = this.$store.state.reduceButtonColor;
  },
  data: () => {
    return {
      dialog: false,
      arrowButtonColor: "",
      mapButtonColor: "",
      reduceButtonColor: "",
    };
  },
  methods: {
    arrow: function () {
      this.$store.commit("saveArrowButtonColor", giveSuccessOrError(arrowGivesThree() === 3));

      return this.$store.state.arrowButtonColor;
    },
    map: function () {
      this.$store.commit(
        "saveMapButtonColor",
        giveSuccessOrError(
          JSON.stringify(numsWithOddOrEven) ===
            JSON.stringify([
              "12: is even",
              "13: is odd",
              "16: is even",
              "17: is odd",
              "8: is even",
              "32: is even",
              "33: is odd",
            ])
        )
      );

      return this.$store.state.mapButtonColor;
    },
    reduce: function () {
      this.$store.commit(
        "saveReduceButtonColor",
        giveSuccessOrError(JSON.stringify(averageDollaz) === JSON.stringify("885.53"))
      );

      return this.$store.state.reduceButtonColor;
    },
  },
};
</script>

<style lang="scss">
img {
  width: 200px;
  margin: 5px auto;
}

.v-btn {
  width: 150px;
  margin: 10px auto;
}
</style>
